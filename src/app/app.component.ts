import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CalculatorService } from './services/calculator.service';

export interface Vatdesc {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private cs: CalculatorService) {}

  inputAmount = new FormControl('', [Validators.required]);
  inputTax = new FormControl('', [Validators.required]);
  taxType = new FormControl('');

  liveDateTime = new Date();

  vats: Vatdesc[] = [
    { value: 'fVat', viewValue: 'Forward VAT' },
    { value: 'rVat', viewValue: 'Reverse VAT' },
  ];

  displayTaxType(tType: string) {
    if (tType === 'fVat') {
      return 'Forward VAT';
    } else if (tType === 'rVat') {
      return 'Reverse VAT';
    }
  }

  showCalculatedTax() {
    let amt: number = this.inputAmount.value;
    let tax: number = this.inputTax.value;
    let ttype: string = this.taxType.value;
    if (amt && tax && ttype) {
      return this.cs.calculatedTaxTotal(amt, tax, ttype);
    } else {
      return '';
    }
  }

  showCalculatedTotal() {
    let amt: number = this.inputAmount.value;
    let tax: number = this.inputTax.value;
    let ttype: string = this.taxType.value;
    if (amt && tax && ttype) {
      return this.cs.calculateTotalPlusTax(amt, tax, ttype);
    } else {
      return '';
    }
  }

  onChanges(): void {
    this.inputAmount.valueChanges.subscribe(() => {
      this.showCalculatedTax();
      this.showCalculatedTotal();
    });
    this.inputTax.valueChanges.subscribe(() => {
      this.showCalculatedTax();
      this.showCalculatedTotal();
    });
    this.taxType.valueChanges.subscribe(() => {
      this.showCalculatedTax();
      this.showCalculatedTotal();
    });
  }

  liveClock() {
    setInterval(() => {
      this.liveDateTime = new Date();
    }, 1000);
  }

  ngOnInit() {
    this.liveClock();
  }
}
