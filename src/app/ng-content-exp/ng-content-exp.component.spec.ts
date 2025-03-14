import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentExpComponent } from './ng-content-exp.component';

describe('NgContentExpComponent', () => {
  let component: NgContentExpComponent;
  let fixture: ComponentFixture<NgContentExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContentExpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
