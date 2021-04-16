export interface Producto {
  id?: number;
  idCategoria?: number;
  categoria?: string;
  idVendedor?: number;
  nombre?: string;
  descripcion: string;
  precio: number;
  imagen?: string;
  stock: number;
  estadoActivacion?: boolean;
  fechaEdicion?: string;
  fechaModificacion?: string;
  cantidad?:number
}