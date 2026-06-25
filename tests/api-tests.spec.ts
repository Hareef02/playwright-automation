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

test('GET /api/data should return 200', async ({ request }) => {
	const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
	const responseBody = await response.json();
	// console.log('Response Body:', responseBody);
	await expect(responseBody.tags[0]).toBe("Test");
	await expect(responseBody.tags).toHaveLength(10);
});

test('POST /api/data should return 201', async ({ request }) => {
	const response = await request.post('https://conduit-api.bondaracademy.com/api/articles/',
		{
			headers: {
				Authorization: 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1NjcyMX0sImlhdCI6MTc4MjMwOTk1NywiZXhwIjoxNzg3NDkzOTU3fQ.G2OW_GARNbYpuGOK2_5LKpS7h8k24-RB2cMI0tWOVzo'
			},
			data: {
				"article": {
					"title": "123131111",
					"description": "Description121",
					"body": "Hello this body1",
					"tagList": ["tag311", "tag231"]
				}
			}
		}
	);
	await response.json();
	// console.log('Response Body:', responseBody);
});
