import { Component } from '@angular/core';
import { Producto } from '../../prodcuto';
import { ProductoService } from '../../producto.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css'
})
export class VentaComponent {
  productos: Producto[] = [];
  carrito: Producto[] = [];
  nombreComprador: string = '';
  correoComprador: string = '';
  telefonoComprador: string = '';
  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();
  }

  
  agregarAlCarrito(producto: Producto): void {
   // Verificar si ya existe el producto en el carrito
   const index = this.carrito.findIndex(item => item.descripcion === producto.descripcion);

   // Si el producto no está en el carrito o la cantidad en el carrito es menor a la cantidad disponible
   if (index === -1 || this.carrito[index].cantidad < producto.cantidad) {
       // Si el producto no está en el carrito, agregarlo
       if (index === -1) {
           this.carrito.push({ ...producto, cantidad: 1 }); // Agregar con cantidad 1
       } else {
           // Si el producto ya está en el carrito, incrementar la cantidad
           this.carrito[index].cantidad++;
       }
   } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ya no hay más productos disponibles de este tipo.",
    });
   }
  }

  eliminarDelCarrito(index: number): void {
    this.carrito.splice(index, 1);
  }

  realizarVenta() {
    // Actualizar la cantidad de productos disponibles
    this.carrito.forEach(item => {
        const index = this.productos.findIndex(producto => producto.descripcion === item.descripcion);
        if (index !== -1) {
            this.productos[index].cantidad -= item.cantidad;
        }
    });

    // Guardar los productos actualizados en el localStorage o en tu servicio de productos
    this.productoService.setProductosToLocalStorage(this.productos);

    // Generar un reporte de la venta (puedes guardar los detalles de la venta en un array para luego mostrarlo en otro componente)
    const reporteVenta = {
        fecha: new Date(),
        productosVendidos: this.carrito,
        nombreComprador: this.nombreComprador,
        correoComprador: this.correoComprador,
        telefonoComprador: this.telefonoComprador,
        totalVenta: this.calcularTotalVenta()
    };

    // Puedes guardar el reporte en el localStorage o en tu servicio de ventas
    // Aquí te muestro cómo guardar en el localStorage
    const reportes = JSON.parse(localStorage.getItem('reportes') || '[]');
    reportes.push(reporteVenta);
    localStorage.setItem('reportes', JSON.stringify(reportes));

    // Limpiar el carrito después de realizar la venta
    this.carrito = [];
    Swal.fire({
      icon: "success",
      title: "",
      text: "Venta Generada",
    });
}


calcularTotalVenta(): number {
  let total = 0;
  for (const producto of this.carrito) {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;
  }
  console.log("total:"+total);
  return total;
}

}
