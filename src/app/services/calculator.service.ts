import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  calculatedTaxTotal(amount: number, tax: number, vattype: string) {
    if (vattype === 'fVat') {
      const total_tax_paid = (tax / 100) * amount;
      return total_tax_paid.toFixed(2);
    } else if (vattype === 'rVat') {
      const total_after_tax = amount / (1 + tax / 100);
      const total_tax_deducted = -1 * (total_after_tax - amount);
      return total_tax_deducted.toFixed(2);
    } else {
      return '';
    }
  }

  calculateTotalPlusTax(amount: number, tax: number, vattype: string) {
    if (vattype === 'fVat') {
      const total_tax_paid = (tax / 100) * amount;
      const total_plus_tax = +total_tax_paid + +amount;
      return total_plus_tax.toFixed(2);
    } else if (vattype === 'rVat') {
      const total_after_tax = amount / (1 + tax / 100);
      return total_after_tax.toFixed(2);
    } else {
      return '';
    }
  }
}
