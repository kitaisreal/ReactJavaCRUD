package spring.services.impl;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.DigestUtils;
import org.springframework.web.multipart.MultipartFile;
import spring.entities.Item;
import spring.services.ImageService;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

@Component("ImageService")
@Transactional
public class ImageServiceImpl implements ImageService {

    private static final String PROJECT_NAME = "ReactRest";
    private static final String ITEM_IMAGES = "ItemImages";
    private static final String TOMCAT_HOME_PROPERTY = "catalina.home";
    private static final String TOMCAT_HOME_PATH = System.getProperty(TOMCAT_HOME_PROPERTY);
    private static final String ITEM_IMAGES_PATH = TOMCAT_HOME_PATH + File.separator + PROJECT_NAME + File.separator + ITEM_IMAGES;

    private static final File ITEM_IMAGES_DIR = new File(ITEM_IMAGES_PATH);
    private static final String ITEM_IMAGES_DIR_ABSOLUTE_PATH = ITEM_IMAGES_DIR.getAbsolutePath() + File.separator;


    public String getAbsolutePath() {
        return ITEM_IMAGES_DIR_ABSOLUTE_PATH;
    }

    @Override
    public void createItemImage(MultipartFile file, Item item) {
        String name = null;
        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();

                name = item.getItemimagename();

                File dir = new File(ITEM_IMAGES_DIR_ABSOLUTE_PATH);

                if (!dir.exists()) {
                    dir.mkdirs();
                }

                File uploadedFile = new File(dir.getAbsolutePath() + File.separator + name);
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(uploadedFile));
                stream.write(bytes);
                stream.flush();
                stream.close();
                System.out.println("FILE UPLOADED: " + name);

            } catch (Exception ignored) {
            }
        }
    }

    @Override
    public void updateItemImage(MultipartFile file, Item item, Item olditem) {
        deleteItemImage(olditem);
        createItemImage(file,item);
    }

    @Override
    public void deleteItemImage(Item item) {
        File fileToDelete = new File(ITEM_IMAGES_DIR_ABSOLUTE_PATH+item.getItemimagename());
        if (fileToDelete.exists()){fileToDelete.delete();}
    }
}
