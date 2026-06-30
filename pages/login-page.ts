import { Page, expect, Locator } from "@playwright/test";


export class LoginPage {
	readonly page: Page;
	readonly userName: Locator;
	readonly passwordInput: Locator;
	readonly loginButton: Locator;
	readonly errorMessage: Locator;

	constructor(page: Page) {
		this.page = page;
		this.userName = page.locator('#user-name');
		this.passwordInput = page.locator('#password');
		this.loginButton = page.locator('#login-button');
		this.errorMessage = page.locator('[data-test="error"]');
	}

	async navigateToLoginPage() {
		await this.page.goto('https://www.saucedemo.com/');
	}

	async login(username: string, password: string) {
		await this.userName.fill(username);
		await this.passwordInput.fill(password);
	}

	async clickLoginButton() {
		await this.loginButton.click();
	}

	async verifyLoginSuccess() {
		await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
		await this.page.waitForTimeout(2000);
		await expect(this.page.locator('.title')).toHaveText('Products');
		await this.page.screenshot({
			path: 'screenshots/login-success.png',
			fullPage: true
		});
	}

	async verifyLoginFailure() {
		await expect(this.errorMessage).toBeVisible();
		await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
	}
}