import { FormLoginModule } from './form-login.module';

describe('FormLoginModule', () => {
  let formLoginModule: FormLoginModule;

  beforeEach(() => {
    formLoginModule = new FormLoginModule();
  });

  it('should create an instance', () => {
    expect(formLoginModule).toBeTruthy();
  });
});
