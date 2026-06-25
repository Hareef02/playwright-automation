import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import loginData from '../test-data/login-data.json';


test('Login with valid credentials', async ({ page }) => {

	const loginPage = new LoginPage(page);
	await loginPage.navigateToLoginPage();
	await loginPage.login(loginData.valid.username, loginData.valid.password);
	await loginPage.clickLoginButton();
	await loginPage.verifyLoginSuccess();

});

test('Login with invalid credentials', async ({ page }) => {

	const loginPage = new LoginPage(page);
	await loginPage.navigateToLoginPage();
	await loginPage.login(loginData.invalid.username, loginData.invalid.password);
	await loginPage.clickLoginButton();
	await loginPage.verifyLoginFailure();

});




// import { test, expect, Locator } from '@playwright/test';

// test('Login with valid credentials', async ({ page }) => {
// 	await page.goto('https://www.saucedemo.com/');

// 	const userNameInput: Locator = page.locator('#user-name');
// 	const passwordInput: Locator = page.locator('#password');
// 	const loginButton: Locator = page.locator('#login-button');

// 	await userNameInput.fill('standard_user');
// 	await passwordInput.fill('secret_sauce');
// 	await loginButton.click();

// 	await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// 	await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the page is fully loaded
// 	const inventoryPageTitle: Locator = page.locator('.title');
// 	await expect(inventoryPageTitle).toHaveText('Products');
// });