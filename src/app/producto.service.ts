import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './prodcuto';
import { Productos } from './productos';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosSubject = new BehaviorSubject<Producto[]>(Productos);
  productos$ = this.productosSubject.asObservable();
  
  constructor() { }

  getProductos(): Producto[] {
    return this.productosSubject.getValue();
  }

  
  actualizarProducto(index: number, campo: string, valor: string | number) {
    const productos = this.productosSubject.getValue();
    if (campo === 'descripcion') {
      productos[index].descripcion = valor as string;
    } else if (campo === 'precio') {
      productos[index].precio = Number(valor);
    } else if (campo === 'cantidad') {
      productos[index].cantidad = Number(valor);
    }
    this.productosSubject.next(productos);
  }

  eliminarProducto(index: number) {
    const productos = this.productosSubject.getValue();
    productos.splice(index, 1);
    this.productosSubject.next(productos);
  }
}
