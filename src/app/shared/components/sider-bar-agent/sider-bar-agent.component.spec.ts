import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderBarAgentComponent } from './sider-bar-agent.component';

describe('SiderBarAgentComponent', () => {
  let component: SiderBarAgentComponent;
  let fixture: ComponentFixture<SiderBarAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderBarAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderBarAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
