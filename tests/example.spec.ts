// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test.only('this test will be run', async ({ page }) => {

//   await page.goto('https://playwright.dev/');
//   await page.pause();
//   await expect(page).toHaveTitle(/Playwright/);
// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').fill('buy car');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('buy hourse');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('but bike');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('acitve car');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('active bike');
  await page.getByTestId('text-input').press('Enter');
  //await expect(page.getByRole('button', { name: 'Delete todo' })).toBeVisible();

  await page.getByRole('listitem').filter({ hasText: 'buy car' }).getByTestId('todo-item-toggle').check();
  await expect(page.getByRole('button', { name: 'Clear completed' })).toBeVisible();

  await page.getByRole('listitem').filter({ hasText: 'buy hourse' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'but bike' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('active bike')).toBeVisible();
  await page.getByText('acitve car').click();
  await expect(page.getByTestId('todo-list')).toContainText('acitve car');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();  
});


test('File upload test', async ({ page }) => {
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');  
  const filePath = 'C:/Users/arcet/Downloads/4VB90_11688_25_01_elev_dsnp_HRA_2025-10-28-22-53-00.txt'; // Replace with the actual file path
  await page.locator("//input[@name='filesToUpload']").setInputFiles(filePath);
  //await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the file is uploaded
});