import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../Interfaces/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl = 'https://localhost:44334/api/Factura';

  constructor(private http: HttpClient) { }

  // Método para obtener todas las facturas
  obtenerTodasFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(`${this.apiUrl}/ConsultarTodas`);
  }

  // Método para obtener una factura por su ID
  obtenerFacturaPorId(idFactura: number): Observable<Factura> {
    return this.http.get<Factura>(`${this.apiUrl}/ConsultarPorId/${idFactura}`);
  }

  // Método para obtener una factura por su número
  obtenerFacturaPorNumero(numeroFactura: string): Observable<Factura> {
    return this.http.get<Factura>(`${this.apiUrl}/ConsultarFactura/${numeroFactura}`);
  }

  // Método para crear una nueva factura
  crearFactura(factura: Factura): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/CrearFactura`, factura);
  }

  // Método para eliminar una factura por su ID
  eliminarFactura(idFactura: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/EliminarFactura/${idFactura}`, null);
  }

}
