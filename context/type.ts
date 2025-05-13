export interface Boleta {
  id ?: number;
  id_rifa ?: number;
  numero?: number;
  disponible?: boolean;
}

export interface InfoRifa {
  id ?: number;
  precio ? : number;
  fecha_fin ?: string;
  fecha_inicio ?: string;
  premio ?: string;
  tipo: string;
  is_active ?: boolean;
  numeros_especiales ?: Boleta[]
}

// export class DataRifa implements InfoRifa {
//   constructor(
//     public premio: string,
//     public tipo: string,
//     public precio: number,
//     public listNumbers: Boleta[],
//     public fecha_fin: string,
//     public fecha_inicio: string,
//     public 
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
