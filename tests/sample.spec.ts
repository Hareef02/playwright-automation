import {test, expect} from '@playwright/test';

test('should have the correct title', async ({page}) => {
  await page.goto('https://google.com');
 // await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded
  await expect(page).toHaveTitle('Google');
});