# playwright-automation

# This repository contains a Playwright automation project that demonstrates how to use Playwright for end-to-end testing of web applications. The project includes test cases for both UI and API testing.

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/playwright-automation.git
   cd playwright-automation
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npx playwright test
   ```
4. To run a specific test file, use:
   ```bash
   npx playwright test path/to/test-file.spec.ts
   ```
5. To generate an HTML report after running the tests, use:
   ```bash
   npx playwright show-report
   ```
### Project Structure
- `tests/`: Contains the test files for both UI and API tests.
- `playwright.config.ts`: Configuration file for Playwright.
- `package.json`: Contains the project metadata and dependencies.
- `README.md`: This file, providing an overview of the project and instructions for setup and usage.
### Writing Tests
- Tests are written in TypeScript and use the Playwright testing framework.
- Each test file should be placed in the `tests/` directory and follow the naming convention `*.spec.ts`.
- Use the Playwright API to interact with web elements, make API requests, and perform assertions.
### Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request detailing your changes and the problem they solve.
6. Wait for the maintainers to review your pull request and provide feedback.
7. Once approved, your changes will be merged into the main branch.
8. Delete your feature branch after the merge is complete.
9. Celebrate your contribution to the project!
10. If you encounter any issues or have suggestions for improvements, please open an issue in the repository.
