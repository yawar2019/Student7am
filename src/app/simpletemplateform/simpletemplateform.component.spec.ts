import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpletemplateformComponent } from './simpletemplateform.component';

describe('SimpletemplateformComponent', () => {
  let component: SimpletemplateformComponent;
  let fixture: ComponentFixture<SimpletemplateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpletemplateformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpletemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
