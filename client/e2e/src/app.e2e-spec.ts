import { AppPage } from './app.po';

describe('App Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header title', () => {
    page.navigateTo();
    expect(page.getHeaderLabel()).toEqual('Filter and Search Servers');
  });

  it('should render the logo or logo alternate label',()=>{
    page.navigateTo();
    expect(page.getLogo()).toEqual('logo');
  });


  it('should display the footer label',()=>{
    page.navigateTo();
    expect(page.getFooterLabel()).toEqual('© 2018 Leaseweb. All Rights Reserved.');
  });

  it('APP component.html should contains three main elements',()=>{
    page.navigateTo();
  })
});
