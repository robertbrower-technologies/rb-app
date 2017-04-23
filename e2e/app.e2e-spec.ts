import { RbAppPage } from './app.po';

describe('rb-app App', function() {
  let page: RbAppPage;

  beforeEach(() => {
    page = new RbAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
