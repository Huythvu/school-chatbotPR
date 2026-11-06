import { test, expect } from '@playwright/test';

test('Opret Thread', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: '+ New' }).click();
});