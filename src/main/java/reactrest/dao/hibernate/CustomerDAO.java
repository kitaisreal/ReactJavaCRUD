package reactrest.dao.hibernate;

import java.sql.SQLException;
import java.util.Collection;


public interface CustomerDAO {
    public void addCustomer(CustomersEntity customer);
    public void updateCustomer(CustomersEntity customer);
    public CustomersEntity getCustomerById(int customer_id);
    public Collection getAllCustomers();
    public void deleteCustomer(int customer_id);

}
