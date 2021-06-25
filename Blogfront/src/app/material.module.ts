import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule} from "@angular/material/form-field"
import { MatButtonModule} from "@angular/material/button"
import { MatInputModule} from "@angular/material/input"
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
const myModule = [
  MatCardModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule, 
  FlexLayoutModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatButtonToggleModule,MatTabsModule,MatTableModule,NgxDatatableModule
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [myModule]
})
export class MaterialModule { }
