import { TestBed, inject } from '@angular/core/testing';

import { CalendarioServices } from '../services/calendario.services';

describe('CalendarioServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarioServices]
    });
  });

  it('should be created', inject([CalendarioServices], (service: CalendarioServices) => {
    expect(service).toBeTruthy();
  }));
});
