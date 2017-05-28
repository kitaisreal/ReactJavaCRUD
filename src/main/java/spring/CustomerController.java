package spring;


import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import spring.adapter.Adapter;
import spring.entities.Customer;
import spring.entities.Item;
import spring.services.CustomerService;
import spring.services.Factory;
import spring.services.ItemService;

@Controller
public class CustomerController {
    private final Factory factory;
    private final SocketEvent socketEvent;

    @Autowired
    public CustomerController(Factory factory,SocketEvent socketEvent) {
        this.factory = factory;
        this.socketEvent=socketEvent;
    }

    @RequestMapping(value = "api/customers")
    @ResponseBody
    public String getAllCustomer(){
        Adapter adapter = new Adapter();
        return adapter.CustomerListToJson(factory.getCustomerService().getAllCustomers()).toString();
    }
    @RequestMapping(value ="api/customers/attributes",method=RequestMethod.GET)
    @ResponseBody
    public String getCustomerAttributes(){
        Adapter adapter = new Adapter();
        return adapter.CustomerAttributes().toString();
    };
    @RequestMapping(value = "api/customers/add", method = RequestMethod.POST)
    @ResponseBody
    public void addCustomer(@RequestBody String json) throws ParseException {
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject item = (JSONObject) parser.parse(json);
        String customerFirstName = (String) item.get("customerFirstName");
        String customerLastName = (String) item.get("customerLastName");
        factory.getCustomerService().addCustomer(new Customer(customerFirstName,customerLastName));
        socketEvent.sendCustomerEvent("CUSTOMER_ADDED_EVENT");
    }
    @RequestMapping(value = "api/customers/update",method = RequestMethod.POST)
    @ResponseBody
    public void updateCustomer(@RequestBody String json) throws ParseException{
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject item = (JSONObject) parser.parse(json);
        System.out.println("ITEM TO UPDATE " + item.toString());
        int customerId = Integer.parseInt(item.get("customerID").toString());
        String customerFirstName = (String) item.get("customerFirstName");
        System.out.println("CUSTOMER FIRST NAME" + customerFirstName);
        String customerLastName = (String) item.get("customerLastName");
        System.out.println("CUSTOMER SECOND NAME " + customerLastName);
        Customer customerToUpdate = factory.getCustomerService().getCustomerByID((long) customerId);
        customerToUpdate.setFirstname(customerFirstName);
        customerToUpdate.setLastname(customerLastName);
        factory.getCustomerService().updateCustomer(customerToUpdate);
        System.out.println("CUSTOMER UPDATED");

        socketEvent.sendCustomerEvent("CUSTOMER_UPDATED_EVENT");
    }
    @RequestMapping(value = "api/customers/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public  void deleteCustomerById(@PathVariable int id){
        factory.getCustomerService().deleteCustomer((long) id);
        socketEvent.sendCustomerEvent("CUSTOMER_DELETED_EVENT");
    }
}
