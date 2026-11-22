// spec: specs/login-practice.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Practice Login', () => {
  test('Login form renders with expected defaults', async ({ page }) => {
    // 1. Open the seeded login page.
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Username:' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password:' })).toBeEmpty();
    await expect(page.locator('input[value="admin"]')).toBeChecked();
    await expect(page.locator('select')).toHaveValue('stud');
    await expect(page.locator('#terms')).not.toBeChecked();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
  });
});
