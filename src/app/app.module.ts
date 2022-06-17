import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AllCalculationRulesComponent} from './all-calculation-rules/all-calculation-rules.component';
import {HomeComponent} from './home/home.component';
import {CalculationInputComponent} from './calculation-input/calculation-input.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    AllCalculationRulesComponent,
    HomeComponent,
    CalculationInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
