import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona.model';
import { Usuario } from 'src/app/core/models/usuario.models';
import { ClientService } from 'src/app/core/services/client.service';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.scss'],
})
export class ProfileClientComponent implements OnInit {
  myUser: any;
  authState: boolean;
  person: Persona;
  user: Usuario;
  constructor(
    private loginservice: LoginService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.loginservice.authState$.subscribe(
      (authState) => (this.authState = authState)
    );
    this.loginservice.userData$.subscribe(
      (userData) => (this.myUser = userData)
    );
    console.log(this.clientService.getClientUser);
    this.user = this.clientService.getClientUser();
    this.person = this.clientService.getClientPerson();
  }

  logout() {
    this.loginservice.logout();
  }
}
