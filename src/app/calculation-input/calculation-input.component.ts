import {Component, OnInit} from '@angular/core';
import {CalculationRuleService} from "../service/calculationRule.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-calculation-input',
  templateUrl: './calculation-input.component.html',
  styleUrls: ['./calculation-input.component.css']
})
export class CalculationInputComponent implements OnInit {

  calculationForm: FormGroup;
  calculationResult: number;
  public inputs: string[] = [];
  variables: string[] = [];
  calculationRuleName: string = '';
  id: string = '';


  constructor(private router: Router,
              private route: ActivatedRoute,
              private calculationRuleService: CalculationRuleService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {

    // get id from route / url
    let id = this.route.snapshot.paramMap.get("id");

    if (id != null) {
      this.id = id;
      this.calculationRuleService.getInputsById(id).subscribe(data => {
        this.inputs = data;
      })
      this.calculationRuleService.getVariablesById(id).subscribe(data => {
        this.variables = data;
      })
    }

    this.calculationForm = new FormGroup({
      input0: new FormControl(''),
      input1: new FormControl('')
    })
  }

  onSubmitClicked() {
    if (this.inputs.length > 1) {
      this.calculationRuleService
        .executeCalculationRuleWithTwoParameters(this.id, this.calculationForm.controls['input0'].value,
        this.calculationForm.controls['input1'].value).subscribe(data => {
        this.calculationResult = data
      });
    } else {
      this.calculationRuleService
        .executeCalculationRuleWithOneParameter(this.id, this.calculationForm.controls['input0'].value)
        .subscribe(data => { this.calculationResult = data
      });
    }
  }
}
