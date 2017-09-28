import { browser, by, element } from 'protractor';

export class AngularSharetalentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
