
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HTTPCommonService } from '../../global-components/http-interceptor/app-http-common.service';
import { AppSettings } from './../../../config/config';


//----------------------------------
@Injectable()
export class FilterAndSearchService {
  public selectedFilter = new Object();
  public selectedRams = [];

  public locations = [];
  public hddTypes = [];
  public ramSizes = [];

  public filteredServers = new EventEmitter();

  constructor(private httpCommonService: HTTPCommonService,
    private appSettings: AppSettings) {
    //
  }
  getServers(): Observable<any> {
    console.log('INVOKED');
    //let queryStr = `?storageMin=0&storageMax=${slider}&location=${location}&ram=${ram}&hdd=${hdd}`;

    let slider;
    let ram;
    let location;
    let hdd;
    let queryStr = '';


    // rams
    if (this.selectedRams.length > 0) {
      ram = this.generateCommaSeperatedPattern(this.selectedRams);
      if (this.checkStrForEmpty(ram)) {
        queryStr += `ram=${ram}&`;
      }
    }


    //storage,hdd and location 
    if (!this.isEmpty(this.selectedFilter)) {
      slider = this.selectedFilter['slider'];
      hdd = this.selectedFilter['hdd'];
      location = this.selectedFilter['location'];

      if (this.checkStrForEmpty(slider)) {
        queryStr += `storageMin=0&storageMax=${slider}&`;
      } if (this.checkStrForEmpty(location)) {
        queryStr += `location=${location}&`;
      } if (this.checkStrForEmpty(hdd)) {
        queryStr += `hdd=${hdd}`;
      }
    }

    const url = `${this.appSettings.CONFIG.REST_API.API_END_POINT}?${queryStr}`;
    return this.httpCommonService.get(url);
  }

  checkStrForEmpty(str): boolean {
    if (str !== '' && str !== null && str !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop))
        return false;
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

  // there is some issue with this logic 
  // -->if we select multiple times the rams filter 
  generateCommaSeperatedPattern(arr) {
    let charMap = {};
    let tempArr = [];

    arr.forEach((item, index) => {
      if (charMap[item]) {
        charMap[item]++
      } else {
        charMap[item] = 1;
      }
    });


    for (let key in charMap) {
      if (charMap[key] > 1) {
        delete charMap[key];
      } else {
        tempArr.push(key);
      }
    }
    return tempArr.join(",");
  }
}
