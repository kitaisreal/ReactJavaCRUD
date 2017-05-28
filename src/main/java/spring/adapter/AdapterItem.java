package spring.adapter;

import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import spring.entities.Item;
import java.util.UUID;

public class AdapterItem {
    public Item JsonItemToItem(String json){
        org.json.simple.parser.JSONParser parser = new org.json.simple.parser.JSONParser();
        JSONObject jsonItem = null;
        try {
            jsonItem = (JSONObject) parser.parse(json);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        String itemName = (String) jsonItem.get("itemName");
        String itemBrand = (String) jsonItem.get("brandName");
        String itemId = (String) jsonItem.get("itemId");
        String uuid = UUID.randomUUID().toString();
        String itemImageName = uuid;
        int customerId = Integer.parseInt(jsonItem.get("ownerID").toString());
        Item item = new Item(itemName,itemBrand,customerId, itemImageName);
        return item;
    }
}
