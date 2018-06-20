import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Language, L10nConfig, LocalizationModule, TranslationService } from 'angular-l10n';

import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer.component';

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

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [HttpClientModule, LocalizationModule.forRoot(l10nConfig)],
      

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
