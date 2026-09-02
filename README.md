# Playwright Test Automation Framework

End-to-end automated testing suite built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.

---

## 📁 Project Structure

```text
assigment-electro-pi/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI workflow for running tests
├── data/
│   └── dataFactory.ts           # Centralized test data and factory functions
├── pages/
│   ├── LoginPage.ts             # Page Object for authentication
│   └── InventoryPage.ts         # Page Object for inventory management & assertions
├── tests/
│   ├── example.spec.ts          # Sample basic Playwright test
│   └── inventory.spec.ts        # Inventory flow E2E test spec
├── package.json                 # Project scripts and dependencies
├── playwright.config.ts         # Playwright test runner configuration
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## 🎯 Automated Scenario Flow

The test suite covers the following end-to-end user scenario:

1. **Login as Store Admin**: Authenticates via `LoginPage` using credentials supplied by `dataFactory`.
2. **Navigate to Inventory**: Clicks on the Inventory module navigation link.
3. **Fill Product Details**: Enters `Product Name` and `Price` using test data from `dataFactory`.
4. **Save Product**: Submits the product creation form.
5. **Assert Success Toast**: Verifies that the success alert message appears and displays the expected confirmation text.

---

## 🏗️ Architecture & Design Patterns

### 1. Page Object Model (POM)
Encapsulates web elements, locators, and user actions into dedicated classes to improve maintainability and reduce code duplication:
- **`LoginPage`** ([pages/LoginPage.ts](pages/LoginPage.ts)): Manages login elements and the `login(credentials)` method.
- **`InventoryPage`** ([pages/InventoryPage.ts](pages/InventoryPage.ts)): Handles inventory navigation, product creation (`addProduct(product)`), and assertion methods (`assertSuccessToastVisible()`).

### 2. Data Factory Pattern
- **`dataFactory.ts`** ([data/dataFactory.ts](data/dataFactory.ts)): Separates test data from test logic.
  - Generates typed test data with sensible defaults.
  - Supports custom overrides through `createProductData({ ... })`.
  - Supports environment variables for sensitive credentials (`ADMIN_USERNAME`, `ADMIN_PASSWORD`).

### 3. Encapsulated Assertions
Page-specific assertions (like toast visibility and message validation) live directly within their respective Page Object to keep test specifications clean and declarative.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alabd0/assigment-electro-pi.git
   cd assigment-electro-pi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browser binaries:
   ```bash
   npx playwright install --with-deps
   ```

---

## 🧪 Running Tests

| Command | Description |
|---|---|
| `npx playwright test` | Runs all test suites headlessly across all configured browsers. |
| `npx playwright test tests/inventory.spec.ts` | Runs only the inventory test spec. |
| `npx playwright test --headed` | Runs tests in headed browser mode (visible UI). |
| `npx playwright test --project=chromium` | Runs tests on Chromium only. |
| `npx playwright test --ui` | Opens Playwright interactive UI Mode with time-travel debugging. |
| `npx playwright test --debug` | Runs tests in Playwright Inspector debug mode. |
| `npx playwright show-report` | Opens the latest HTML test execution report. |

---

## ⚙️ Environment Variables (Optional)

You can customize credentials by providing environment variables:

```bash
export ADMIN_USERNAME="your-admin@store.com"
export ADMIN_PASSWORD="your-secure-password"
npx playwright test
```

---

## 🤝 Contribution Guidelines

1. **Adding New Pages**: Create a new class under `pages/` following the existing POM conventions.
2. **Adding Test Data**: Define types and generator functions in [data/dataFactory.ts](data/dataFactory.ts).
3. **Writing Tests**: Place new spec files in `tests/` with the `.spec.ts` extension. Keep test cases concise and focused on high-level user actions.
