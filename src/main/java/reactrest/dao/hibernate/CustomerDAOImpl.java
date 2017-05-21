package reactrest.dao.hibernate;


import org.hibernate.Hibernate;
import org.hibernate.Session;
import reactrest.dao.utils.HibernateSessionFactory;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class CustomerDAOImpl implements CustomerDAO {

    public void addCustomer(CustomersEntity customer){
        Session session = null;
        try {
            session = HibernateSessionFactory.getSessionFactory().openSession();
            session.beginTransaction();
            session.save(customer);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {

                session.close();
            }
        }
    }

    public void updateCustomer(CustomersEntity customer)  {
        Session session = null;
        try {
            session = HibernateSessionFactory.getSessionFactory().openSession();
            session.beginTransaction();
            session.update(customer);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
    }

    public CustomersEntity getCustomerById(int customer_id) {
        Session session = null;
        CustomersEntity customer = null;
        try {
            session = HibernateSessionFactory.getSessionFactory().openSession();
            customer = (CustomersEntity) session.load(CustomersEntity.class,customer_id );
            Hibernate.initialize(customer);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return customer;
    }

    public Collection getAllCustomers(){
        Session session = null;
        List customers = new ArrayList<CustomersEntity>();
        try {
            session = HibernateSessionFactory.getSessionFactory().openSession();
            customers = session.createCriteria(CustomersEntity.class).list();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
        return customers;
    }


    public void deleteCustomer(int customer_id) {
        Session session = null;
        try {
            CustomersEntity customer = getCustomerById(customer_id);
            session = HibernateSessionFactory.getSessionFactory().openSession();
            session.beginTransaction();
            session.delete(customer);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session != null && session.isOpen()) {
                session.close();
            }
        }
    }
}
