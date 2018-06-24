import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULES
import { NGMaterialImportsModule } from './../../../../ui-components-imports/material-imports.module';


//COMPONENTS
import { FilterComponent } from './../filter.component';
import { RamFilterComponent } from './../ram-filter/ram-filter.component';
import { DropDownsComponent } from './../drop-downs/drop-downs.component';
import { SliderComponent } from './../slider/slider.component';
import { FilterPipe } from './../../../../global-components/pipes/filter.pipe';

//SERVICES
import { FilterAndSearchService } from './../../filter-and-search.service';
import { GlobalHTTPErrorHanlder } from './../../../../global-components/global-error-handler/global-error-handler';
import { HTTPCommonService } from './../../../../global-components/http-interceptor/app-http-common.service';
import { AppSettings } from './../../../../../config/config';
import { EventEmitter } from '@angular/core';



describe('RamFilterComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let filterAndSearchService:FilterAndSearchService;
  let hTTPCommonService:HTTPCommonService;
  let appSettings:AppSettings;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
    })
    .compileComponents();

  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    filterAndSearchService = new FilterAndSearchService(hTTPCommonService,appSettings);
    component.value = 1024;
    filterAndSearchService.selectedFilter['slider'] = 1024;
    filterAndSearchService.filteredServers = new EventEmitter();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format the label to TB if it greater than 1024GB',()=>{
    const value = 1024;
    expect(component.formatLabel(value)).toEqual('1TB');
  });

  it('should return the 0',()=>{
    const value = 0;
    expect(component.formatLabel(value)).toEqual(0);
  });

  it('should format the label to GB if it less than than 1024GB',()=>{
    const value = 1023;
    expect(component.formatLabel(value)).toEqual('1023 GB');
  });

  it('should filter the servers records by moving a slider',()=>{
    component.onChange();
    expect(filterAndSearchService.selectedFilter['slider']).toEqual(component.value);
    expect(filterAndSearchService.filteredServers).toEqual(new EventEmitter());
  })


});
