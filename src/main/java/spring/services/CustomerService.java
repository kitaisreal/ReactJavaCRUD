package spring.services;


import org.springframework.stereotype.Service;
import spring.entities.Customer;

import java.util.List;

@Service
public interface CustomerService {
    void addCustomer(Customer customer);
    Customer getCustomerByID(Long id);
    List<Customer> getAllCustomers();
}
