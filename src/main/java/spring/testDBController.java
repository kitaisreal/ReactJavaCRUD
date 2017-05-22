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
public class testDBController {
    private final ItemService itemService;
    private final CustomerService customerService;

    @Autowired
    public testDBController(ItemService itemService, CustomerService customerService) {
        this.itemService = itemService;
        this.customerService = customerService;
    }

    @RequestMapping(value = "/test")
    @ResponseBody
    public String testShit(){
        System.out.println("BEFORE ADD SIZE" + itemService.getAllItems().size());
        itemService.createItem(new Item("M1500","Vans",2));
        System.out.println("AFTER ADD SIZE" + itemService.getAllItems().size());

        System.out.println("BEFORE DELETE SIZE" + itemService.getAllItems().size());
        itemService.deleteItem((long) 5);
        System.out.println("AFTER DELETE SIZE" + itemService.getAllItems().size());
        return "EVERYTHING SEEMS TO BE OK";
    }

}
