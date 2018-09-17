import { TestBed, inject } from '@angular/core/testing';

import { ServiceIntercepetorService } from './service-intercepetor.service';

describe('ServiceIntercepetorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceIntercepetorService]
    });
  });

  it('should be created', inject([ServiceIntercepetorService], (service: ServiceIntercepetorService) => {
    expect(service).toBeTruthy();
  }));
});
