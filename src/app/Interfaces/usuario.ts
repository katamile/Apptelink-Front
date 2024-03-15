export interface Usuario {
    idUsuario?: number;
    username: string;
    password: string;
    intentosFallidos?: number;
    estado?: string;
    fechaCreacion?: Date;
}
