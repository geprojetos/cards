import { CardSearchModule } from './card-search.module';

describe('CardSearchModule', () => {
  let cardSearchModule: CardSearchModule;

  beforeEach(() => {
    cardSearchModule = new CardSearchModule();
  });

  it('should create an instance', () => {
    expect(cardSearchModule).toBeTruthy();
  });
});
