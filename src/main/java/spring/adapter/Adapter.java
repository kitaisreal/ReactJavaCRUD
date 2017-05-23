package spring.adapter;


import org.json.simple.JSONObject;
import spring.entities.Customer;
import spring.entities.Item;

import java.util.ArrayList;
import java.util.List;

public class Adapter {
    public JSONObject ItemListToJson(List<Item> list)
    {
        ArrayList<JSONObject> itemsJson = new ArrayList<>();
        for (Item it: list){
            itemsJson.add(ItemToJSon(it));
        }
        JSONObject responce = new JSONObject();
        responce.put("items",itemsJson);
        return responce;
    }
    public JSONObject CustomerListToJson(List<Customer> list){
        ArrayList<JSONObject> customersJson = new ArrayList<>();
        for (Customer it: list){
            customersJson.add(CustomerToJson(it));
        }
        JSONObject responce = new JSONObject();
        responce.put("customers", customersJson);
        return responce;

    }
    public JSONObject ItemToJSon(Item item){
        JSONObject itemJson = new JSONObject();
        itemJson.put("itemID", item.getId());
        itemJson.put("itemName", item.getItemname());
        itemJson.put("brandName",item.getBrandname());
        itemJson.put("ownerID", item.getCustomerid());
        itemJson.put("itemImageName", item.getItemimagename());
        return itemJson;
    }
    public JSONObject CustomerToJson(Customer customer){
        JSONObject customerJson = new JSONObject();
        customerJson.put("customerID", customer.getId());
        customerJson.put("customerFirstName",customer.getFirstname());
        customerJson.put("customerLastName", customer.getLastname());
        return customerJson;
    }
}
