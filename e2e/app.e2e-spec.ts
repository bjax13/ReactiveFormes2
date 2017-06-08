import { ReactiveForms2Page } from './app.po';

describe('reactive-forms2 App', () => {
  let page: ReactiveForms2Page;

  beforeEach(() => {
    page = new ReactiveForms2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
