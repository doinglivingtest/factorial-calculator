import { test, expect, type Page } from '@playwright/test';
import { factorialRecursive, getRandomInt } from '../utils/util';
import { CalculatorPage } from '../pages/CalculatorPage';


let calculatorPage: CalculatorPage;

test.beforeEach(async ({ page }) => {
  await page.goto('https://qainterview.pythonanywhere.com');
  calculatorPage = new CalculatorPage(page);
});

test.describe('Online Factorial Calculator', () => {
  test('Verify the correctness of the calculator for integer numbers in range (10, 100)', async ({ page }) => {
    // generate a random number between 10 and 100
    const randomNUmber = getRandomInt(10, 100);
    const factorialResult = factorialRecursive(randomNUmber);

    // Fill in the number into the input field and calculate the factorial number
    await calculatorPage.inputNumber.fill(randomNUmber.toString());
    await calculatorPage.calculateButton.click();

    // Make sure the result is the expected
    await expect(calculatorPage.resultDiv).toHaveText(
        `The factorial of ${randomNUmber} is: ${factorialResult}`,
    );
  });
});
