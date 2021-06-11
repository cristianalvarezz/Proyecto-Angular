
package com.chris.chat.hadler;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;


public class ChatWebSocketHandler extends TextWebSocketHandler{

    private final List<WebSocketSession> WebSocketSession=new ArrayList<>();
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
       WebSocketSession.remove(session);
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
       WebSocketSession.add(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
         for ( WebSocketSession webSocketSession:WebSocketSession) {
            webSocketSession.sendMessage(message);
        }
    }
    
    
}
