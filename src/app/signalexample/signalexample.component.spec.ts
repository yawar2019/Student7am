import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalexampleComponent } from './signalexample.component';

describe('SignalexampleComponent', () => {
  let component: SignalexampleComponent;
  let fixture: ComponentFixture<SignalexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
