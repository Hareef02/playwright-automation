import { test, expect } from '@playwright/test';
const apiUrl = process.env.API_URL ?? 'http://localhost:3000';

// test('GET /api/data should return 200', async ({ request }) => {
// 	const response = await request.get(`${apiUrl}/users/1`);
// 	expect(response.status()).toBe(200);
// });

// test('POST /api/data should return 201', async ({ request }) => {
// 	const response = await request.post('http://localhost:3000/users', {
// 		data: {
// 			name: 'John Doe',
// 			email: 'john.doe@example.com'
// 		}
// 	});
// 	expect(response.status()).toBe(201);
// });

test.skip('PUT /api/data should return 200', async ({ request }) => {
	const response = await request.put(`${apiUrl}/users/1`, {
		data: {
			name: 'Jane Doe',
			email: 'jane.doe@example.com'
		}
	});
	expect(response.status()).toBe(200);
});

test.skip('DELETE /api/data should return 200', async ({ request }) => {
	const response = await request.delete('http://localhost:3000/users/1');
	expect(response.status()).toBe(200);
});

// test('GET /api/data should return 200', async ({ request }) => {
// 	const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
// 	const responseBody = await response.json();
// 	// console.log('Response Body:', responseBody);
// 	 expect(responseBody.tags[0]).toBe("Test");
// 	 expect(responseBody.tags).toHaveLength(10);
// });

test('GET /api/data should return 200', async ({ request }) => {
	const response = await request.get('tags');

	expect(response.status()).toBe(200);

	const responseBody = await response.json();

	expect(responseBody.tags[0]).toBe('Test');
	expect(responseBody.tags).toHaveLength(10);
});

test('POST /api/data should return 201', async ({ request }) => {
	const currentData = new Date();
	const response = await request.post('articles', {
		headers: {
			Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1NjcyMX0sImlhdCI6MTc4MjMwOTk1NywiZXhwIjoxNzg3NDkzOTU3fQ.G2OW_GARNbYpuGOK2_5LKpS7h8k24-RB2cMI0tWOVzo'
		},
		data: {
			"article": {
				"title": `${currentData.getTime()}`,
				"description": "Description",
				"body": "Hello this body1",
				"tagList": ["youtube", "facebook", "twitter"]
			}
		}
	}
	);
	const responseBody = await response.json();
	expect(response.status()).toBe(201);
	expect(responseBody.article).toHaveProperty('title', `${currentData.getTime()}`);
	expect(responseBody.article.description).toBe('Description');
	const tagList = responseBody.article.tagList;
	//console.log('Response Body:', responseBody);	
});
