import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";

const myModule = [
  MatCardModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule, 
  FlexLayoutModule 
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [myModule]
})
export class MaterialModule { }
