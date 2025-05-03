export interface Boleta {
  number: number;
  isAvailable: boolean;
}

export interface infoRifa {
  premio: string;
  tipo: string;
  precio: number;
  listNumbers: Boleta[];
}

export interface Compra {
  nombreCompleto: string;
  numeroDocumento: string;
  telefono: string;
  direccion: string;
  correo: string;
  confirmarCorreo: string;
  precioBoleta: number;
  cantidad: number;
}
