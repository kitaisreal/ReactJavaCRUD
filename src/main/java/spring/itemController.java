package spring;

import org.json.simple.JSONObject;
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
    public void addUser(@RequestParam JSONObject item){
        System.out.println("TRY ADD ITEM" + item.get("itemName")  + "  " + item.get("BrandName"));
    }
    @RequestMapping(value = "/items/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  void deleteUserById(@PathVariable int id){
        itemService.deleteItem((long) id);
    }
}
