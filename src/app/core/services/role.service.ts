import { Rol } from './../models/rol.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { roles } from 'src/app/mock/role.mock';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  roles: Rol[] = roles;

  constructor(private http: HttpClient) {}

  getAllRole() {
    // return this.roles.filter((r) => r.id_rol == role)[0];
    return this.http.get<Rol[]>(environment.ip + '/rol');
  }
}
