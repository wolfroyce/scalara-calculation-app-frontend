import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCalculationRulesComponent } from './all-calculation-rules.component';

describe('AllCalculationRulesComponent', () => {
  let component: AllCalculationRulesComponent;
  let fixture: ComponentFixture<AllCalculationRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCalculationRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCalculationRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
