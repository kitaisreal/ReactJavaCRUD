package reactrest.dao.hibernate;

import java.sql.SQLException;
import java.util.Collection;


public interface CustomerDAO {
    public void addCustomer(CustomersEntity customer) throws SQLException;
    public void updateCustomer(CustomersEntity customer) throws SQLException;
    public Collection getAllCustomers() throws SQLException;
    public void deleteCustomer(CustomersEntity customer) throws SQLException;

}
