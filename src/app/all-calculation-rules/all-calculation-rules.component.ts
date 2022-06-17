import {Component, OnInit} from '@angular/core';
import {CalculationRule} from "../model/calculationRule.model";
import {CalculationRuleService} from "../service/calculationRule.service";

@Component({
  selector: 'app-all-calculation-rules',
  templateUrl: './all-calculation-rules.component.html',
  styleUrls: ['./all-calculation-rules.component.css']
})
export class AllCalculationRulesComponent implements OnInit {

  calculationRules: CalculationRule[];

  constructor(private calculationRuleService: CalculationRuleService) { }

  ngOnInit(): void {
    this.calculationRuleService.getCalculationRules().subscribe(data => {
      this.calculationRules = data;
    })
  }
}
