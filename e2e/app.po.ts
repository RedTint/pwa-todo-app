import { browser, by, element } from 'protractor';

export class PwaTodoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pwa-root h1')).getText();
  }
}
