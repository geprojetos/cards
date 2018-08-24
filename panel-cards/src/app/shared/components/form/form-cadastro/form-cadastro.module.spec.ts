import { FormCadastroModule } from './form-cadastro.module';

describe('FormCadastroModule', () => {
  let formCadastroModule: FormCadastroModule;

  beforeEach(() => {
    formCadastroModule = new FormCadastroModule();
  });

  it('should create an instance', () => {
    expect(formCadastroModule).toBeTruthy();
  });
});
