import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../models/persona.model';
import { Rol } from '../models/rol.model';
import { Usuario } from '../models/usuario.models';
import { AgentService } from './agent.service';
import { PersonService } from './person.service';
import { RoleService } from './role.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  person: Persona;
  user: Usuario;
  role: Rol;
  constructor(
    private personService: PersonService,
    private userService: UserService,
    private roleService: RoleService,
    public router: Router,
    private agentService: AgentService
  ) {}

  login(email: string, password: string) {
    this.person = this.personService.getPersonEmail(email);
    if (this.person) {
      this.user = this.userService.getUser(this.person.usuario);
      this.role = this.roleService.getRole(this.user.id_rol);
      if (this.user.contrasenia == password) {
        switch (this.role.nombre) {
          case 'ADMIN':
            this.router.navigateByUrl('/admin');
            break;
          case 'CLIENT':
            this.router.navigateByUrl('/clients');
            break;
          case 'AGENT':
            this.router.navigateByUrl('/agent');
            this.agentService.setAgent(this.person, this.user);
            break;

          default:
            break;
        }
      } else {
        alert('Correo o password erroneos');
      }
    } else {
      alert('Correo o password erroneos');
    }
  }
}
