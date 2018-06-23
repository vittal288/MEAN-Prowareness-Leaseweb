import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import * as StackTrace from 'stacktrace-js';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { AppError } from './app-error';
import { BadInputError } from './bad-input-error';
import { NotFoundError } from './not-found-error';
import { InternalServerError } from './server-error';

import { HTTPError } from './../../models/global/http-error.model';



@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor(private injector: Injector,
    private slimLoadingBarService: SlimLoadingBarService) {

    super();
  }
  handleError(error: any): void {
    this.slimLoadingBarService.complete();
    if (error != null) {
      const message = error.message ? error.message : error.toString();
      const location = this.injector.get(LocationStrategy);
      const url = location instanceof PathLocationStrategy ? location.path() : '';

      // get the stack trace, lets grab the last 10 stacks only
      StackTrace.fromError(error).then(stackframes => {
        const stackString = stackframes
          .splice(0, 20)
          .map(function (sf) {
            return sf.toString();
          }).join('\n');
        console.log('%c STACKTRACEJS INFO !!! ', 'background: #5bc0de; color: #FFF', { error, message, url, stack: stackString });
      });

      throw error;
    } else {
      super.handleError(error);
    }
  }

}

export class GlobalHTTPErrorHanlder {

  constructor() {

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
