import {FilterAndSearchPage} from './filter-and-search.po';


describe("Filter and Search Module",()=>{

    let page: FilterAndSearchPage;
    beforeEach(() => {
      page = new FilterAndSearchPage();
    });

    it('should display the no of count label',()=>{
        page.navigateTo();
        // expect(page.getCoundLabel()).toEqual('Number of Servers Matching Your Filter:');
    });
});