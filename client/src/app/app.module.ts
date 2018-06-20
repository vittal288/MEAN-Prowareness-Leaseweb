import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { NGMaterialImportsModule } from './ui-components-imports/material-imports.module';
import { CoreModule } from './modules/core/core.module';
import { FilterAndSearchModule } from './modules/filter-and-search/filter-and-search.module';
// import { SharedModule } from './modules/shared.module';



// COMPONENTS
import { LoadingComponent } from './global-components/loading/loading.component';


// PIPES 


// DIRECTIVES 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NGMaterialImportsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CoreModule,
    FilterAndSearchModule,
    // SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
