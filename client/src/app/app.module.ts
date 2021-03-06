import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


//VENDOR MODULES
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { NGMaterialImportsModule } from './ui-components-imports/material-imports.module';
import { CoreModule } from './modules/core/core.module';
import { FilterAndSearchModule } from './modules/filter-and-search/filter-and-search.module';





// COMPONENTS
import { AppComponent } from './app.component';


// PIPES 

//SERVICES
import { HTTPCommonService } from './global-components/http-interceptor/app-http-common.service';
import { NoopInterceptor } from './global-components/http-interceptor/app-httpinterceptor.service';
import { GlobalHTTPErrorHanlder } from './global-components/global-error-handler/global-error-handler';
import { AppSettings } from './../config/config';



// DIRECTIVES 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    FilterAndSearchModule,
    HttpClientModule,
    NGMaterialImportsModule,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [
    HTTPCommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NoopInterceptor,
      multi: true,
    },
    GlobalHTTPErrorHanlder,
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
