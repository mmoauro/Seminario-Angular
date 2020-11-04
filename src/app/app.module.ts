import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelularesListComponent } from './celulares-list/celulares-list.component';
import { CelularesCartComponent } from './celulares-cart/celulares-cart.component';
import { CelularesViewComponent } from './celulares-view/celulares-view.component';
import { AboutComponent } from './about/about.component';
import { NumericInputComponent } from './numeric-input/numeric-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CelularesListComponent,
    CelularesCartComponent,
    CelularesViewComponent,
    AboutComponent,
    NumericInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
