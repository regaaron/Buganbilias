import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AboutComponent } from './componentes/about/about.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CreadoresComponent } from './componentes/creadores/creadores.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModificarInventarioComponent } from './componentes/modificar-inventario/modificar-inventario.component';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio' ,component: InicioComponent},
    {path: 'about' ,component: AboutComponent},
    {path: 'creadores' ,component: CreadoresComponent},
    {path: 'producto/:id', component: ProductoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'modificarInventario', component: ModificarInventarioComponent},
    {path: 'agregarProductos', component: AgregarProductoComponent},



];
