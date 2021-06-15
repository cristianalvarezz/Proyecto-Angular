import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,MatButtonModule,MatSnackBarModule

  ],
  exports: [
    MatCardModule,
    MatToolbarModule,MatProgressBarModule,MatButtonModule,MatSnackBarModule
  ]
})

export class MaterialModule {}