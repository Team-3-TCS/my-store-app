import { Rol } from '../core/models/rol.model';

export const roles: Rol[] = [
  {
    id_rol: 1,
    descripcion: 'Admnistrador',
    nombre: 'ADMIN',
  },
  {
    id_rol: 2,
    descripcion: 'Cliente',
    nombre: 'CLIENT',
  },
  {
    id_rol: 3,
    descripcion: 'Vendedor',
    nombre: 'AGENT',
  },
];
