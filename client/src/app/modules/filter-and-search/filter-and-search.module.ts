// @@ CORE MODULE/COMPONENTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
import { FilterComponent } from './filter/filter.component';
import { SliderComponent } from './filter/slider/slider.component';
import { RamFilterComponent } from './filter/ram-filter/ram-filter.component';
import { HddFilterComponent } from './filter/hdd-filter/hdd-filter.component';
import { LocationFilterComponent } from './filter/location-filter/location-filter.component';


@NgModule({
  declarations: [
    FilterAndSearchComponent,
    ListOfServersComponent,
    ItemServerComponent,
    ServerDetailsComponent,
    FilterComponent,
    SliderComponent,
    RamFilterComponent,
    HddFilterComponent,
    LocationFilterComponent
  ],
  imports: [
    FilterAndSearchRoutingModule,
    CommonModule,
    NGMaterialImportsModule,
    LazyForModule,
    FormsModule
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