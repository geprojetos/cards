import { TestBed, inject } from '@angular/core/testing';

import { ServiceTokenService } from './service-token.service';

describe('ServiceTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceTokenService]
    });
  });

  it('should be created', inject([ServiceTokenService], (service: ServiceTokenService) => {
    expect(service).toBeTruthy();
  }));
});
