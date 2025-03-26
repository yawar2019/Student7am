import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentExamleComponent } from './angular-component-examle.component';

describe('AngularComponentExamleComponent', () => {
  let component: AngularComponentExamleComponent;
  let fixture: ComponentFixture<AngularComponentExamleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularComponentExamleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularComponentExamleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
