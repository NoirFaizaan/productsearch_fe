I'll add a section to the README about running test cases. I'll insert the following section under the "How to Run the Application" part:

```markdown
## Running Test Cases

### Prerequisites

- All dependencies are already installed from the previous setup
- Jest and React Testing Library are installed as dev dependencies

### Running Tests

1. **Run All Tests**:
   ```bash
   npm test
   ```
   This command runs all test suites and provides a summary of test results.

2. **Run Specific Test Suite**:
   ```bash
   npm test -- Button.test.js
   ```
   Replace `Button.test.js` with the specific test file you want to run.

3. **Watch Mode (Development)**:
   ```bash
   npm test -- --watch
   ```
   This runs tests in watch mode, which automatically re-runs tests when files change.

4. **Coverage Report**:
   ```bash
   npm test -- --coverage
   ```
   Generates a comprehensive coverage report showing which parts of your code are tested.

### Test Configuration

- **Test Environment**: Jest with React Testing Library
- **Coverage Tools**: Included with Jest
- **Configuration**: Defined in `jest.config.js` or `package.json`

### Troubleshooting

- Ensure all dependencies are installed: `npm install`
- Check Node.js version compatibility
- Verify that test scripts are correctly defined in `package.json`
```