package spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class SocketEvent {
    private final SimpMessagingTemplate websocket;


    @Autowired
    public SocketEvent(SimpMessagingTemplate websocket) {
        this.websocket = websocket;
    }


    public void sendItemEvent(String event){
        this.websocket.convertAndSend("/topic/items",event);
    }
    public void sendCustomerEvent(String event){
        this.websocket.convertAndSend("/topic/customers",event);
    }
}
