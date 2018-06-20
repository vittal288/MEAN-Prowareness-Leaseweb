// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatProgressSpinnerModule } from '@angular/material';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Router, ActivatedRoute, ActivatedRouteSnapshot, Route, UrlSegment, Params, Data, ParamMap } from '@angular/router';
// import { By } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { DebugElement } from '@angular/core';
// import { Language, L10nConfig, LocalizationModule, TranslationService } from 'angular-l10n';
// import { LoadingComponent } from './../../../global-components/loading/loading.component';
// import { ToasterService, UtilityService } from './../../shared/utility';
// import { GlobalHTTPErrorHanlder } from './../../../global-components/global-error-handler/global-error-handler';
// import { HTTPCommonService } from './../../../global-components/http-interceptor/app-http-common.service';
// import { SharedService } from './../../shared/shared.service';
// import { ConfigService } from './../../../../config/config.service';
// import { AppInitService } from './../../../app-init.service';
// import { HeaderService } from './header.service';
// import { AppSettings } from './../../../../config/config';
// import { L0ComponentService } from './../home/l0/l0.component.service';
// import { CoreService } from './../core.service';
// import { ApplicationListService } from './../../user/application-list/application-list.service';
// import { NGMaterialImportsModule } from './../../../ui-components-imports/material-imports.module';

// import { LanguageSelectComponent } from './language-select/language-select.component';
// import { HeaderComponent } from './header.component';

// export class MockSharedService extends SharedService {
//     enigmaMasterUris =
//     {
//         'API_Master_Language': 'api/v1/enigma/enigma-master/language'

//     };
//     tenantContext = [{ 'missionId': 'MI_0044', 'copId': 'CO_0056', 'unitOpCode': 'UO_0008', 'jurisdictionName': 'Bangalore' }];

//     profile = {
//         'API_Profile': 'api/v1/enigma/profile',
//         'APIGW_Profile': 'apigw/v1/enigma/profile', 'API_Profile_Register': 'api/v1/enigma/profile/register'
//     };

//     getFromSession(key) {
//         if (key === 'enigmaMasterUris') {
//             return this.enigmaMasterUris;
//         } else if (key === 'tenantContext') {
//             return this.tenantContext;
//         }

//     }

// }


// const l10nConfig: L10nConfig = {
//     locale: {
//         defaultLocale: { languageCode: 'en', countryCode: 'US' }
//     },
//     translation: {
//         providers: [],
//         caching: true,
//         missingValue: 'No key'
//     }
// };

// describe('HeaderComponent', () => {
//     let component: HeaderComponent;
//     let fixture: ComponentFixture<HeaderComponent>;
//     let de: DebugElement;
//     let el: HTMLElement;
//     let sharedService;
//     const router = {
//         navigate: jasmine.createSpy('navigate')
//     };

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [LanguageSelectComponent, HeaderComponent],
//             imports: [BrowserAnimationsModule, FormsModule, HttpClientModule, NGMaterialImportsModule,
//                 LocalizationModule.forRoot(l10nConfig), MatProgressSpinnerModule],
//             providers: [{ provide: SharedService, useClass: MockSharedService },
//                 AppInitService, AppSettings, ConfigService, L0ComponentService,
//                 CoreService, HTTPCommonService, GlobalHTTPErrorHanlder,
//                 ToasterService, LoadingComponent, UtilityService, HeaderService,
//                 ApplicationListService,
//             { provide: Router, useValue: router },
//             ]


//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(HeaderComponent);
//         sharedService = new MockSharedService();
//         component = fixture.componentInstance;
//         de = fixture.debugElement.query(By.css('img'));
//         el = de.nativeElement;
//         // fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should display image title', () => {
//         // fixture.detectChanges();
//         component.ngOnInit();
//         expect(de.attributes.src).toBe('assets/images/VFS_reverse_white_logo.svg');
//     });

//     it('should call ngDoCheck', () => {
//         // fixture.detectChanges();
//         component.ngDoCheck();
//     });

//     // it('should change jurisdiction data', () => {
//     //     component.changejurisdictionData('bangalore');
//     // });

//     // it('should call getURLList', () => {
//     //     component.getURLList();
//     // });
// });
