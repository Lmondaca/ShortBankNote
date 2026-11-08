import { TestBed } from '@angular/core/testing';

import { AutoMoviService } from './auto-movi.service';

describe('AutoMoviService', () => {
  let service: AutoMoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoMoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
