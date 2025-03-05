import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOnPipeComponent } from './example-on-pipe.component';

describe('ExampleOnPipeComponent', () => {
  let component: ExampleOnPipeComponent;
  let fixture: ComponentFixture<ExampleOnPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleOnPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleOnPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
