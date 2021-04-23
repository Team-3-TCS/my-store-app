import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/mock/user.mock';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Usuario[] = Users;

  constructor(private http: HttpClient) {}

  getAllUsers() {
    // return this.users.filter((u) => u.id_usuario == id)[0];
    return this.http.get<Usuario[]>(environment.ip + '/usuario');
  }
}
