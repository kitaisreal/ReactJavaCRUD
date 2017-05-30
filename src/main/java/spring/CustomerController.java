package spring;


import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spring.adapter.AdapterJson;
import spring.entities.Customer;
import spring.services.Factory;

import java.util.List;
import java.util.Objects;

@Controller
public class CustomerController {
    private final Factory factory;
    private final SocketEvent socketEvent;

    @Autowired
    public CustomerController(Factory factory,SocketEvent socketEvent) {
        this.factory = factory;
        this.socketEvent=socketEvent;
    }

    @RequestMapping(value = "**/api/customer/authorization", method=RequestMethod.POST)
    @ResponseBody
    public String customerAuthorization(@RequestBody String json) throws ParseException{
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject customer = (JSONObject) parser.parse(json);
        System.out.println(customer);
        List<Customer> customers= factory.getCustomerService().getAllCustomers();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String email = (String) customer.get("email");
        String password= (String) customer.get("password");
        for (Customer cs:customers){
            if(Objects.equals(cs.getEmail(), email) && passwordEncoder.matches(password,cs.getPassword())){
                JSONObject responseCustomer = new JSONObject();
                responseCustomer.put("CustomerID",cs.getId());
                responseCustomer.put("Authorized","TRUE");
                JSONObject response = new JSONObject();
                response.put("customer",responseCustomer);
                System.out.println("TRUE");
                return response.toString();
            }
        }
        return "Authorization Failed";
    };
    @RequestMapping(value ="**/api/customer/attributes",method=RequestMethod.GET)
    @ResponseBody
    public String getCustomerAttributes(){
        AdapterJson adapter = new AdapterJson();
        return adapter.CustomerAttributes().toString();
    };

    @RequestMapping(value = "**api/customer/registration", method = RequestMethod.POST)
    @ResponseBody
    public  void deleteCustomerById(@RequestBody String json) throws ParseException {
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject customer = (JSONObject) parser.parse(json);
        System.out.println(customer);
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String customerFirstName = (String) customer.get("customerFirstName");
        String customerLastName = (String) customer.get("customerLastName");
        String customerPassword = passwordEncoder.encode((String) customer.get("password"));
        System.out.println(customerPassword);
        String customerEMail = (String) customer.get("email");
        Customer customerToAdd = new Customer(customerFirstName,customerLastName,customerEMail,customerPassword);
        System.out.println("CUSTOMER FIRST NAME " + customerFirstName);
        System.out.println("CUSTOMER LAST NAME " + customerLastName);
        System.out.println("CUSTOMER PASSWORD " + customerPassword);
        System.out.println("CUSTOMER EMAIL " +customerEMail);
        factory.getCustomerService().addCustomer(customerToAdd);
    }
}
