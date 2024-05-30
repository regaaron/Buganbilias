import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { RouterModule } from '@angular/router';
import { Producto } from '../../prodcuto';
import { Productos } from '../../productos';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ProductoComponent,RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  productos !: Producto [];

  constructor(private productoService: ProductoService){
    
  }
  ngOnInit(){
    this.productoService.productos$.subscribe(productos => {
      this.productos = productos;
    });
  }
  

}
