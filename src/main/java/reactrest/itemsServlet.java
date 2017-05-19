package reactrest;

import org.json.simple.JSONObject;
import reactrest.adapter.Adapter;
import reactrest.dao.Factory;
import reactrest.dao.hibernate.ItemsEntity;
import reactrest.dao.utils.HibernateSessionFactory;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;


@WebServlet(name = "items", urlPatterns = "/items/*")

public class itemsServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        Adapter adapter = new Adapter();
        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();
        JSONObject items = adapter.ItemListToJson((List<ItemsEntity>) Factory.getInstance().getItemDAO().getAllItems());
        out.print(items.toString());
        out.flush();


    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        super.doPost(req, resp);
    }

}