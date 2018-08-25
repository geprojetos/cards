import { TestBed, inject } from '@angular/core/testing';

import { FormLoginService } from './form-login.service';

describe('FormLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormLoginService]
    });
  });

  it('should be created', inject([FormLoginService], (service: FormLoginService) => {
    expect(service).toBeTruthy();
  }));
});
