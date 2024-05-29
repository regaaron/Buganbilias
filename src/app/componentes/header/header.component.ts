import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  usuario: string = ''; 
  

  
  procesaPropagar(usuario: string){
    console.log("ProcesasPropagacion");
    console.log(usuario);
    this.usuario = usuario;
  }

  constructor(private userService: UsuarioService) {
    this.userService.currentUser.subscribe(user => {
      this.usuario = user;
    });
   }

  getMenuItems() {
    console.log("getUsuario:"+this.usuario);

    switch (this.usuario) {
      case 'admin':
        return [
          { name: 'Modificar Inventario', link: 'modificarInventario' },
          { name: 'Ver Pedidos', link: 'verPedidos' },
          { name: 'buscar producto', link: 'buscarProducto'},
          { name: 'Ver Reportes', link: 'verReportes' },
          { name: 'Generar horarios', link:'Horarios' }
        ];
      case 'vendedor':
        return [
          { name: 'Generar Nueva Venta', link: 'nuevaVenta' },
          { name: 'Ver Pedidos', link: 'verPedidos' },
          { name: 'buscar producto', link: 'buscarProducto'}
        ];
        case 'florista':
        return [
          { name: 'Ver Pedidos', link: 'verPedidos' },
          { name: 'buscar producto', link: 'buscarProducto'}
        ];
        case 'almacenista':
        return [
          { name: 'buscar productos', link: 'buscarProducto' },
          { name: 'Agregar productos', link: 'agregarProductos' },
          { name: 'Modificar productos', link: 'modificarProductos' },
          { name: 'Eliminar productos', link: 'eliminarProductos' },
          { name: 'realizar Pedido', link: 'realizarPedido' },
        ];

        case 'proveedor':
        return [
          { name: 'verOrdenCompra', link: 'verOrdenCompra' },
          { name: 'verPagos', link: 'verPagos' },
          
        ];
        case 'delivery':
          return [
            { name: 'verPedidos', link: 'verPedidos' },
            { name: 'verRutas', link: 'verRutas' },

          ];
          case 'contador':
            return [
              { name: 'verIngresos', link: 'verIngresos' },
              { name: 'verGastos', link: 'verGastos' },
              { name: 'verBalance', link: 'verBalance' },
              { name: 'verReportes', link: 'verReportes'}
  
            ];
        
      default:
        return [
          { name: 'Inicio', link: 'inicio' },
          { name: 'Acerca de', link: 'about' },
          { name: 'Creadores', link: 'creadores' }
        ];
    }
  }

  salir(){
    this.userService.clearUser();
  }


}
