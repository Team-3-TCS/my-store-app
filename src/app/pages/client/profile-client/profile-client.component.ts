import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario.models';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.scss']
})
export class ProfileClientComponent implements OnInit {
  myUser: any;
  authState: boolean;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
    this.loginservice.authState$.subscribe(authState => this.authState = authState);
    this.loginservice.userData$.subscribe(userData => this.myUser = userData);
   
  }
 
  logout() {
    this.loginservice.logout();
  }
}
