import { Injectable } from '@angular/core';
import { Users } from 'src/app/mock/user.mock';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Usuario[] = Users;

  constructor() {}

  getUser(id: number): Usuario {
    return this.users.filter((u) => u.id_usuario == id)[0];
  }
}