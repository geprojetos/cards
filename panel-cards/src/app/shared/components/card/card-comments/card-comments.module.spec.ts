import { CardCommentsModule } from './card-comments.module';

describe('CardCommentsModule', () => {
  let cardCommentsModule: CardCommentsModule;

  beforeEach(() => {
    cardCommentsModule = new CardCommentsModule();
  });

  it('should create an instance', () => {
    expect(cardCommentsModule).toBeTruthy();
  });
});
