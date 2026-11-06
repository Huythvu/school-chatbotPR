import { test, expect } from '@playwright/test';

test('Login with Test Account', async ({ page }) => {

  // Moving to Home page
  await page.goto('http://localhost:5173/');

  // Moving to Login page
  await page.goto('http://localhost:5173/login');

  // Clicking Email
  await page.getByRole('textbox', { name: 'Email' }).click();

  // Filling Email
  await page.getByRole('textbox', { name: 'Email' }).fill('asdzxc@hotmail.com');

  // Pressing tap, navigating to Password
  //! This could cause errors in the future upon ui changes.
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');

  // Filling Password
  await page.getByRole('textbox', { name: 'Password' }).fill('123123');

  // Clicking Login
  await page.getByRole('button', { name: 'Log In' }).click();
});