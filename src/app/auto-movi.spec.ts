import { TestBed } from '@angular/core/testing';

import { AutoMovi } from './auto-movi';

describe('AutoMovi', () => {
  let service: AutoMovi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoMovi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
