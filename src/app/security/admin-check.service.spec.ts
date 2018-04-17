import { TestBed, inject } from '@angular/core/testing';

import { AdminCheckService } from './admin-check.service';

describe('AdminCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminCheckService]
    });
  });

  it('should be created', inject([AdminCheckService], (service: AdminCheckService) => {
    expect(service).toBeTruthy();
  }));
});
