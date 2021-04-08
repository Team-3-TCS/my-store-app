import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent implements OnInit {
  sideBarOpen = false;
  constructor() {}

  ngOnInit(): void {}

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
