import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { FilterAndSearchService } from './filter-and-search.service';
import {fakeAsync, tick } from '@angular/core/testing';

import { AppSettings } from './../../../config/config';
import { HTTPCommonService } from './../../global-components/http-interceptor/app-http-common.service';


describe("Filter and Search Service",()=>{

    let filterAndSearchService:FilterAndSearchService;
    let hTTPCommonService:HTTPCommonService;
    let appSettings:AppSettings;

    beforeEach(()=>{
        filterAndSearchService = new FilterAndSearchService(hTTPCommonService, appSettings);
    })



    it("should get list of servers from server",fakeAsync(()=>{
        spyOn(filterAndSearchService,"getServers").and.returnValue(Observable.of([[1, 2, 3]]));
    }));

    it('should check string is empty or not',()=>{
        const str ='Hi LeasWeb';
        expect(filterAndSearchService.checkStrForEmpty(str)).toEqual(true);
    });

    it('should check string is empty or not',()=>{
        const str ='';
        expect(filterAndSearchService.checkStrForEmpty(str)).toEqual(false);
    });

    it('should check string is empty or not',()=>{
        const str = null;
        expect(filterAndSearchService.checkStrForEmpty(str)).toEqual(false);
    });

    it('should check string is empty or not',()=>{
        expect(filterAndSearchService.checkStrForEmpty(undefined)).toEqual(false);
    });

    it('should validate weather object is empty or not',()=>{
        const obj ={name:'LeasWeb'};
        expect(filterAndSearchService.isEmpty(obj)).toEqual(false);
    });

    it('should validate weather object is empty or not',()=>{
        const obj ={};
        expect(filterAndSearchService.isEmpty(obj)).toEqual(true);
    });

    it('should generate comma seperated string form an array of duplicates',()=>{
        const givenArr =[1,2,3,3,4,4,5];
        expect(filterAndSearchService.generateCommaSeperatedPattern(givenArr)).toEqual("1,2,5");
    });

    it('should generate comma seperated string form an array',()=>{
        const givenArr =[1,2,3,4,5];
        expect(filterAndSearchService.generateCommaSeperatedPattern(givenArr)).toEqual("1,2,3,4,5");
    });

})