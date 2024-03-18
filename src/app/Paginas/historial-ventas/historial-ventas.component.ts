  import { Component, OnInit } from '@angular/core';
  import { FacturaService } from 'src/app/Services/factura.service';
  import { Factura } from 'src/app/Interfaces/factura';

  @Component({
    selector: 'app-historial-ventas',
    templateUrl: './historial-ventas.component.html',
    styleUrls: ['./historial-ventas.component.css']
  })
  export class HistorialVentasComponent implements OnInit {
    facturas: Factura[] = [];

    constructor(private facturaService: FacturaService) { }
  
    ngOnInit(): void {
      this.obtenerTodasFacturas();
    }
  
    obtenerTodasFacturas(): void {
      this.facturaService.obtenerTodasFacturas()
        .subscribe(facturas => this.facturas = facturas);
    }
  
    eliminarFactura(idFactura: number): void {
      this.facturaService.eliminarFactura(idFactura)
        .subscribe(() => {
          // Eliminar la factura de la lista después de eliminarla del servidor
          this.facturas = this.facturas.filter(factura => factura.idFactura !== idFactura);
        });
    }
  }