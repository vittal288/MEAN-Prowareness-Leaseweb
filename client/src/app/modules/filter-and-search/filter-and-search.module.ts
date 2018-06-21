// @@ CORE MODULE/COMPONENTS
import { NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { FilterAndSearchComponent } from './filter-and-search.component';

// @@ MODULE
import { FilterAndSearchRoutingModule } from './filter-and-search-routing.module';
import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';
import { ListOfServersComponent } from './list-of-servers/list-of-servers.component';
import { ItemServerComponent } from './list-of-servers/item-server/item-server.component';
import { LazyForModule } from './../../global-components/modules/lazyFor.module';


// @@ SERVICES
import { FilterAndSearchService } from './filter-and-search.service';
import { ServerDetailsComponent } from './server-details/server-details.component';


@NgModule({
  declarations: [
    FilterAndSearchComponent,
    ListOfServersComponent,
    ItemServerComponent,
    ServerDetailsComponent
  ],
  imports: [
    FilterAndSearchRoutingModule,
    CommonModule,
    NGMaterialImportsModule,
    LazyForModule
  ],
  exports: [
    FilterAndSearchComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    FilterAndSearchService
  ]
})
export class FilterAndSearchModule { 
  constructor() {
   // 
  }
}
