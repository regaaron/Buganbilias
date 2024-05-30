import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../prodcuto';
import { ProductoService } from '../../producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
  nuevoProducto: Producto = {
    imagen1: '',
    imagen2: '',
    imagen3: '',
    imagen4: '',
    descripcion: '',
    precio: 0,
    cantidad: 0
  };

  constructor(private productoService: ProductoService) {}

  agregarProducto(): void {
    this.productoService.agregarProducto(this.nuevoProducto);
    // Reiniciar el nuevo producto después de agregarlo
    this.nuevoProducto = {
      imagen1: '',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      descripcion: '',
      precio: 0,
      cantidad: 0
    };
    Swal.fire({
      icon: "success",
      text: "Producto guardado con exito!",
      
    });


  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Asigna la imagen a la propiedad correspondiente en base al campo
        switch (field) {
          case 'imagen1':
            this.nuevoProducto.imagen1 = reader.result as string;
            break;
          case 'imagen2':
            this.nuevoProducto.imagen2 = reader.result as string;
            break;
          case 'imagen3':
            this.nuevoProducto.imagen3 = reader.result as string;
            break;
          case 'imagen4':
            this.nuevoProducto.imagen4 = reader.result as string;
            break;
          default:
            break;
        }
      };
    }
  }
  
 
}
