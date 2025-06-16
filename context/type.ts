export interface Boleta {
  id?: number;
  id_rifa?: number;
  numero?: number;
  disponible?: boolean;
}

export interface InfoRifa {
  id?: number;
  precio?: number;
  fecha_fin?: string;
  fecha_inicio?: string;
  premio?: string;
  tipo: string;
  is_active?: boolean;
  image_premio?: string;
  numeros_especiales?: Boleta[];
  boletas?: BoletaNormal[];
}

export interface BoletaNormal {
  id_rifa: number;
  numero: number;
  id_usuario: number;
  id: number;
}

export interface RifaCreate {
  premio: string;
  tipo: string;
  precio: number;
}

export interface Compra {
  id_rifa: number;
  nombre_completo: string;
  cedula: string;
  telefono_celular: string;
  direccion: string;
  email: string;
  confirmarCorreo?: string;
  precio: number;
  cantidad: number;
}

export interface Token {
  token: string;
}

export interface Ganador {
  id?: number;
  cedula?: string;
  email?: string;
  nombre?: string;
  direccion?: string;
  celular?: string;
}



export interface ContextType {
  cantidad: number;
  sumarBoleta: () => void;
  restarBoleta: () => void;
  total: number;
  setCombo: (cantidad: number) => void;
  data: InfoRifa | null;
  setData: (data: InfoRifa) => void;
  setToken: (token: Token) => void;
  token: Token | null;
  getRifas: () => void;
  rifas: InfoRifa[];
  setnoVendidas: (num: number) => void;
  noVendidas: number;
  base_url?: string;
}