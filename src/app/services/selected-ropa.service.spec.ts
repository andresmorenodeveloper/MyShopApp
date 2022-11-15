import { TestBed } from '@angular/core/testing';

import { SelectedRopaService } from './selected-ropa.service';

describe('SelectedRopaService', () => {
  let service: SelectedRopaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedRopaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
