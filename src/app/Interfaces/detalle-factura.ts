export interface DetalleFactura {
    idItem: number;
    idFactura: number;
    idProducto: number;
    precio: number;
    cantidad?: number;
    subtotal?: number;
    estado?: string;
    fechaCreacion?: Date;
}
