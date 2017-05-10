import { PwaTodoAppPage } from './app.po';

describe('pwa-todo-app App', () => {
  let page: PwaTodoAppPage;

  beforeEach(() => {
    page = new PwaTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pwa works!');
  });
});
