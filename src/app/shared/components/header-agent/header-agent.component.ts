import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-agent',
  templateUrl: './header-agent.component.html',
  styleUrls: ['./header-agent.component.css'],
})
export class HeaderAgentComponent implements OnInit {
  @Output()
  toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
