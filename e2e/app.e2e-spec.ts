import { AngularSharetalentPage } from './app.po';

describe('angular-sharetalent App', () => {
  let page: AngularSharetalentPage;

  beforeEach(() => {
    page = new AngularSharetalentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
