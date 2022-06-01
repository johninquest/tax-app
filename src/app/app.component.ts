import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalculatorService } from './services/calculator.service';
import { VatDescriptor } from './shared/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _cs: CalculatorService) {}

  ngOnInit() {
    this.liveClock();
  }

  inputAmount = new FormControl();
  inputTax = new FormControl();
  taxType = new FormControl('');

  liveDateTime = new Date();

  vats: VatDescriptor[] = [
    { value: 'fVat', viewValue: 'Forward' },
    { value: 'rVat', viewValue: 'Reverse' },
  ];

  displayTaxType(tType: string) {
    if (tType === 'fVat') {
      return 'Forward';
    } else if (tType === 'rVat') {
      return 'Reverse';
    } else {
      return '';
    }
  }

  showCalculatedTax(amt: number, tax: number, ttype: string) {
    if (amt && tax && ttype) {
      return this._cs.calculatedTaxTotal(amt, tax, ttype);
    } else {
      return '';
    }
  }

  showCalculatedTotal(amt: number, tax: number, ttype: string) {
    if (amt && tax && ttype) {
      return this._cs.calculateTotalPlusTax(amt, tax, ttype);
    } else {
      return '';
    }
  }

  /*   onChanges(): void {
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
  } */

  liveClock() {
    setInterval(() => {
      this.liveDateTime = new Date();
    }, 1000);
  }
}
