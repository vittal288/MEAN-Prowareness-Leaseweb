import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HTTPCommonService } from '../../global-components/http-interceptor/app-http-common.service';


@Injectable()
export class FilterAndSearchService {
  constructor(private httpCommonService: HTTPCommonService) {
      //
   }
  getServers(): Observable<any> {
    const visaFinderURIs = `http://85.17.31.99:4300/api/servers`;
    return this.httpCommonService.get(visaFinderURIs);
  }
 
}
