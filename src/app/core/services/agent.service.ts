import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';
import { Usuario } from '../models/usuario.models';

@Injectable({
  providedIn: 'root',
})
export class AgentService {
  person: Persona = {
    nombre: 'user',
    apellido_paterno: 'apellido',
    apellido_materno: 'apellido',
    correo: 'user@user.com',
  };
  user: Usuario = {
    img_profile: 'assets/profile.png',
  };
  constructor() {}

  setAgent(person: Persona, user: Usuario) {
    this.person = person;
    this.user = user;
  }

  getAgent() {
    return [this.person, this.user];
  }
}
