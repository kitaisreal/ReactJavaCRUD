package spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import spring.entities.Item;
import spring.services.ItemService;
@Controller
public class TestDBController {
    private final ItemService itemService;

    @Autowired
    public TestDBController(ItemService itemService) {
        this.itemService = itemService;
    }

    @RequestMapping(value = "/test")
    @ResponseBody
    public String testShit(){
        Item item = itemService.getItemByID((long) 13);
        item.setItemname("ASD");
        item.setBrandname("Z");
        itemService.updateItem(item);
        return "SEEMS UPDATE";
    }

}
