// @@ CORE MODULE/COMPONENTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';



// COMPONENTS
import { FilterAndSearchComponent } from './filter-and-search.component';

// @@ MODULE
import { FilterAndSearchRoutingModule } from './filter-and-search-routing.module';
import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';
import { ListOfServersComponent } from './list-of-servers/list-of-servers.component';

// @@ SERVICES
import { FilterAndSearchService } from './filter-and-search.service';
import { FilterComponent } from './filter/filter.component';
import { SliderComponent } from './filter/slider/slider.component';
import { RamFilterComponent } from './filter/ram-filter/ram-filter.component';
import { DropDownsComponent } from './filter/drop-downs/drop-downs.component';


// PIPES
import { FilterPipe } from './../../global-components/pipes/filter.pipe';


@NgModule({
  declarations: [
    FilterAndSearchComponent,
    ListOfServersComponent,
    FilterComponent,
    SliderComponent,
    RamFilterComponent,
    DropDownsComponent,
    FilterPipe
  ],
  imports: [
    FilterAndSearchRoutingModule,
    CommonModule,
    NGMaterialImportsModule,
    FormsModule,
    SlimLoadingBarModule
  ],
  exports: [
    FilterAndSearchComponent
  ],
  providers: [
    FilterAndSearchService
  ]
})
export class FilterAndSearchModule {
  constructor() {
    // 
  }
}
