import { test, chromium } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import loginData from '../test-data/login-data.json';

test('slowmotion video recording demo', async () => {

	const browser = await chromium.launch({
		slowMo: 1000,
		headless: false
	});

	const context = await browser.newContext({
		recordVideo: {
			dir: 'videos/',
			size: { width: 1280, height: 720 }
		}
	});

	const page = await context.newPage();
	const loginPage = new LoginPage(page);

	await loginPage.navigateToLoginPage();
	await loginPage.login(loginData.valid.username, loginData.valid.password);
	await loginPage.clickLoginButton();
	await loginPage.verifyLoginSuccess();

	await context.close();
	await browser.close();
});