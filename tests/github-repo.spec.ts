import { test, expect } from '@playwright/test';

test('Copy HTTPS link from first repo and log it', async ({ page }) => {
  // 1. Navigate to the user page
  await page.goto('https://github.com/patelke1-ospn');

  // 2. Click on the first repository
  const repoLink = page.getByRole('link', { name: 'PLAYWRIGHTMCP', exact: true });
  await expect(repoLink).toBeVisible();
  await repoLink.click();

  // 3. Click on "<> Code"
  const codeTab = page.getByRole('link', { name: 'Code' });
  await expect(codeTab).toBeVisible();
  await codeTab.click();

  // 4. Make sure you're on the "Local" tab (Code dropdown is expanded)
  const codeButton = page.getByRole('button', { name: 'Code' });
  await expect(codeButton).toBeVisible();
  await codeButton.click();


  // 5. Directly interact with the textbox and Copy button (HTTPS is already selected)
  const linkBox = page.getByRole('textbox', { name: 'Clone with HTTPS url' });
  await expect(linkBox).toBeVisible();
  const copyButton = page.getByRole('button', { name: 'Copy url to clipboard' });
  await expect(copyButton).toBeVisible();
  await copyButton.click();

  // 6. Get the link from the textbox and log it
  const link = await linkBox.inputValue();
  console.log('Copied HTTPS link:', link);

  // 8. Assert the link is correct
  expect(link).toBe('https://github.com/patelke1-ospn/PLAYWRIGHTMCP.git');
});
