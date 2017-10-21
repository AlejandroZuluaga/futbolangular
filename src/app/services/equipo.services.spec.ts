import { TestBed, inject } from '@angular/core/testing';

import { EquipoServices } from '../services/equipo.services';

describe('EquipoServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EquipoServices]
    });
  });

  it('should be created', inject([EquipoServices], (service: EquipoServices) => {
    expect(service).toBeTruthy();
  }));
});
