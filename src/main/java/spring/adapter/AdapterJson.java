package spring.adapter;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import spring.entities.Customer;
import spring.entities.Item;

import java.util.ArrayList;
import java.util.List;

public class AdapterJson {
    public JSONObject ItemListToJson(List<Item> list)
    {
        ArrayList<JSONObject> itemsJson = new ArrayList<>();
        for (Item it: list){
            itemsJson.add(ItemToJSon(it));
        }
        JSONObject response = new JSONObject();
        response.put("items",itemsJson);
        return response;
    }
    public JSONObject ItemToJSon(Item item){
        JSONObject itemJson = new JSONObject();
        itemJson.put("itemID", item.getId());
        itemJson.put("itemName", item.getItemname());
        itemJson.put("brandName",item.getBrandname());
        itemJson.put("ownerID", item.getCustomerid());
        itemJson.put("itemImageName", item.getItemimagename());
        itemJson.put("itemFullName",item.getItemname()+ " " + item.getBrandname());
        return itemJson;
    }
    public JSONObject ItemsAttributes(){
        JSONArray itemAttributes = new JSONArray();
        itemAttributes.add("itemName");
        itemAttributes.add("brandName");
        itemAttributes.add("ownerID");
        JSONObject response = new JSONObject();
        response.put("attributesItem",itemAttributes);
        return response;
    }

    public JSONObject CustomerAttributes(){
        JSONArray customerAttributes = new JSONArray();
        customerAttributes.add("customerFirstName");
        customerAttributes.add("customerLastName");
        customerAttributes.add("email");
        customerAttributes.add("password");
        JSONObject response = new JSONObject();
        response.put("attributesCustomer",customerAttributes);
        return response;
    }
}
