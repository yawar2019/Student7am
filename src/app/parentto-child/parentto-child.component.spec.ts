import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttoChildComponent } from './parentto-child.component';

describe('ParenttoChildComponent', () => {
  let component: ParenttoChildComponent;
  let fixture: ComponentFixture<ParenttoChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParenttoChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParenttoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
