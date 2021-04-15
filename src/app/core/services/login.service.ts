import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
  auth = false;
  person: Persona;
  user: Usuario;
  role: Rol;
  authState$ = new BehaviorSubject<boolean>(this.auth);
  userData$ = new BehaviorSubject<Object>(null)
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
            this.auth = true;
            this.router.navigateByUrl('/admin');
            this.authState$.next(this.auth);
            this.userData$.next(this.user);
            break;
          case 'CLIENT':
            this.auth = true;
            this.router.navigateByUrl('/clients');
            this.authState$.next(this.auth);
            this.userData$.next(this.user);
            break;
          case 'AGENT':
            this.auth = true;
            this.router.navigateByUrl('/agent');
            this.authState$.next(this.auth);
            this.userData$.next(this.user);
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
  logout() {
    this.auth = false;
    this.authState$.next(this.auth);
  }
}
