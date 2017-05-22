package spring;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import spring.adapter.Adapter;
import spring.services.CustomerService;
import spring.services.ItemService;

@Controller
public class customerController {
    private final CustomerService customerService;
    @Autowired
    public customerController(CustomerService customerService) {
        this.customerService = customerService;
    }
    @RequestMapping(value = "/customers")
    @ResponseBody
    public String testShit(){
        Adapter adapter = new Adapter();
        return adapter.CustomerListToJson(customerService.getAllCustomers()).toString();
    }
}
