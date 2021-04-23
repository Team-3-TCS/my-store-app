import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  person: Persona = {
    nombre: 'user',
    apellido_paterno: 'apellido',
    apellido_materno: 'apellido',
    correo: 'user@user.com',
  };
  user: Usuario = {
    imagen: 'assets/profile.png',
  };
  constructor(private http: HttpClient) {}

  getClientUser() {
    return this.user;
  }

  getClientPerson() {
    return this.person;
  }

  setClient(person: Persona, user: Usuario) {
    this.person = person;
    this.user = user;
  }
}
