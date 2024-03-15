import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Services/auth-interceptor.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Paginas/login/login.component';
import { PrincipalComponent } from './Paginas/principal/principal.component';
import { ClientesComponent } from './Paginas/clientes/clientes.component';
import { FacturaComponent } from './Paginas/factura/factura.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { LayoutComponent } from './Paginas/layout/layout.component';
import { HeaderComponent } from './Paginas/header/header.component';
import { ForgotPasswordComponent } from './Paginas/forgot-password/forgot-password.component';
import { HistorialVentasComponent } from './Paginas/historial-ventas/historial-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ClientesComponent,
    FacturaComponent,
    ProductosComponent,
    LayoutComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    HistorialVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
