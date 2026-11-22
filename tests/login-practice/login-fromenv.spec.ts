import {test,expect} from "@playwright/test";


test("Login test from env file", async({page})=>{

  const username = process.env.ADMIN_USERNAME!;
  const password = process.env.ADMIN_PASSWORD!;
    
  await page.goto('/loginpagePractise/');
  await page.locator('#username').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('#terms').check();
  await page.getByRole('button', { name: 'Sign In' }).click();



  await expect(page).toHaveURL(/\/angularpractice\/shop$/);
  await expect(page.getByRole('heading', { name: 'Shop Name' })).toBeVisible();
  await expect(page.getByText('iphone X', { exact: true })).toBeVisible();

  });