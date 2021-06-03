import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { 
    console.log("Directiva llamada")
  
  }

  @Input("appResaltado")
  nuevoColor!: string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor||'yellow')
  //   console.log(this.nuevoColor);
  //  this.el.nativeElement.style.backgroundColor="yellow";
  }
  @HostListener('mouseleave') mouseSalio(){
    // this.el.nativeElement.style.backgroundColor=null;
    this.resaltar("") 
  }

   private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor=color;
   }

}
