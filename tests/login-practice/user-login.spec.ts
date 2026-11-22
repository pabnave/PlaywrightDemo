// spec: specs/login-practice.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Practice Login', () => {
  test('User can sign in with the advertised demo credentials', async ({ page }) => {
    // 1. Select User and confirm the limited-functionality prompt with Okay.
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('input[value="user"]').check();

    const confirmation = page.locator('#myModal');
    await expect(confirmation).toBeVisible();
    await confirmation.getByRole('button', { name: 'Okay' }).click();
    await expect(confirmation).toBeHidden();
    await expect(page.locator('input[value="user"]')).toBeChecked();

    // 2. Enter the demo username and password shown on the page, check the terms box, and click Sign In.
    const helperText = await page.locator('body').innerText();
    const credentials = helperText.match(
      /username is ([^ ]+) and Password is ([^\s)]+)/i,
    );
    expect(credentials, 'Demo credentials should be displayed on the login page').not.toBeNull();
    if (!credentials) {
      throw new Error('Demo credentials were not found');
    }

    await page.locator('#username').fill(credentials[1]);
    await page.locator('#password').fill(credentials[2]);
    await page.locator('#terms').check();
    await page.getByRole('button', { name: 'Sign In' }).click();

    await expect(page).toHaveURL(/\/angularpractice\/shop$/);
    await expect(page.getByRole('heading', { name: 'Shop Name' })).toBeVisible();
    await expect(page.getByText('iphone X', { exact: true })).toBeVisible();
  });
});
