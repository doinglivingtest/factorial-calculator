import type { Locator, Page } from '@playwright/test';

export class CalculatorPage {
  readonly inputNumber: Locator;

  readonly calculateButton: Locator;

  readonly resultDiv: Locator;

  constructor(readonly page: Page) {
    this.inputNumber = this.page.locator('#number');
    this.calculateButton = this.page.locator('#getFactorial');
    this.resultDiv = this.page.locator('#resultDiv');
  }
}
