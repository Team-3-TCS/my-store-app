import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAgentComponent } from './footer-agent.component';

describe('FooterAgentComponent', () => {
  let component: FooterAgentComponent;
  let fixture: ComponentFixture<FooterAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
