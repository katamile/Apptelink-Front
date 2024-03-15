import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'https://localhost:44334/api/Cliente'; // Reemplaza esta URL con la URL correcta de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener todos los clientes
  getAllClientes(): Observable<Cliente[]> {
    const url = '/ConsultarTodos'; // Endpoint adicional
    return this.http.get<Cliente[]>(this.apiUrl + url);
  }
  
  // Método para obtener un cliente por su ID
  getClienteById(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/ConsultarPorId/${id}`;
    return this.http.get<Cliente>(url);
  }

  // Método para agregar un nuevo cliente
  addCliente(cliente: Cliente): Observable<Cliente> {
    const url= `${this.apiUrl}/CrearCliente`;
    return this.http.post<Cliente>(url, cliente); // Cambiado el orden de los parámetros
  }

  // Método para actualizar un cliente existente
  updateCliente(cliente: Cliente): Observable<any> {
    const url= `${this.apiUrl}/ActualizarCliente/${cliente.idCliente}`; // Asumiendo que tienes una propiedad 'id' en el objeto 'cliente'
    return this.http.put<Cliente>(url, cliente); // Usar PUT en lugar de POST para actualizar
  }

  // Método para eliminar un cliente por su ID
  deleteCliente(idCliente: number): Observable<any> {
    const url= `${this.apiUrl}/EliminarCliente/${idCliente}`;
    return this.http.post<any>(url, null);
  }
}
