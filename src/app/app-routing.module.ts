import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllCalculationRulesComponent} from "./all-calculation-rules/all-calculation-rules.component";
import {HomeComponent} from "./home/home.component";
import {CalculationInputComponent} from "./calculation-input/calculation-input.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'calculationRules', component: AllCalculationRulesComponent},
  {path: 'calculationInput', component: CalculationInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
