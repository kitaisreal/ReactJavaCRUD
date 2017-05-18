package reactrest;

import org.json.simple.JSONObject;
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

@WebServlet(name = "mainServlet", urlPatterns = "/asdasd")
public class mainServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        List<ItemsEntity> items = (List<ItemsEntity>) Factory.getInstance().getItemDAO().getAllItems();
        for (ItemsEntity item:items){
            out.print("<h1>"+item.getItemname()+" " + item.getBrandname() +"</h1>");
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {

        super.doPost(req, resp);
    }

}