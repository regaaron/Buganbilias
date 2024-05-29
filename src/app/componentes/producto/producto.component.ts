import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../prodcuto';
import { Productos } from '../../productos';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  id: number = 0;
  
  producto: any;
  productos !: Producto [];
    
  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(
      params =>{
        this.id = params['id'];
        this.productos=Productos;
        this.getProductoById(this.id);
      }
    );
  }

  
  
  getProductoById(id: number) {
    this.producto = this.productos[id] || null; // Retorna el producto correspondiente o null si no existe
  }

}
