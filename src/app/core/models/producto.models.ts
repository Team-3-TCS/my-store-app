export interface Producto {
  id?: number;
  idCategoria?: number;
  categoria?: string;
  idVendedor?: number;
  nombre?: string;
  descripcion: string;
  precio: number;
  imagen?: string[];
  stock: number;
  estado_activacion?: boolean;
  fechaEdicion?: string;
  fechaModificacion?: string;
  cantidad?:number
}