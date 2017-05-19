package reactrest.adapter;


import org.json.simple.JSONObject;
import reactrest.dao.hibernate.CustomersEntity;
import reactrest.dao.hibernate.ItemsEntity;

import java.util.ArrayList;
import java.util.List;

public class Adapter {
    public JSONObject ItemListToJson(List<ItemsEntity> list){
        ArrayList<JSONObject> itemsJson = new ArrayList<JSONObject>();
        for (ItemsEntity it: list){
            itemsJson.add(ItemToJson(it));
        }
        JSONObject responce = new JSONObject();
        responce.put("items", itemsJson);
        return responce;
    }
    private JSONObject ItemToJson(ItemsEntity item){
        JSONObject itemJson = new JSONObject();
        itemJson.put("itemID", item.getId());
        itemJson.put("itemName",item.getItemname());
        itemJson.put("brandName",item.getBrandname());
        itemJson.put("ownerID",item.getCustomerid());
        return itemJson;
    }
    public JSONObject CustomerListToJson(List<CustomersEntity> list){
        ArrayList<JSONObject> customersJson = new ArrayList<JSONObject>();
        for (CustomersEntity cs: list){
            customersJson.add(CustomerToJson(cs));
        }
        JSONObject responce = new JSONObject();
        responce.put("customer", customersJson);
        return responce;
    }
    private JSONObject CustomerToJson(CustomersEntity customer){
        JSONObject customerJson = new JSONObject();
        customerJson.put("customerID", customer.getId());
        customerJson.put("customerNick",customer.getNickname());
        return customerJson;
    }
}
