package spring.services;


import org.springframework.stereotype.Service;
import spring.entities.Item;

import java.util.List;

@Service
public interface ItemService {
    void createItem(Item item);
    void deleteItem(Long id);
    List<Item> getAllItems();
}
