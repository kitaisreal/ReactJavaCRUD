package spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Factory {
    private final ItemService itemService;
    private final CustomerService customerService;
    private final ImageService imageService;

    @Autowired
    public Factory(ItemService itemService, CustomerService customerService, ImageService imageService) {
        this.itemService = itemService;
        this.customerService = customerService;
        this.imageService = imageService;
    }

    public ItemService getItemService() {
        return itemService;
    }

    public CustomerService getCustomerService() {
        return customerService;
    }

    public ImageService getImageService(){ return imageService;}
}
