import { Component, OnInit } from '@angular/core';
import {YoutubeService} from "../../services/youtube/youtube.service"

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  misVideos:any[]=[];
  videoId!:string
  constructor(public yts:YoutubeService) {
    this.yts.obtenerVideos().subscribe((resp:any)=> {
      this.misVideos = resp.items;
      console.log(this.misVideos);
  
    });
   }

  ngOnInit(): void {
  }
  detalleVideo(a:string){
    console.log("estes es el video "+a);
    
    this.videoId=a;
   $('#exampleModal').modal();
    
  }
  cerrarModal(){
    this.videoId;
    $('#exampleModal').modal('hide');
  }
}
