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
        this.vats[0].viewValue = _translation['home.calculation_type_forward'];
        this.vats[1].viewValue = _translation['home.calculation_type_reverse'];
      });
  }

  inputAmount = new FormControl<number>(0, { nonNullable: true });
  inputTax = new FormControl<number>(0, { nonNullable: true });
  taxType = new FormControl<string>('', { nonNullable: true });
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
    { value: 'fVat', viewValue: '' },
    { value: 'rVat', viewValue: '' },
  ];

  displayTaxType(tType: string) {
    if (tType === 'fVat') {
      // return 'Forward';
      return this.vats[0].viewValue;
    } else if (tType === 'rVat') {
      // return 'Reverse';
      return this.vats[1].viewValue;
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

  goToUrl(targetUrl: string) {
    window.open(targetUrl, '_blank');
    window.focus();
  }
}
