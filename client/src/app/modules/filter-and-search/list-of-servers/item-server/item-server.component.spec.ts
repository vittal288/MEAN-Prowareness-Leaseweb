import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemServerComponent } from './item-server.component';

describe('ItemServerComponent', () => {
  let component: ItemServerComponent;
  let fixture: ComponentFixture<ItemServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
