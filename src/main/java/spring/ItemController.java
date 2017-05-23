package spring;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spring.adapter.Adapter;
import spring.entities.Item;
import spring.services.CustomerService;
import spring.services.Factory;
import spring.services.ItemService;

@Controller
public class ItemController {

    private final Factory factory;

    @Autowired
    public ItemController(Factory factory) {
        this.factory = factory;
    }

    @RequestMapping(value = "/items", method = RequestMethod.GET)
    @ResponseBody
    public String getAllItems(){
        Adapter adapter = new Adapter();
        return adapter.ItemListToJson(factory.getItemService().getAllItems()).toString();
    }
    @RequestMapping(value = "/items/add", method = RequestMethod.POST)
    @ResponseBody
    public void addItem(@RequestBody String json) throws ParseException {
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject item = (JSONObject) parser.parse(json);
        String itemName = (String) item.get("itemName");
        String itemBrand = (String) item.get("brandName");
        String itemImageName = (String) item.get("itemImageName");
        int customerId = Integer.parseInt(item.get("ownerID").toString());
        factory.getItemService().createItem(new Item(itemName,itemBrand,customerId, itemImageName));
    }
    @RequestMapping(value = "/items/update",method = RequestMethod.POST)
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
    }
    @RequestMapping(value = "/items/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  void deleteItemById(@PathVariable int id){
        factory.getItemService().deleteItem((long) id);
    }
}
