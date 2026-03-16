import { TestBed } from '@angular/core/testing';

import { Mtgcard } from './mtgcard.service';

describe('Mtgcard', () => {
  let service: Mtgcard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mtgcard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
