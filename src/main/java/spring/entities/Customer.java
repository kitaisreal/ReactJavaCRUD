package spring.entities;

import javax.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    public long getId(){ return id;}

    private String firstname;
    public String getFirstname() {
        return firstname;
    }
    public void setFirstname(String firstname) {
        this.firstname= firstname;
    }

    private String lastname;
    public String getLastname(){return lastname;}
    public void setLastname(String lastname) {this.lastname= lastname;}



    public Customer(String firstname, String lastname){
        this.firstname= firstname;
        this.lastname = lastname;
    }
    protected Customer(){}

}
