package spring;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spring.adapter.Adapter;
import spring.entities.Item;
import spring.services.Factory;

@Controller
public class ItemController {

    private final Factory factory;
    private final SocketEvent socketEvent;
    @Autowired
    public ItemController(Factory factory,SocketEvent socketEvent) {
        this.factory = factory;
        this.socketEvent=socketEvent;
    }

    @RequestMapping(value = "api/items", method = RequestMethod.GET)
    @ResponseBody
    public String getAllItems(){
        Adapter adapter = new Adapter();
        return adapter.ItemListToJson(factory.getItemService().getAllItems()).toString();
    }
    @RequestMapping(value ="api/items/attributes",method=RequestMethod.GET)
    @ResponseBody
    public String getItemAttributes(){
        Adapter adapter = new Adapter();
        return adapter.ItemsAttributes().toString();
    };
    @RequestMapping(value = "api/items/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  String getItemById(@PathVariable int id){
        Adapter adapter = new Adapter();
        Item item = factory.getItemService().getItemByID((long) id);
        return adapter.singleItemToJson(item).toString();
    }

    @RequestMapping(value = "api/items/add", method = RequestMethod.POST)
    @ResponseBody
    public void addItem(@RequestBody String json) throws ParseException {
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject item = (JSONObject) parser.parse(json);
        String itemName = (String) item.get("itemName");
        String itemBrand = (String) item.get("brandName");
        String itemImageName = (String) item.get("itemImageName");
        int customerId = Integer.parseInt(item.get("ownerID").toString());
        factory.getItemService().createItem(new Item(itemName,itemBrand,customerId, itemImageName));
        socketEvent.sendItemEvent("ITEM_ADDED_EVENT");
    }
    @RequestMapping(value = "api/items/update",method = RequestMethod.POST)
    @ResponseBody
    public void updateItem(@RequestBody String json) throws ParseException{
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject item = (JSONObject) parser.parse(json);
        int itemId = Integer.parseInt(item.get("itemID").toString());
        Item itemToUpdate = factory.getItemService().getItemByID((long) itemId);
        String itemName = (String) item.get("itemName");
        String itemBrand = (String) item.get("brandName");
        String itemImageName = (String) item.get("itemImageName");
        int customerId = Integer.parseInt(item.get("ownerID").toString());
        itemToUpdate.setItemname(itemName);
        itemToUpdate.setBrandname(itemBrand);
        itemToUpdate.setCustomerid(customerId);
        itemToUpdate.setItemimagename(itemImageName);
        factory.getItemService().updateItem(itemToUpdate);
        socketEvent.sendItemEvent("ITEM_UPDATED_EVENT");
    }

    @RequestMapping(value = "api/items/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  void deleteItemById(@PathVariable int id){
        factory.getItemService().deleteItem((long) id);
        socketEvent.sendItemEvent("ITEM_DELETED_EVENT");
    }
}
