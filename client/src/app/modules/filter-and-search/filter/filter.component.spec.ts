import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULES
import { NGMaterialImportsModule } from './../../../ui-components-imports/material-imports.module';


//COMPONENTS
import { FilterComponent } from './filter.component';
import { RamFilterComponent } from './ram-filter/ram-filter.component';
import { DropDownsComponent } from './drop-downs/drop-downs.component';
import { SliderComponent } from './slider/slider.component';
import { FilterPipe } from './../../../global-components/pipes/filter.pipe';

//SERVICES
import { FilterAndSearchService } from './../filter-and-search.service';
import { GlobalHTTPErrorHanlder } from './../../../global-components/global-error-handler/global-error-handler';
import { HTTPCommonService } from './../../../global-components/http-interceptor/app-http-common.service';
import { AppSettings } from './../../../../config/config';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
          FilterComponent,
          RamFilterComponent,
          DropDownsComponent,
          SliderComponent,
          FilterPipe
      ],
      imports:[
        NGMaterialImportsModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers:[
        FilterAndSearchService,
        GlobalHTTPErrorHanlder,
        HTTPCommonService,
        AppSettings,
        HttpClient
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
