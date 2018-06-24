// @@ CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { FilterAndSearchComponent } from './filter-and-search.component';

const filterAndSearchRoutes: Routes = [
    {
        path: '', redirectTo: 'servers',pathMatch:'full'
    },
    {
        path: 'servers', component: FilterAndSearchComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(filterAndSearchRoutes)],
    exports: [RouterModule]
})
export class FilterAndSearchRoutingModule {
    //
}
