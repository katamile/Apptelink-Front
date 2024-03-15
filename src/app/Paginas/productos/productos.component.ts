import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/Services/productos.service';
import { Producto } from 'src/app/Interfaces/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  
  productoSeleccionado: Producto = {
    idProducto: 0,
    codigo: "",
    nombre: "",
    precio: 0,
    stock: 0,
    estado: "",
    fechaCreacion: new Date() 
  };

  editarProducto = false;
  mostrarModal = false;

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos(): void {
    this.productoService.getAllProductos().subscribe(productos => {
      this.productos = productos;
      console.log(this.productos);
    });
  }

  abrirModalParaCrear() {
    this.editarProducto = false;
    this.mostrarModal = true;
    this.productoSeleccionado = {
      idProducto: 0,
      codigo: "",
      nombre: "",
      precio: 0,
      stock: 0,
      estado: "",
      fechaCreacion: new Date() 
    };
  }

  abrirModalParaEditar(producto: Producto) {
    this.editarProducto = true;
    this.productoSeleccionado = producto;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarProducto() {
    if (this.editarProducto) {
      this.productoService.updateProducto(this.productoSeleccionado).subscribe(response => {
        // Lógica después de guardar la edición del producto
        this.cerrarModal();
      });
    } else {
      this.productoService.addProducto(this.productoSeleccionado).subscribe(response => {
        // Lógica después de guardar el nuevo producto
        this.cerrarModal();
      });
    }
  }

  eliminarProducto(idProducto: number) {
    this.productoService.deleteProducto(idProducto).subscribe(
      () => {
        console.log(`Producto con ID ${idProducto} eliminado exitosamente.`);
        // Aquí podrías realizar alguna acción adicional si es necesario
      },
      error => {
        console.error('Ocurrió un error al eliminar el producto:', error);
        // Manejo de errores, como mostrar un mensaje al usuario
      }
    );
  }
}
