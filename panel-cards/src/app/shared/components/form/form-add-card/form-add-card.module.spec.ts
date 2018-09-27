import { FormAddCardModule } from './form-add-card.module';

describe('FormAddCardModule', () => {
  let formAddCardModule: FormAddCardModule;

  beforeEach(() => {
    formAddCardModule = new FormAddCardModule();
  });

  it('should create an instance', () => {
    expect(formAddCardModule).toBeTruthy();
  });
});
