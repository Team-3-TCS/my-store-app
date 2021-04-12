import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/core/services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent implements OnInit {
  agent;
  sideBarOpen = false;
  constructor(private agentService: AgentService) {}

  ngOnInit(): void {
    this.agent = this.agentService.getAgent();
  }

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
