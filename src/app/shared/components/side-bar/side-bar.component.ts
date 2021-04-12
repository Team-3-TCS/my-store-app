import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona.model';
import { Usuario } from 'src/app/core/models/usuario.models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  person: Persona;
  user: Usuario;

  @Input()
  agent: any;

  constructor() {}

  ngOnInit(): void {
    this.person = this.agent[0];
    this.user = this.agent[1];
  }
}
