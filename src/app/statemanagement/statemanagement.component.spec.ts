import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatemanagementComponent } from './statemanagement.component';

describe('StatemanagementComponent', () => {
  let component: StatemanagementComponent;
  let fixture: ComponentFixture<StatemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatemanagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
