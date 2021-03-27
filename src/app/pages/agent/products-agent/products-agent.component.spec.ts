import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAgentComponent } from './products-agent.component';

describe('ProductsAgentComponent', () => {
  let component: ProductsAgentComponent;
  let fixture: ComponentFixture<ProductsAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
