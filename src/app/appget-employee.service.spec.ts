import { TestBed } from '@angular/core/testing';

import { AppgetEmployeeService } from './appget-employee.service';

describe('AppgetEmployeeService', () => {
  let service: AppgetEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppgetEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
