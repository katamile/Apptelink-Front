import { Component } from '@angular/core';
import { Cliente } from 'src/app/Interfaces/cliente';
import { DetalleFactura } from 'src/app/Interfaces/detalle-factura';
import { Factura } from 'src/app/Interfaces/factura';
import { FacturaService } from 'src/app/Services/factura.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {
  factura: Factura = {
    idFactura: 0,
    numeroFactura: '',
    idCliente: { 
      idCliente: 0,
      nombre: '',
      apellido: '',
      identificacion: '',
      direccion: '',
      correo: '',
      estado: '',
      fechaCreacion: new Date()
    },
    detalleFactura: {
      idItem: 0,
      idFactura: 0,
      idProducto: 0,
      precio: 0,
      cantidad: 0,
      subtotal: 0,
      estado: '',
      fechaCreacion: new Date()
    },
    fechaCreacion:new Date()
  };

  cliente: Cliente = { idCliente: 0, nombre: '', apellido: '', identificacion: '', fechaCreacion: new Date() , direccion: '', correo: '', estado: '',};
  detalleFactura: DetalleFactura = { idItem: 0, idFactura: 0, idProducto: 0, precio: 0, cantidad: 0, subtotal: 0, estado: '', fechaCreacion: new Date() };

  constructor(private facturaService: FacturaService) { }

  // Método para crear una nueva factura
  crearFactura(): void {
    this.facturaService.crearFactura(this.factura)
      .subscribe({
        next: response => {
          console.log('Factura creada exitosamente:', response);
          // Aquí puedes realizar alguna acción adicional después de crear la factura
        },
        error: err => {
          console.error('Error al crear la factura:', err);
          // Aquí puedes manejar el error, mostrar un mensaje de error, etc.
        }
      });
  } 

}
