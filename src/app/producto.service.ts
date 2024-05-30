import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './prodcuto';
import { Productos } from './productos';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosSubject = new BehaviorSubject<Producto[]>(this.getProductosFromLocalStorage());
  productos$ = this.productosSubject.asObservable();
  
  constructor() { }

  private getProductosFromLocalStorage(): Producto[] {
    const productos = localStorage.getItem('productos');
    return productos ? JSON.parse(productos) : Productos;
  }

  private setProductosToLocalStorage(productos: Producto[]): void {
    localStorage.setItem('productos', JSON.stringify(productos));
  }

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
    this.setProductosToLocalStorage(productos);
    this.productosSubject.next(productos);
  }

  eliminarProducto(index: number) {
    const productos = this.productosSubject.getValue();
    productos.splice(index, 1);
    this.setProductosToLocalStorage(productos);
    this.productosSubject.next(productos);
  }

  agregarProducto(nuevoProducto: Producto): void {
    const productos = this.productosSubject.getValue();
    productos.push(nuevoProducto);
    this.setProductosToLocalStorage(productos);
    this.productosSubject.next(productos);
  }
}
