import { Component, OnInit } from '@angular/core';
import { Producto } from '../../prodcuto';
import { Productos } from '../../productos';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../producto.service';


@Component({
  selector: 'app-modificar-inventario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modificar-inventario.component.html',
  styleUrl: './modificar-inventario.component.css'
})
export class ModificarInventarioComponent implements OnInit{
  productos : Producto [] = Productos;

  constructor(private productoService: ProductoService){

  }
  ngOnInit(){
    this.productoService.productos$.subscribe(productos => {
      this.productos = productos;
    });
  }

  actualizarProducto(index: number, campo: string, valor: string | number) {
    this.productoService.actualizarProducto(index, campo, valor);
  }

  eliminarProducto(index: number) {
    this.productoService.eliminarProducto(index);
  }
}
