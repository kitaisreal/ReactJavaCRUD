package spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Factory {
    private final ItemService itemService;
    private final CustomerService customerService;

    @Autowired
    public Factory(ItemService itemService, CustomerService customerService) {
        this.itemService = itemService;
        this.customerService = customerService;
    }

    public ItemService getItemService() {
        return itemService;
    }

    public CustomerService getCustomerService() {
        return customerService;
    }
}
