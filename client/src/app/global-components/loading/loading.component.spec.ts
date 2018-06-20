import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Language, L10nConfig, LocalizationModule, TranslationService } from 'angular-l10n';


import { LoadingComponent } from './loading.component';

const l10nConfig: L10nConfig = {
  locale: {
    defaultLocale: { languageCode: 'en', countryCode: 'US' }
  },
  translation: {
    providers: [],
    caching: true,
    missingValue: 'No key'
  }
};

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TranslationService],
      declarations: [ LoadingComponent ],
      imports: [NGMaterialImportsModule, LocalizationModule.forRoot(l10nConfig)],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    component.ngOnInit();
  });

  it('define the onopenmodal', () => {
  component.onOpenModal();

  });

  it('define the closing modal', () => {
    component.onCloseModal();

    });

});
