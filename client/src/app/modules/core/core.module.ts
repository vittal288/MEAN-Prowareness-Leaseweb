// @@ CORE MODULE/COMPONENTS
import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// @@ APP COMPONENTS
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



// @@ MODULE
import { NGMaterialImportsModule } from './../../ui-components-imports/material-imports.module';


// @@ PIPES




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NGMaterialImportsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
   
  ]
})
export class CoreModule { 
  constructor() {
   // 
  }
}
