import { browser, by, element } from 'protractor';

export class FilterAndSearchPage {
  navigateTo() {
    // var started = startTestServer();
    // browser.wait(started, 5 * 1000, 'Server should start within 5 seconds');
   
    return browser.get('/servers');
  }

  getCoundLabel(){
      return element(by.css('.noOfServersLbl')).getText();
  }
 
}

