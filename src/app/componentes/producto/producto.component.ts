import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../prodcuto';
import { Productos } from '../../productos';
import { ProductoService } from '../../producto.service';


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
    
  constructor(private route: ActivatedRoute,private productoService: ProductoService ) { 
    route.params.subscribe(params => {
      this.id = +params['id']; // Convertir el parámetro de cadena a número
      this.producto = this.getProductos()[this.id];
    });

  }

  ngOnInit(){

  }
  
  getProductos(): Producto[] {
    return this.productoService.getProductos();
  }

}
