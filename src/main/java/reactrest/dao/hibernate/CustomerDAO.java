package reactrest.dao.hibernate;

import java.sql.SQLException;
import java.util.Collection;


public interface CustomerDAO {
    public void addCustomer(CustomersEntity customer);
    public void updateCustomer(CustomersEntity customer);
    public Collection getAllCustomers();
    public void deleteCustomer(CustomersEntity customer);

}
