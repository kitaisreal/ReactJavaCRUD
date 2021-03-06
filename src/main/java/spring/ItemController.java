package spring;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import spring.adapter.AdapterItem;
import spring.adapter.AdapterJson;
import spring.entities.Customer;
import spring.entities.Item;
import spring.services.Factory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.UUID;

@Controller
public class ItemController {

    private final Factory factory;
    private final SocketEvent socketEvent;
    @Autowired
    public ItemController(Factory factory, SocketEvent socketEvent) {
        this.factory = factory;
        this.socketEvent=socketEvent;
    }

    @RequestMapping(value = "**/api/items", method = RequestMethod.GET)
    @ResponseBody
    public String getAllItems(){
        AdapterJson adapter = new AdapterJson();
        return adapter.ItemListToJson(factory.getItemService().getAllItems()).toString();
    }
    @RequestMapping(value ="**/api/items/attributes",method=RequestMethod.GET)
    @ResponseBody
    public String getItemAttributes(){
        AdapterJson adapter = new AdapterJson();
        return adapter.ItemsAttributes().toString();
    };
    @RequestMapping(value = "**/api/items/add", method = RequestMethod.POST)
    @ResponseBody
    public void addItem(@RequestParam("item") String json ,@RequestParam("file") MultipartFile file) throws ParseException {
        AdapterItem adapterItem = new AdapterItem();
        Item item = adapterItem.JsonItemToItem(json);
        factory.getItemService().createItem(item);
        socketEvent.sendItemEvent("ITEM_ADDED_EVENT");
        factory.getImageService().createItemImage(file,item);
    }
    @RequestMapping(value = "**/api/items/update",method = RequestMethod.POST)
    @ResponseBody
    public void updateItem(@RequestParam("item") String json ,@RequestParam(value = "file") MultipartFile file) throws ParseException{
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject item = (JSONObject) parser.parse(json);
        int itemId = Integer.parseInt(item.get("itemID").toString());
        Item oldItem = factory.getItemService().getItemByID((long) itemId);
        Item itemToUpdate = factory.getItemService().getItemByID((long) itemId);
        String itemName = (String) item.get("itemName");
        String itemBrand = (String) item.get("brandName");
        int customerId = Integer.parseInt(item.get("ownerID").toString());
        itemToUpdate.setItemname(itemName);
        itemToUpdate.setBrandname(itemBrand);
        itemToUpdate.setCustomerid(customerId);
        itemToUpdate.setItemimagename(UUID.randomUUID().toString());
        factory.getItemService().updateItem(itemToUpdate);
        factory.getImageService().updateItemImage(file, itemToUpdate, oldItem);
        socketEvent.sendItemEvent("ITEM_UPDATED_EVENT");
    }
    @RequestMapping(value ="**/api/items/get/{id}",method=RequestMethod.GET)
    @ResponseBody
    public String getItemById(@PathVariable int id){
        AdapterJson adapterJson = new AdapterJson();
        Item item = factory.getItemService().getItemByID((long)(id));
        Customer customer = factory.getCustomerService().getCustomerByID(item.getCustomerid());
        JSONObject json = adapterJson.ItemToJSon(item);
        json.put("customerFullName",customer.getFirstname()+ " " +customer.getLastname());
        JSONObject response = new JSONObject();
        response.put("singleItem",json);
        return response.toString();
    }
    @RequestMapping(value = "**/api/items/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  void deleteItemById(@PathVariable int id){
        factory.getImageService().deleteItemImage(factory.getItemService().getItemByID((long)id));
        factory.getItemService().deleteItem((long) id);
        socketEvent.sendItemEvent("ITEM_DELETED_EVENT");
    }

    @RequestMapping(value = "**/images/{imageName}", method = RequestMethod.GET)
    @ResponseBody
    public byte[] getImage(@PathVariable(value = "imageName") String imageName) throws IOException {
        File serverFile = new File(factory.getImageService().getAbsolutePath() + imageName);
        if (serverFile.exists()) return Files.readAllBytes(serverFile.toPath());
        return new byte[0];
    }
}
