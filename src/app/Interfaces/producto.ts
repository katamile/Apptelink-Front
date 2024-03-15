export interface Producto {
    idProducto: number;
    codigo: string;
    nombre: string;
    precio: number;
    stock: number;
    estado?: string;
    fechaCreacion?: Date;
}
