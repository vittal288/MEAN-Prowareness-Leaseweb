// @@ CORE MODULE/COMPONENTS
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FilterAndSearchComponent } from './filter-and-search.component';

// @@ MODULE
import { FilterAndSearchRoutingModule } from './filter-and-search-routing.module';
import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';


// @@ PIPES

@NgModule({
  declarations: [
    FilterAndSearchComponent
  ],
  imports: [
    FilterAndSearchRoutingModule,
    CommonModule,
    NGMaterialImportsModule
  ],
  exports: [
    FilterAndSearchComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
   
  ]
})
export class FilterAndSearchModule { 
  constructor() {
   // 
  }
}
