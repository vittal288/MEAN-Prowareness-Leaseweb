import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//MODULES
import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';

// COMPONENTS
import { FilterAndSearchComponent } from './filter-and-search.component';
import { FilterComponent } from './filter/filter.component';
import { ListOfServersComponent } from './list-of-servers/list-of-servers.component';
import { RamFilterComponent } from './filter/ram-filter/ram-filter.component';
import { DropDownsComponent } from './filter/drop-downs/drop-downs.component';
import { SliderComponent } from './filter/slider/slider.component';


//SERVICES
import { FilterAndSearchService } from './filter-and-search.service';
import { HTTPCommonService } from './../../global-components/http-interceptor/app-http-common.service';
import { GlobalErrorHandler, GlobalHTTPErrorHanlder } from './../../global-components/global-error-handler/global-error-handler';
import { AppSettings } from './../../../config/config';


//PIPES
import { FilterPipe } from './../../global-components/pipes/filter.pipe';


describe('FilterAndSearchComponent', () => {
  let component: FilterAndSearchComponent;
  let fixture: ComponentFixture<FilterAndSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilterAndSearchComponent,
        FilterComponent,
        ListOfServersComponent,
        RamFilterComponent,
        DropDownsComponent,
        SliderComponent,
        FilterPipe
      ],
      imports: [
        CommonModule,
        FormsModule,
        NGMaterialImportsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers:[
        FilterAndSearchService,
        HTTPCommonService,
        HttpClient,
        GlobalErrorHandler,
        GlobalHTTPErrorHanlder,
        AppSettings,
        SlimLoadingBarService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
