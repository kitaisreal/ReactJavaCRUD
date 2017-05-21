package spring;

import org.springframework.web.bind.annotation.*;
import reactrest.adapter.Adapter;
import reactrest.dao.Factory;
import reactrest.dao.hibernate.CustomersEntity;
import reactrest.dao.hibernate.ItemsEntity;

import java.util.List;


@RestController
public class customersController {
    @RequestMapping(value = "/customers", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public String getAllCustomers() {
        Adapter adapter = new Adapter();
        return adapter.CustomerListToJson((List<CustomersEntity>) Factory.getInstance().getCustomerDAO().getAllCustomers()).toString();
    }

    @RequestMapping(value= "/customers/{id}", method = RequestMethod.GET)
    @ResponseBody
    public String getUserByID(@PathVariable int id) {
        Adapter adapter = new Adapter();
        return adapter.CustomerToJson(Factory.getInstance().getCustomerDAO().getCustomerById(id)).toString();
    }
    @RequestMapping(value= "/customers/delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public void deleteUserByID(@PathVariable int id) {
        Factory.getInstance().getCustomerDAO().deleteCustomer(id);
    }


}
