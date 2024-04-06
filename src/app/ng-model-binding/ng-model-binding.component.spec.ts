import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelBindingComponent } from './ng-model-binding.component';

describe('NgModelBindingComponent', () => {
  let component: NgModelBindingComponent;
  let fixture: ComponentFixture<NgModelBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgModelBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgModelBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
