import { CardButtonMoreCardsModule } from './card-button-more-cards.module';

describe('CardButtonMoreCardsModule', () => {
  let cardButtonMoreCardsModule: CardButtonMoreCardsModule;

  beforeEach(() => {
    cardButtonMoreCardsModule = new CardButtonMoreCardsModule();
  });

  it('should create an instance', () => {
    expect(cardButtonMoreCardsModule).toBeTruthy();
  });
});
