
# Product Search Application

This is a **React-based front-end application** for searching and exploring products. The application is designed to provide a seamless and user-friendly experience for searching, filtering, and sorting products.

## Features

- **Search Functionality**: 
  - Start with a simple search bar on the homepage.
  - A placeholder message, *"No products found, try searching for something else,"* appears when no results are found.
  - Minimum of three characters is required for search. An alert box will show an error if the input is less than three characters.
  - Relevant products (matching the title or description) are displayed as cards.

- **Clear Search**: 
  - A clear search button is available to reset the search bar and the displayed results.

- **Sorting**: 
  - Products can be sorted by rating in **ascending** or **descending** order.

- **Filtering by Brand**: 
  - Filter products by their brand using a dropdown menu. Only the available brands in the current results will appear in the filter.

## How It Works

1. **Homepage**:
   - The application opens with a search bar and an initial "No products found" message.
2. **Search**:
   - Enter at least three characters in the search bar to see matching product cards.
   - An alert will appear if the input is less than three characters.
3. **Sort**:
   - Click the sorting button to toggle between ascending and descending order by rating.
4. **Filter by Brand**:
   - Use the brand dropdown to filter products by a specific brand.
5. **Clear Search**:
   - Use the clear search button to reset the search bar and results.

## How to Run the Application

### Prerequisites

- **Node.js**: Version **v21.0.0** or later.
- **npm**: Ensure that npm is installed along with Node.js.

### Steps to Run


1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open the application in your browser at `http://localhost:3000`.

### Node Version

This application is built with **Node v21.0.0**. Ensure you have this version installed by running:
```bash
node --version
```

## Project Structure

- **src/components**: Contains React components like the search bar, product grid, and filter.
- **src/pages**: Houses the main application views.
- **public**: Contains static files like the `index.html`.

## Future Improvements

- Implement pagination for better performance with larger datasets.
- Enhance error handling for invalid searches or API issues.
- Add advanced filtering options (e.g., price range, categories).


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