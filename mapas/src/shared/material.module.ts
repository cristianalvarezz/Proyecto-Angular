import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,MatButtonModule,MatSnackBarModule,MatDialogModule,MatInputModule

  ],
  exports: [
    MatCardModule,
    MatToolbarModule,MatProgressBarModule,MatButtonModule,MatSnackBarModule,
    MatDialogModule,MatInputModule
  ]
})

export class MaterialModule {}