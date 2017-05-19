package reactrest.dao.hibernate;

import java.util.Collection;

public interface ItemDAO {
    public void addItem(ItemsEntity item);
    public void updateItem(ItemsEntity item);
    public ItemsEntity getItemById(int item_id);
    public Collection getAllItems();
    public void deleteItem(int item_id);
    public Collection getItemsByBrand(String s);
    public Collection getItemsByCustomerID(CustomersEntity customer);
}
