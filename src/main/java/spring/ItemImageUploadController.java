package spring;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;

@Controller
public class ItemImageUploadController {
    private static final String PROJECT_NAME = "ReactRest";
    private static final String ITEM_IMAGES = "ItemImages";
    private static final String TOMCAT_HOME_PROPERTY = "catalina.home";
    private static final String TOMCAT_HOME_PATH = System.getProperty(TOMCAT_HOME_PROPERTY);
    private static final String ITEM_IMAGES_PATH = TOMCAT_HOME_PATH + File.separator + PROJECT_NAME+ File.separator + ITEM_IMAGES;

    private static final File ITEM_IMAGES_DIR = new File(ITEM_IMAGES_PATH);
    private static final String ITEM_IMAGES_DIR_ABSOLUTE_PATH = ITEM_IMAGES_DIR.getAbsolutePath() + File.separator;


    @RequestMapping(value = "/uploadImage", method = RequestMethod.POST)
    @ResponseBody
    public String uploadFile(@RequestParam("file") MultipartFile file) {

        String name = null;

        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();

                name = file.getOriginalFilename();

                File dir = new File(ITEM_IMAGES_DIR_ABSOLUTE_PATH);

                if (!dir.exists()) {
                    dir.mkdirs();
                }
                System.out.println(name);
                File uploadedFile = new File(dir.getAbsolutePath() + File.separator + name);

                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(uploadedFile));
                stream.write(bytes);
                stream.flush();
                stream.close();
                System.out.println("FILE UPLOADED: " + name);
                return "You successfully uploaded file=" + name;

            } catch (Exception e) {
                return "You failed to upload " + name + " => " + e.getMessage();
            }
        } else {
            return "You failed to upload " + name + " because the file was empty.";
        }
    }
    @RequestMapping(value = "/images/{imageName}")
    @ResponseBody
    public byte[] getImage(@PathVariable(value = "imageName") String imageName) throws IOException {

        File serverFile = new File(ITEM_IMAGES_DIR_ABSOLUTE_PATH + imageName+ ".jpg");
        return Files.readAllBytes(serverFile.toPath());
    }
    @RequestMapping(value ="images/delete/{imageName}")
    @ResponseBody
    public void deleteImage(@PathVariable(value = "imageName") String imageName) throws IOException {
        File fileToDelete = new File(ITEM_IMAGES_DIR_ABSOLUTE_PATH+imageName +".jpg");
        fileToDelete.delete();
    }
}


