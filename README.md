# Dealls.com UI Automation with Cypress

This project contains automated UI tests for the Dealls.com website, built using Cypress and JavaScript, following the Page Object Model (POM) design pattern.

## Prerequisites

- Node.js (which includes npm or yarn)
- A code editor (e.g., VS Code)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```
    This will install Cypress and any other necessary dependencies defined in `package.json` (which would need to be created if not already present, typically `npm init -y` followed by `npm install cypress --save-dev`).

    *For this project, as we are setting it up from scratch, you'll need to install Cypress first if it's not already a dependency:*
    ```bash
    npm install cypress --save-dev
    ```

## Running Tests

There are several ways to run Cypress tests:

1.  **Open Cypress Test Runner (Interactive Mode):**
    ```bash
    npx cypress open
    ```
    This command opens the Cypress Test Runner, where you can see your spec files and run them individually or all at once. It provides a visual interface to see tests run in a browser.

2.  **Run All Tests (Headed Mode):**
    To run all tests in a headed browser (visible) from the command line:
    ```bash
    npx cypress run
    ```

3.  **Run All Tests (Headless Mode):**
    To run all tests in a headless browser (no UI, faster for CI):
    ```bash
    npx cypress run --headless
    ```

4.  **Run Specific Test File:**
    ```bash
    npx cypress run --spec "cypress/e2e/login.cy.js"
    ```

**Note on Credentials:**
The tests use placeholder credentials (`testuser@example.com`, `password123`). For actual test execution against a live environment, you should replace these with valid test account credentials. It's highly recommended to use [Cypress Environment Variables](https://docs.cypress.io/guides/guides/environment-variables) to manage sensitive data like usernames and passwords. You can set them up in a `cypress.env.json` file (add this file to `.gitignore`) or via command-line arguments.

Example `cypress.env.json`:
```json
{
  "TEST_EMAIL": "your_actual_test_email@example.com",
  "TEST_PASSWORD": "your_actual_test_password"
}
```

## Folder Structure

The project follows a standard Cypress structure with the Page Object Model:

-   `cypress/`
    -   `e2e/`: Contains all test files (spec files, `*.cy.js`).
        -   `login.cy.js`: Tests related to the login functionality.
        -   `mentoring.cy.js`: Tests related to the mentoring page functionality.
    -   `pages/`: Contains Page Object Model (POM) files. Each file represents a page or a significant component of the application and encapsulates its elements and interactions.
        -   `LoginPage.js`: POM for the login page.
        -   `MentoringPage.js`: POM for the mentoring page.
    -   `support/`: Contains custom commands and global configurations.
        -   `e2e.js`: Executed before each spec file, good for global before/after hooks or importing custom commands.
        -   `commands.js`: Used to define custom Cypress commands.
-   `cypress.config.js`: Main Cypress configuration file (base URL, etc.).
-   `README.md`: This file.
-   `package.json` (You would create this with `npm init -y` and it would list Cypress as a dev dependency).

## Test Scenarios

### 1. Login

-   **Description:** Verifies that a user can successfully log into the Dealls platform.
-   **Steps:**
    1.  Open the login page (`/login`).
    2.  Enter a valid email address.
    3.  Enter a valid password.
    4.  Click the login button.
    5.  **Verification:** Ensure the user is redirected to their dashboard or user homepage (e.g., URL includes `/dashboard` or `/homepage`).
-   **File:** `cypress/e2e/login.cy.js`
-   **POM:** `cypress/pages/LoginPage.js`

### 2. Mentoring

-   **Description:** Verifies that a logged-in user can access the mentoring section, view program details, and attempt to join a program.
-   **Steps:**
    1.  Perform login (uses the login functionality).
    2.  Navigate to the mentoring page.
    3.  Click on one of the available mentoring programs.
    4.  **Verification:** Ensure the detail page/section for the selected mentoring program is displayed.
    5.  Attempt to click a "Daftar" (Register) or "Join" button if available.
        -   **Note:** The selectors for mentoring elements are placeholders and may need adjustment based on the actual website structure. The ability to "join" might depend on program availability or other criteria.
-   **File:** `cypress/e2e/mentoring.cy.js`
-   **POMs:** `cypress/pages/LoginPage.js`, `cypress/pages/MentoringPage.js`

## Screenshots (Placeholder)

*(You can add screenshots here if needed, for example, of the Cypress Test Runner or key application states during tests.)*

---

This `README.md` provides a comprehensive guide to understanding, setting up, and running the Cypress tests for Dealls.com.
