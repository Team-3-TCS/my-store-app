import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAgentComponent } from './orders-agent.component';

describe('OrdersAgentComponent', () => {
  let component: OrdersAgentComponent;
  let fixture: ComponentFixture<OrdersAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
