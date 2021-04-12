import { Injectable } from '@angular/core';
import { roles } from 'src/app/mock/role.mock';
import { Rol } from '../models/rol.model';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  roles: Rol[] = roles;

  constructor() {}

  getRole(role: number): Rol {
    return this.roles.filter((r) => r.id_rol == role)[0];
  }
}
