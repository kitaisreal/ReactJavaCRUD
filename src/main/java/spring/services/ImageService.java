package spring.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import spring.entities.Item;

@Service
public interface ImageService {
    String getAbsolutePath();
    void createItemImage(MultipartFile file, Item item);
    void updateItemImage(MultipartFile file,Item item);
    void deleteItemImage(Item item);
}
