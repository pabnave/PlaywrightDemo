import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();
                await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();


  });
});
