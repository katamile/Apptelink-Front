export interface Cliente {
    idCliente: number;
    identificacion: string;
    nombre: string;
    apellido: string;
    direccion?: string;
    correo?: string;
    estado: string;
    fechaCreacion: Date;
}
