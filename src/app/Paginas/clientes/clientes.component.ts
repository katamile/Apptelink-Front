import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/cliente.service'; 
import { Cliente } from 'src/app/Interfaces/cliente'; 

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = []; // Cambiado a un arreglo de objetos Cliente
  
  clienteSeleccionado: Cliente = {
    identificacion: "",
    nombre: "",
    apellido: "",
    direccion: "",
    correo: "",
    idCliente: 0,
    estado: '',
    fechaCreacion: new Date() 
  };

  editarCliente = false;
  mostrarModal = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes(): void {
    this.clienteService.getAllClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(this.clientes);
    });
  }

    abrirModalParaCrear() {
    this.editarCliente = false;
    this.mostrarModal = true;
    this.clienteSeleccionado = {
      identificacion: "",
      nombre: "",
      apellido: "",
      direccion: "",
      correo: "",
      idCliente: 0,
      estado: '',
      fechaCreacion: new Date()
    };
  }

  abrirModalParaEditar(cliente: Cliente) {
    this.editarCliente = true;
    this.clienteSeleccionado = cliente;
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarCliente() {
    if (this.editarCliente) {
      this.clienteService.updateCliente(this.clienteSeleccionado).subscribe(response => {
        // Lógica después de guardar la edición del cliente
        this.cerrarModal();
      });
    } else {
      this.clienteService.addCliente(this.clienteSeleccionado).subscribe(response => {
        // Lógica después de guardar el nuevo cliente
        this.cerrarModal();
      });
    }
  }

  eliminarCliente(idCliente: number) {
    this.clienteService.deleteCliente(idCliente).subscribe(
      () => {
        console.log(`Cliente con ID ${idCliente} eliminado exitosamente.`);
        // Aquí podrías realizar alguna acción adicional si es necesario
      },
      error => {
        console.error('Ocurrió un error al eliminar el cliente:', error);
        // Manejo de errores, como mostrar un mensaje al usuario
      }
    );
  }
  

}