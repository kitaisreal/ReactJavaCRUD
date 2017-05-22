package spring;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spring.adapter.Adapter;
import spring.entities.Item;
import spring.services.CustomerService;
import spring.services.ItemService;

@Controller
public class itemController {

    private final ItemService itemService;

    @Autowired
    public itemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @RequestMapping(value = "/items", method = RequestMethod.GET)
    @ResponseBody
    public String getAllItems(){
        Adapter adapter = new Adapter();
        return adapter.ItemListToJson(itemService.getAllItems()).toString();
    }
    @RequestMapping(value = "/items/add", method = RequestMethod.POST)
    @ResponseBody
    public void addUser(@RequestBody String json) throws ParseException {
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject item = (JSONObject) parser.parse(json);
        String itemName = (String) item.get("itemName");
        String itemBrand = (String) item.get("itemBrand");
        int customerId = Integer.parseInt(item.get("customerID").toString());
        itemService.createItem(new Item(itemName,itemBrand,customerId));
    }
    @RequestMapping(value = "/items/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  void deleteUserById(@PathVariable int id){
        itemService.deleteItem((long) id);
    }
}
