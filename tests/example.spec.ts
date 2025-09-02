import { test as base, expect } from '@playwright/test';

const test = base.extend({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({ ignoreHTTPSErrors: true });
    await use(context);
    await context.close();
  },
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});