package spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import spring.entities.Item;
import spring.repository.ItemRepository;
import spring.services.ItemService;
import spring.services.impl.ItemServiceImpl;

@Controller
public class HomeController {
    @RequestMapping(value = "/*")
    public String home(){

        return "index";
    }
}
