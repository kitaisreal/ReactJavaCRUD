package spring;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import reactrest.adapter.Adapter;
import reactrest.dao.Factory;
import reactrest.dao.hibernate.ItemsEntity;

import java.util.List;

@Controller
public class itemsController {
    @RequestMapping(value = "/items", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public String getAllUsers() {
        Adapter adapter = new Adapter();
        return adapter.ItemListToJson((List<ItemsEntity>) Factory.getInstance().getItemDAO().getAllItems()).toString();
    }
    @RequestMapping(value= "/items/{id}", method = RequestMethod.GET)
    @ResponseBody
    public String getUserByID(@PathVariable int id) {
        Adapter adapter = new Adapter();
        return adapter.ItemToJson(Factory.getInstance().getItemDAO().getItemById(id)).toString();
    }
    @RequestMapping(value= "/items/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public void deleteUserByID(@PathVariable int id) {
        Factory.getInstance().getItemDAO().deleteItem(id);
    }

}
