import { TestBed, inject } from '@angular/core/testing';

import { FormCadastroValidatorService } from './form-cadastro-validator.service';

describe('FormCadastroValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCadastroValidatorService]
    });
  });

  it('should be created', inject([FormCadastroValidatorService], (service: FormCadastroValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
