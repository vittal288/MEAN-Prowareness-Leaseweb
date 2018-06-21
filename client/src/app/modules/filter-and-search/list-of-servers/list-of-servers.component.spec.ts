import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfServersComponent } from './list-of-servers.component';

describe('ListOfServersComponent', () => {
  let component: ListOfServersComponent;
  let fixture: ComponentFixture<ListOfServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
