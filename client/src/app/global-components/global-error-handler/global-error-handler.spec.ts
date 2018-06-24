import { Observable } from 'rxjs';


import {GlobalHTTPErrorHanlder } from './global-error-handler';


const ERROR_MESSAGE = 'Dummy Error';

describe('GlobalError Handler', () => {
    let globalHTTPErrorHanlder;

    beforeEach(() => {
        globalHTTPErrorHanlder = new GlobalHTTPErrorHanlder();
    })

    it('correctly Global HTTP handles error', () => {
        spyOn(globalHTTPErrorHanlder, 'handleError').and.returnValue(Observable.throw(ERROR_MESSAGE));
    });
});

