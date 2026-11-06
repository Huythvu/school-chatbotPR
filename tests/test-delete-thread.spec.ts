import { test, expect } from '@playwright/test';

test('Delete', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Delete thread' }).click();
});