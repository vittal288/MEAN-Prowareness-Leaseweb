import {Injector} from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Observable } from 'rxjs';


import {GlobalHTTPErrorHanlder } from './global-error-handler';


const ERROR_MESSAGE = 'Dummy Error';

describe('FancyService without the TestBed', () => {
    let globalErrorHandlerService;
    let globalHTTPErrorHanlder;
    let injector: Injector;
    let slimLoadingBarService: SlimLoadingBarService;


    beforeEach(() => {
        // globalErrorHandlerService = new GlobalErrorHandler(injector, slimLoadingBarService);
        globalHTTPErrorHanlder = new GlobalHTTPErrorHanlder();
    })

    // it('correctly handles error', () => {
    //     spyOn(globalErrorHandlerService, 'handleError').and.returnValue(Observable.throw(ERROR_MESSAGE));
    // });


    it('correctly Global HTTP handles error', () => {
        spyOn(globalHTTPErrorHanlder, 'handleError').and.returnValue(Observable.throw(ERROR_MESSAGE));
    });
});

