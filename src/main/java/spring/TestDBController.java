package spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import spring.adapter.Adapter;
import spring.entities.Customer;
import spring.entities.Item;
import spring.repository.CustomerRepository;
import spring.repository.ItemRepository;
import spring.services.CustomerService;
import spring.services.ItemService;
import spring.services.impl.ItemServiceImpl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.util.List;

@Controller
public class TestDBController {
    private final ItemService itemService;
    private final CustomerService customerService;

    @Autowired
    public TestDBController(ItemService itemService, CustomerService customerService) {
        this.itemService = itemService;
        this.customerService = customerService;
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
