// @@ CORE MODULE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { FilterAndSearchComponent } from './filter-and-search.component';
import { ServerDetailsComponent } from './server-details/server-details.component';




const filterAndSearchRoutes: Routes = [
    {
        path: '', component: FilterAndSearchComponent, children: [
            { path: 'serverDetails', component: ServerDetailsComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(filterAndSearchRoutes)],
    exports: [RouterModule]
})
export class FilterAndSearchRoutingModule {
    //
}
