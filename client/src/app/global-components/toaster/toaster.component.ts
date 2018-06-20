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

import { CommonModule } from '@angular/common';

// import { ConfigService } from '../../../config/config.service';
// import { SharedService } from '../../modules/shared/shared.service';
import { DomHandler } from '../dom/domhandler';
import { Message } from './../model/message.model';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  providers: [DomHandler]
})
export class ToasterComponent implements AfterViewInit, DoCheck, OnDestroy {
  @Input() sticky: boolean;
  @Input() life = 3000;
  @Input() style: any;
  @Input() styleClass: string;
  @Input() immutable = true;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<Message[]> = new EventEmitter<Message[]>();
  @ViewChild('container') containerViewChild: ElementRef;
  // @Language() languageCode: string;
  // @DefaultLocale() defaultLocale: string;
  _value: Message[];
  zIndex: number;
  container: HTMLDivElement;
  timeout: any;
  preventRerender: boolean;
  differ: any;

  constructor(public el: ElementRef, public domHandler: DomHandler, public differs: IterableDiffers) {
    this.zIndex = DomHandler.zindex;
    this.differ = differs.find([]).create(null);
  }

  ngAfterViewInit() {
    this.container = <HTMLDivElement>this.containerViewChild.nativeElement;

    if (this.value && this.value.length) {
      this.clearTrigger();
    }
  }

  @Input() get value(): Message[] {
    return this._value;
  }
  set value(val: Message[]) {
    this._value = val;
    if (this.container && this.immutable) {
      this.handleValueChange();
    }
  }


  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    if (!this.immutable && this.container) {
      const changes = this.differ.diff(this.value);
      if (changes) {
        this.handleValueChange();
      }
    }
  }

  handleValueChange() {
    if (this.preventRerender) {
      this.preventRerender = false;
      return;
    }

    this.zIndex = ++DomHandler.zindex;
    this.domHandler.fadeIn(this.container, 250);
    this.clearTrigger();
  }

  clearTrigger() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.removeAll();
    }, this.life);
  }

  remove(index: number, msgel: any) {
    this.domHandler.fadeOut(msgel, 250);

    setTimeout(() => {
      this.preventRerender = true;
      this.onClose.emit({ message: this.value[index] });

      if (this.immutable) {
        this._value = this.value.filter((val, i) => i !== index);
        this.valueChange.emit(this._value);
      } else {
        this._value.splice(index, 1);
      }
    }, 250);
  }

  removeAll() {
    if (this.value && this.value.length) {
      this.domHandler.fadeOut(this.container, 250);

      setTimeout(() => {
        this.value.forEach((msg, index) => this.onClose.emit({ message: this.value[index] }));
        if (this.immutable) {
          this.value = [];
          this.valueChange.emit(this.value);
        } else {
          this.value.splice(0, this.value.length);
        }
      }, 250);
    }
  }

  onMessageClick(i: number) {
    this.onClick.emit({ message: this.value[i] });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    if (!this.sticky) {
      clearTimeout(this.timeout);
    }
  }
}


@NgModule({
  imports: [CommonModule],
  exports: [ToasterComponent],
  declarations: [ToasterComponent]
})
export class ToasterComponentModule {


}

