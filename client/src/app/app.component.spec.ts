import { TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NGMaterialImportsModule } from './ui-components-imports/material-imports.module';
import { RouterTestingModule } from '@angular/router/testing';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// MODULES
//import { CoreModule } from './modules/core/core.module';
// import { FilterAndSearchModule } from './modules/filter-and-search/filter-and-search.module';


// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FooterComponent } from './modules/core/footer/footer.component';
import { FilterComponent } from './modules/filter-and-search/filter/filter.component';
import { DropDownsComponent } from './modules/filter-and-search/filter/drop-downs/drop-downs.component';
import { SliderComponent } from './modules/filter-and-search/filter/slider/slider.component';
import { RamFilterComponent } from './modules/filter-and-search/filter/ram-filter/ram-filter.component';


//SERVICES
import { AppSettings } from './../config/config';
import { HTTPCommonService } from './global-components/http-interceptor/app-http-common.service';
import { GlobalErrorHandler, GlobalHTTPErrorHanlder } from './global-components/global-error-handler/global-error-handler';


//PIPE
import { FilterPipe } from './global-components/pipes/filter.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FilterComponent,
        DropDownsComponent,
        SliderComponent,
        RamFilterComponent,
        FilterPipe
      ],
      imports: [
        RouterTestingModule,
        NGMaterialImportsModule,
        SlimLoadingBarModule,
        CommonModule,
        FormsModule
      ],
      providers: [
        AppSettings,
        HTTPCommonService,
        GlobalErrorHandler,
        GlobalHTTPErrorHanlder
      ],
      
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to leaseweb!');
  // }));
});
