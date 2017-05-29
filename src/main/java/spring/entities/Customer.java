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

    private String email;
    public String getEmail(){return email;}
    public void setEmail(String email){
        this.email=email;
    }

    private String password;
    public String getPassword(){return password;}
    public void setPassword(String password){this.password=password;}

    public Customer(String firstname, String lastname, String email, String password){
        this.firstname= firstname;
        this.lastname = lastname;
        this.email= email;
        this.password=password;
    }
    protected Customer(){}

}
