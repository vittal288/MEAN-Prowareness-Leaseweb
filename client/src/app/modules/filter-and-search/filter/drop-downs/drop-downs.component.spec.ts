import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MODULES
import { NGMaterialImportsModule } from './../../../../ui-components-imports/material-imports.module';



//COMPONENTS
import { DropDownsComponent } from './drop-downs.component';


//SERVICES
import { FilterAndSearchService } from './../../filter-and-search.service';
import { GlobalErrorHandler, GlobalHTTPErrorHanlder } from './../../../../global-components/global-error-handler/global-error-handler';
import { HTTPCommonService } from './../../../../global-components/http-interceptor/app-http-common.service';
import { AppSettings } from './../../../../../config/config';



//PIPE
import { FilterPipe } from './../../../../global-components/pipes/filter.pipe';


describe('DropDownsComponent', () => {
  let component: DropDownsComponent;
  let fixture: ComponentFixture<DropDownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownsComponent,FilterPipe ],
      imports:[
        FormsModule,
        NGMaterialImportsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers:[
        FilterAndSearchService,
        HttpClient,
        HTTPCommonService,
        GlobalErrorHandler,
        GlobalHTTPErrorHanlder,
        AppSettings
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
