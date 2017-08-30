import { MeanVideoplayerPage } from './app.po';

describe('mean-videoplayer App', () => {
  let page: MeanVideoplayerPage;

  beforeEach(() => {
    page = new MeanVideoplayerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
