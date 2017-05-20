package reactrest;

import org.json.simple.JSONObject;
import reactrest.adapter.Adapter;
import reactrest.dao.Factory;
import reactrest.dao.hibernate.CustomersEntity;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;


@WebServlet(name = "customers", urlPatterns = "/customers/*")

public class customersServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        Adapter adapter = new Adapter();
        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();
        JSONObject items = adapter.CustomerListToJson((List<CustomersEntity>) Factory.getInstance().getCustomerDAO().getAllCustomers());
        out.print(items.toString());
        out.flush();


    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        super.doPost(req, resp);
    }

}
