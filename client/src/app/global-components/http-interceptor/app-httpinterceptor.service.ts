import { Injectable, Injector, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';



@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    constructor(private slimLoadingBarService: SlimLoadingBarService) {
        // 
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.slimLoadingBarService.start();
        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    const statisticks = `Request for ${req.urlWithParams} took ${elapsed} ms.`;
                    console.log('%c LATENCY INFO !!! ', 'background: #5bc0de; color: #FFF', statisticks);
                    // this.loadingComponent.onCloseModal();
                    this.slimLoadingBarService.complete();
                   
                }
            });
    }
}
