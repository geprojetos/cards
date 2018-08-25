import { FormMessageValidateModule } from './form-message-validate.module';

describe('FormMessageValidateModule', () => {
  let formMessageValidateModule: FormMessageValidateModule;

  beforeEach(() => {
    formMessageValidateModule = new FormMessageValidateModule();
  });

  it('should create an instance', () => {
    expect(formMessageValidateModule).toBeTruthy();
  });
});
