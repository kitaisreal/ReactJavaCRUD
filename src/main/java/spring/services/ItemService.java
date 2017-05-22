package spring.services;


import org.springframework.stereotype.Service;
import spring.entities.Item;

import java.util.List;

@Service
public interface ItemService {
    void createItem(Item item);
    void deleteItem(Long id);
    void updateItem(Item item);
    Item getItemByID(Long id);
    List<Item> getAllItems();
}
