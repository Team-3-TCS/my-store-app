import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../models/persona.model';
import { Rol } from '../models/rol.model';
import { Usuario } from '../models/usuario.models';
import { AgentService } from './agent.service';
import { ClientService } from './client.service';
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
  userData$ = new BehaviorSubject<Object>(null);
  constructor(
    private personService: PersonService,
    private userService: UserService,
    private roleService: RoleService,
    public router: Router,
    private agentService: AgentService,
    private clientService: ClientService
  ) {}

  login(email: string, password: string) {
    this.personService.getAllPersons().subscribe((p) => {
      this.person = p.filter((p) => p.correo === email)[0];
      console.log(this.person);
      if (this.person) {
        this.userService.getAllUsers().subscribe((u) => {
          this.user = u.filter((u) => u.id_usuario === this.person.usuario)[0];
          console.log(this.user);
          this.roleService.getAllRole().subscribe((r) => {
            console.log(r);

            this.role = r.filter((r) => r.id_rol == this.user['rol'])[0];
            console.log(this.role);

            if (this.user.contrasenia == password) {
              console.log(this.role.nombre);

              switch (this.role.nombre) {
                case 'ADMIN':
                  this.auth = true;
                  this.router.navigateByUrl('/admin');
                  this.authState$.next(this.auth);
                  this.userData$.next(this.user);
                  break;
                case 'CLIENTE':
                  this.auth = true;
                  this.router.navigateByUrl('/clients');
                  this.authState$.next(this.auth);
                  this.userData$.next(this.user);
                  this.clientService.setClient(this.person, this.user);
                  break;
                case 'VENDEDOR':
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
          });
        });
      } else {
        alert('Correo o password erroneos');
      }
    });
  }
  logout() {
    this.auth = false;
    this.authState$.next(this.auth);
  }

  getPersonEmail(email) {
    this.personService.getAllPersons().subscribe((p) => {
      this.person = p.filter((p) => p.correo === email)[0];
    });
  }
}
