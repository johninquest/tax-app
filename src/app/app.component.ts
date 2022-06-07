import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalculatorService } from './services/calculator.service';
import { VatDescriptor } from './shared/interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _cs: CalculatorService, private _ts: TranslateService) {
    _ts.addLangs(['de', 'en']);
    _ts.setDefaultLang(this.getBrowserLanguage(navigator.language));
  }

  ngOnInit() {
    this.liveClock();
    this._ts
      .get(['home.calculation_type_forward', 'home.calculation_type_reverse'])
      .subscribe((_translation) => {
        this.forwardVat = _translation['home.calculation_type_forward'];
        this.reverseVat = _translation['home.calculation_type_reverse'];
        console.log(
          'this.forwardVat',
          _translation['home.calculation_type_forward']
        );
        console.log(
          'this.reverseVat',
          _translation['home.calculation_type_reverse']
        );
      });
  }

  inputAmount = new FormControl();
  inputTax = new FormControl();
  taxType = new FormControl('');
  forwardVat!: string;
  reverseVat!: string;

  liveDateTime = new Date();

  getBrowserLanguage(sysLanguage: string) {
    let languageToLowerCase = sysLanguage.toLocaleLowerCase();
    let isDE = languageToLowerCase.startsWith('de');
    if (isDE) {
      return 'de';
    } else {
      return 'en';
    }
  }

  vats: VatDescriptor[] = [
    { value: 'fVat', viewValue: this.forwardVat ?? '' },
    { value: 'rVat', viewValue: this.reverseVat ?? '' },
  ];

  displayTaxType(tType: string) {
    if (tType === 'fVat') {
      // return 'Forward';
      return this.forwardVat;
    } else if (tType === 'rVat') {
      // return 'Reverse';
      return this.reverseVat;
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

  liveClock() {
    setInterval(() => {
      this.liveDateTime = new Date();
    }, 1000);
  }
}
