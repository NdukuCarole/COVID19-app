import { TestBed } from '@angular/core/testing';

import { CaroCovid19Service } from './caro-covid19.service';

describe('CaroCovid19Service', () => {
  let service: CaroCovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaroCovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
