import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  users = [
    { username: 'admin', password: 'admin', message: 'Bienvenido admin' },
    { username: 'vendedor', password: 'vendedor', message: 'Bienvenido vendedor' },
    { username: 'florista', password: 'florista', message: 'Bienvenido florista' },
    { username: 'almacenista', password: 'almacenista', message: 'Bienvenido almacenista' },
    { username: 'proveedor', password: 'proveedor', message: 'Bienvenido proveedor' },
    { username: 'delivery', password: 'delivery', message: 'Bienvenido delivery' },
    { username: 'contador', password: 'contador', message: 'Bienvenido contador' }


    // Puedes agregar más usuarios aquí
  ];

  constructor(private router: Router, private userService: UsuarioService){

  }

  login(){
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    const user = this.users.find(user => user.username === this.username && user.password === this.password);

    if (user) {
      Swal.fire(user.message);
      this.userService.changeUser(this.username); 
      this.router.navigate(['/inicio']);

    } else {
      Swal.fire("Credenciales incorrectas, por favor intenta de nuevo");
    }
  
  }


  
}
