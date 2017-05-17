package reactrest.dao.hibernate;

import javax.persistence.*;

/**
 * Created by yetti on 5/17/2017.
 */
@Entity
@Table(name = "items", schema = "testdb", catalog = "")
public class ItemsEntity {
    private int id;
    private int customerid;
    private String itemname;
    private String brandname;

    @Id
    @Column(name = "ID")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "CUSTOMERID")
    public int getCustomerid() {
        return customerid;
    }

    public void setCustomerid(int customerid) {
        this.customerid = customerid;
    }

    @Basic
    @Column(name = "ITEMNAME")
    public String getItemname() {
        return itemname;
    }

    public void setItemname(String itemname) {
        this.itemname = itemname;
    }

    @Basic
    @Column(name = "BRANDNAME")
    public String getBrandname() {
        return brandname;
    }

    public void setBrandname(String brandname) {
        this.brandname = brandname;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ItemsEntity that = (ItemsEntity) o;

        if (id != that.id) return false;
        if (customerid != that.customerid) return false;
        if (itemname != null ? !itemname.equals(that.itemname) : that.itemname != null) return false;
        if (brandname != null ? !brandname.equals(that.brandname) : that.brandname != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + customerid;
        result = 31 * result + (itemname != null ? itemname.hashCode() : 0);
        result = 31 * result + (brandname != null ? brandname.hashCode() : 0);
        return result;
    }
}
