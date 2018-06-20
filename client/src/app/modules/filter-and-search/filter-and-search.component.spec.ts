import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAndSearchComponent } from './filter-and-search.component';

describe('FilterAndSearchComponent', () => {
  let component: FilterAndSearchComponent;
  let fixture: ComponentFixture<FilterAndSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAndSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
