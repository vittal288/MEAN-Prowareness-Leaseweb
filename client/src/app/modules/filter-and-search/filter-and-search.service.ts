
import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { HTTPCommonService } from '../../global-components/http-interceptor/app-http-common.service';
import { UtilityService } from './../utility';
import { Filter } from './../../models/filter.model';




@Injectable()
export class FilterAndSearchService {
  public sliderValue = new EventEmitter();
  public selectedFilter = new Object();


  constructor(private httpCommonService: HTTPCommonService,
    private utilityService: UtilityService) {
    //
  }
  getServers(): Observable<any> {
    console.log('INVOKED');
    // this.generateQueryString(obj);
    //let queryStr = `?storageMin=0&storageMax=${slider}&location=${location}&ram=${ram}&hdd=${hdd}`;
    let queryStr = '';

    //let sessionData = this.utilityService.getFromSession('filter');
    if (!this.isEmpty(this.selectedFilter)) {
      let slider;
      let ram;
      let location;
      let hdd;


      slider = this.selectedFilter['slider'];

      if (this.selectedFilter['rams']) {
        ram = this.generateCommaStr(this.selectedFilter['rams']);
      }

      if (this.checkStrForEmpty(slider)) {
        queryStr += `storageMin=0&storageMax=${slider}&`;
      } if (this.checkStrForEmpty(ram)) {
        queryStr += `ram=${ram}&`;
      } if (this.checkStrForEmpty(location)) {
        queryStr += `location=${location}&`;
      } if (this.checkStrForEmpty(hdd)) {
        queryStr += `hdd=${hdd}`;
      }
    }


    const url = `http://85.17.31.99:4300/api/servers?${queryStr}`;
    return this.httpCommonService.get(url);
  }

  checkStrForEmpty(str): boolean {
    if (str !== '' && str !== null && str !== undefined) return true;
  }

  isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  generateCommaStr(arr): string {
    debugger;
    let tempArr = [];
    arr.forEach((element, index) => {
      if (element['selected']) {
        //if()
        tempArr.push(element['ram']);
      }
    });

    // for (var i = 1; i < arr.length -1; i++) {
    //   if(arr[i]['ram'] === arr[i+1]['ram']){
    //     arr.splice(i,1);
    //     arr.splice(i+1,1);
    //   }
    // }

    console.log('ARRAY', arr);

    return arr.join(",");
  }

}
