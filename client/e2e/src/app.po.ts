import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderLabel() {
    return element(by.css('.header__label')).getText();
  }

  getLogo(){
    return element(by.css('.header__logo')).getAttribute('alt');
  }

  checkAppComponents(){
    return element(by.css('.app-holder')).getInnerHtml();
  }

  getFooterLabel(){
    return element(by.tagName('footer div span')).getText();
  }

  
}
