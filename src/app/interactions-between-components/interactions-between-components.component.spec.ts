import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsBetweenComponentsComponent } from './interactions-between-components.component';

describe('InteractionsBetweenComponentsComponent', () => {
  let component: InteractionsBetweenComponentsComponent;
  let fixture: ComponentFixture<InteractionsBetweenComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteractionsBetweenComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractionsBetweenComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
