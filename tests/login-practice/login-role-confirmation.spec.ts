// spec: specs/login-practice.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Practice Login', () => {
  test('User role confirmation can be canceled', async ({ page }) => {
    // 1. Select the User radio option.
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('input[value="user"]').check();

    const confirmation = page.locator('#myModal');
    await expect(confirmation).toBeVisible();
    await expect(confirmation).toContainText(
      'You will be limited to only fewer functionalities of the app.',
    );

    // 2. Choose Cancel in the confirmation dialog.
    await confirmation.getByRole('button', { name: 'Cancel' }).click();

    await expect(confirmation).toBeHidden();
    await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();
  });
});
