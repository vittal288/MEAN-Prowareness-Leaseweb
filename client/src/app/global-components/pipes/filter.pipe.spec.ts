import { FilterPipe } from './filter.pipe';


describe("FILTER PIPE", () => {
    let filterPipe: FilterPipe;

    beforeEach(()=>{
        filterPipe = new FilterPipe();
    });

    it("pipe should exist",()=>{
        expect(filterPipe).toBeTruthy();
    })

    it("it should remove the duplicates from the array",()=>{
        const givenArr = [1,2,3,3,2,1,5];
        expect(filterPipe.transform(givenArr)).toEqual([1,2,3,5]);
    })
})