import { Cliente } from "./cliente";
import { DetalleFactura } from "./detalle-factura";

export interface Factura {
    idFactura: number;
    numeroFactura: string;
    idCliente: Cliente;
    subtotal?: number;
    porcentajeIgv?: number;
    igv?: number;
    total?: number;
    estado?: string;
    fechaCreacion: Date;
    detalleFactura: DetalleFactura;
}
