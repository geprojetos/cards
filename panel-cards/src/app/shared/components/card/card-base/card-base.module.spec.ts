import { CardBaseModule } from './card-base.module';

describe('CardBaseModule', () => {
  let cardBaseModule: CardBaseModule;

  beforeEach(() => {
    cardBaseModule = new CardBaseModule();
  });

  it('should create an instance', () => {
    expect(cardBaseModule).toBeTruthy();
  });
});
