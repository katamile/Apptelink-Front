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
      this.facturaService.obtenerTodasFacturas().subscribe(
        facturas => {
          this.facturas = facturas;
          console.log(this.facturas);
          
        },
        error => {
          console.error('Error al obtener las facturas:', error);
        }
      );
    }


  }
