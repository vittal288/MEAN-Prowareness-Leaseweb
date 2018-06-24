import { FilterAndSearchModule } from './modules/filter-and-search/filter-and-search.module';
// import { FilterAndSearchComponent } from './modules/filter-and-search/filter-and-search.component';
import { NgModule } from '@angular/core';
import {
    Routes,
    Router,
    RouterModule
} from '@angular/router';




const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './modules/filter-and-search/filter-and-search.module#FilterAndSearchModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { 
    //
}
