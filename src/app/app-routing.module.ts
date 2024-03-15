import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Paginas/login/login.component';
import { LayoutComponent } from './Paginas/layout/layout.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { ClientesComponent } from './Paginas/clientes/clientes.component';
import { FacturaComponent } from './Paginas/factura/factura.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';
import { HeaderComponent } from './Paginas/header/header.component';
import { ForgotPasswordComponent } from './Paginas/forgot-password/forgot-password.component';
import { HistorialVentasComponent } from './Paginas/historial-ventas/historial-ventas.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'layout', component:LayoutComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'factura', component:FacturaComponent},
  {path: 'principal', component:PrincipalComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: 'historial-ventas', component:HistorialVentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
