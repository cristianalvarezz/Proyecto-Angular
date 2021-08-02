import { Component } from '@angular/core';
import { WebsocketService } from './services/websocket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
export class AppComponent implements OnInit{

  constructor(
    public wsService: WebsocketService
  ) { }
  ngOnInit(): void {
    this.chatService.getMessagesPrivate().subscribe(msg=>{
      console.log(msg);
    this.chatService.getMessagesGlobal().subscribe(msg=>{
      console.log(msg);

}

