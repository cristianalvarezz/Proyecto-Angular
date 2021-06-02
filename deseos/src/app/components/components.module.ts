import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';

@NgModule({
  declarations: [ListasComponent],
  exports: [ListasComponent],
  imports: [
    //trae el ngfor ngif etc
    CommonModule,
  ],
})
export class ComponentsModule {}
