import { Component, Inject, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  producto!: Producto;

  constructor(
    public dialogRef: MatDialogRef<DetalleProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.producto = data;
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
