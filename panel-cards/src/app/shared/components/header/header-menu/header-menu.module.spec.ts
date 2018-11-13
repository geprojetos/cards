import { HeaderMenuModule } from './header-menu.module';

describe('HeaderMenuModule', () => {
  let headerMenuModule: HeaderMenuModule;

  beforeEach(() => {
    headerMenuModule = new HeaderMenuModule();
  });

  it('should create an instance', () => {
    expect(headerMenuModule).toBeTruthy();
  });
});
