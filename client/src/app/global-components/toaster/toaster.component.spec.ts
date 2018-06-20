import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  NgModule,
  Component,
  ElementRef,
  AfterViewInit,
  DoCheck,
  OnDestroy,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  IterableDiffers
} from '@angular/core';
import { Language, L10nConfig, LocalizationModule, TranslationService } from 'angular-l10n';
import { HttpClientModule } from '@angular/common/http';
import { ToasterComponent } from './toaster.component';
import { ConfigService } from '../../../config/config.service';
import { SharedService } from '../../modules/shared/shared.service';
import { DomHandler } from '../dom/domhandler';
import { Message } from './../model/message.model';

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

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;
  let value: Message[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [TranslationService , SharedService, DomHandler,
      ConfigService],
      declarations: [ ToasterComponent ],
      imports: [HttpClientModule, LocalizationModule.forRoot(l10nConfig)],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  it('should call ngAfterViewInit', () => {
    component.value = this.value;
    component.ngAfterViewInit();
  });

  it('should call ngDoCheck', () => {
    component.immutable = false;
    component.ngDoCheck();
  });

  it('should call handleValueChange', () => {
    component.preventRerender = true;
    component.handleValueChange();
  });

  it('should call clearTrigger', () => {
    component.timeout = true;
    clearTimeout(component.timeout);
    component.clearTrigger();
  });

  // it('should call remove', () => {
  //   component.immutable = true;
  //   component.remove( 0, 'abc' );
  // });

  // it('should call removeAll', () => {
  //   component.value = this.value;
  //   component.removeAll();
  // });

  it('should call ngOnDestroy', () => {
    component.ngOnDestroy();
  });

});
