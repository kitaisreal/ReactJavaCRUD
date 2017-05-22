package spring.repository;

import org.springframework.data.repository.CrudRepository;
import spring.entities.Customer;


public interface CustomerRepository extends CrudRepository<Customer,Long> {

}
