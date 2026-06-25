import {test,expect} from '@playwright/test';

test('Kitchen page should have the correct title', async ({page}) => {
   
	await page.goto('https://kitchen.applitools.com/');
	await page.pause();
	const heading = await page.getByRole('heading', { name: 'The Kitchen' });
	expect(heading).toBeTruthy();
	
});