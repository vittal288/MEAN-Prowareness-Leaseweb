import { Injectable, Injector, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

// import { AuthService } from '../../modules/auth/auth.service';
import { LoadingComponent } from './../loading/loading.component';
// import { SharedService } from './../../modules/shared.service';


@Injectable()
export class NoopInterceptor implements HttpInterceptor {
    public uploadFlag: boolean;

    // constructor(private loadingComponent: LoadingComponent,
    //             private sharedService: SharedService) {
    //     // 
    // }


    constructor(private loadingComponent: LoadingComponent) {
        // 
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingComponent.onOpenModal();
        // this.uploadFlag = this.sharedService.getFromSession('uploadFlag');

        // if (this.authService.isLogedIn() && this.uploadFlag) {
        //     const authHeader = this.authService.getAuthorizationHeader();
        //     req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${authHeader}`) });
        //     req = req.clone({ headers: req.headers.set('Accept', '*/*') });
        //     req = req.clone({ headers: req.headers.set('enctype', 'multipart/form-data') });
        // } else if (!this.authService.isLogedIn() && this.uploadFlag) {
        //     req = req.clone({ headers: req.headers.set('enctype', 'multipart/form-data') });
        // } else if (this.authService.isAuthenticated()) {
        //     const authToken = this.authService.getAuthToken();
        //     req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${authToken}`) });
        //     req = req.clone({ headers: req.headers.set('Accept', '*/*') });
        //     req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        // } else {
        //     req = req.clone({ headers: req.headers.set('Accept', '*/*') });
        // }
        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    const statisticks = `Request for ${req.urlWithParams} took ${elapsed} ms.`;
                    console.log('%c LATENCY INFO !!! ', 'background: #5bc0de; color: #FFF', statisticks);
                    this.loadingComponent.onCloseModal();
                }
            });
    }
}
