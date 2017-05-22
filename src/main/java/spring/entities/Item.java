package spring.entities;

import javax.persistence.*;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private long id;
    public long getId(){return id;}
    public void setId(long id){this.id = id;}

    private String itemname;
    public String getItemname() {
        return itemname;
    }
    public void setItemname(String itemname) {
        this.itemname = itemname;
    }

    private String brandname;
    public String getBrandname(){return brandname;}
    public void setBrandname(String brandname) {this.brandname= brandname;}

    private long customerid;
    public long getCustomerid() {
        return customerid;
    }
    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }



    public Item(String itemname, String brandname, int customerid){
        this.itemname = itemname;
        this.brandname = brandname;
        this.customerid = customerid;
    }
    private Item(){}

}
