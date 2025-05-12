export interface Boleta {
  number: number;
  isAvailable: boolean;
}

export interface InfoRifa {
  id: number;
  fecha_fin: string;
  fecha_inicio: string;
  premio: string;
  tipo: string;
  is_active: boolean;
  listNumbers: Boleta[];
}

// export class DataRifa implements InfoRifa {
//   constructor(
//     public premio: string,
//     public tipo: string,
//     public precio: number,
//     public listNumbers: Boleta[]
//   ) {}
// }

export interface Compra {
  nombreCompleto: string;
  numeroDocumento: string;
  telefono: string;
  direccion: string;
  correo: string;
  confirmarCorreo: string;
  precioBoleta: number;
  cantidad: number;
  total: number;
}
