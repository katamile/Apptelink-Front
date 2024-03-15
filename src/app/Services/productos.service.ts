import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl = 'https://localhost:44334/api/Producto'; // URL de tu API para productos

  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos
  getAllProductos(): Observable<Producto[]> {
    const url = '/ConsultarTodos'; // Endpoint adicional para obtener todos los productos
    return this.http.get<Producto[]>(this.apiUrl + url);
  }
  
  // Método para obtener un producto por su ID
  getProductoById(id: number): Observable<Producto> {
    const url = `${this.apiUrl}/ConsultarPorId/${id}`;
    return this.http.get<Producto>(url);
  }

  // Método para agregar un nuevo producto
  addProducto(producto: Producto): Observable<Producto> {
    const url= `${this.apiUrl}/CrearProducto`;
    return this.http.post<Producto>(url, producto);
  }

  // Método para actualizar un producto existente
  updateProducto(producto: Producto): Observable<any> {
    const url= `${this.apiUrl}/ActualizarProducto/${producto.idProducto}`; // Asumiendo que tienes una propiedad 'idProducto' en el objeto 'producto'
    return this.http.put<Producto>(url, producto);
  }

  // Método para eliminar un producto por su ID
  deleteProducto(idProducto: number): Observable<any> {
    const url= `${this.apiUrl}/EliminarProducto/${idProducto}`;
    return this.http.post<any>(url, null);
  }
}
