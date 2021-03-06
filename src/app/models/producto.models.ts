export interface producto {
  id?: number;
  idCategoria?: number;
  idVendedor?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen?: string;
  stock: number;
  estadoActivacion?: boolean;
  fechaEdicion?: string;
  fechaModificacion?: string;
}