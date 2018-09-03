import { CardDetailsModule } from './card-details.module';

describe('CardDetailsModule', () => {
  let cardDetailsModule: CardDetailsModule;

  beforeEach(() => {
    cardDetailsModule = new CardDetailsModule();
  });

  it('should create an instance', () => {
    expect(cardDetailsModule).toBeTruthy();
  });
});
