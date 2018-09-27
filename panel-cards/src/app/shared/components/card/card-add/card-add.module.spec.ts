import { CardAddModule } from './card-add.module';

describe('CardAddModule', () => {
  let cardAddModule: CardAddModule;

  beforeEach(() => {
    cardAddModule = new CardAddModule();
  });

  it('should create an instance', () => {
    expect(cardAddModule).toBeTruthy();
  });
});
