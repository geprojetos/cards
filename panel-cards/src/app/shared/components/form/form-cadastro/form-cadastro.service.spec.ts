import { TestBed, inject } from '@angular/core/testing';

import { FormCadastroService } from './form-cadastro.service';

describe('FormCadastroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormCadastroService]
    });
  });

  it('should be created', inject([FormCadastroService], (service: FormCadastroService) => {
    expect(service).toBeTruthy();
  }));
});
