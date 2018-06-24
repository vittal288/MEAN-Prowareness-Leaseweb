
import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';


import { AppError } from './app-error';
import { BadInputError } from './bad-input-error';
import { NotFoundError } from './not-found-error';
import { InternalServerError } from './server-error';

import { HTTPError } from './../../models/global/http-error.model';



@Injectable()
export class GlobalHTTPErrorHanlder extends ErrorHandler{

  constructor() {
    super()
  }



  public handleError(error: HTTPError) {
    let errMsg: string;
    if (error.error instanceof HttpErrorResponse) {
      const body = error || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      console.error('%c ERROR !!! ', 'background: #FF0000; color: #FFF', errMsg);
    } else {

      if (error.status === 404) {
        console.error('%c ERROR !!! ', 'background: #FF0000; color: #FFF', 'PAGE NOT FOUND');
        return Observable.throw(new NotFoundError());
      } else if (error.status === 400) {
        console.error('%c ERROR !!! ', 'background: #FF0000; color: #FFF', 'BAD REQUEST');
        return Observable.throw(new BadInputError(error.error.json()));
      } else if (error.status === 500) {
        console.error('%c ERROR !!! ', 'background: #FF0000; color: #FFF', 'INTERNAL SERVER ERROR');
        return Observable.throw(new InternalServerError());
      } else {
        console.error('%c ERROR !!! ', 'background: #FF0000; color: #FFF', error.message);
        return Observable.throw(new AppError(error));
      }
    }
    return Observable.throw(error);
  }
}
