import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/core/models/persona.model';
import { Usuario } from 'src/app/core/models/usuario.models';

@Component({
  selector: 'app-sider-bar-agent',
  templateUrl: './sider-bar-agent.component.html',
  styleUrls: ['./sider-bar-agent.component.scss'],
})
export class SiderBarAgentComponent implements OnInit {
  person: Persona;
  user: Usuario;

  @Input()
  agent: any;

  constructor() {}

  ngOnInit(): void {
    this.person = this.agent[0];
    localStorage.setItem('user', this.person.usuario.toString());
    this.user = this.agent[1];
  }
}
