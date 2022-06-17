import {Component, OnInit} from '@angular/core';
import {CalculationRule} from "../model/calculationRule.model";
import {CalculationRuleService} from "../service/calculationRule.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  calculationRules: CalculationRule[];

  constructor(private router: Router, private calculationRuleService: CalculationRuleService) {
  }

  ngOnInit(): void {
    this.calculationRuleService.getCalculationRules().subscribe(data => {
      console.log(data);
      this.calculationRules = data;
    })
  }

  onButtonClicked(id: string) {
    console.log(id);

    this.router.navigate(['/calculationInput/', {id: id}])
  }


}
