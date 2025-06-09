# Dealls.com UI Automation with Cypress

This project contains automated UI tests for the Dealls.com website, built using Cypress and JavaScript, following the Page Object Model (POM) design pattern.

## Prerequisites

- Node.js (which includes npm or yarn)
- A code editor (e.g., VS Code)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rahmansopiann/Automation-Dealls.git
    cd Automation-Dealls
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
I use `.env` to manage sensitive data like usernames, passwords and url. You can set them up in a `.env` file or via command-line arguments.

Example `.env`:
```json

valid_email= your_actual_test_email@example.com
valid_password= your_actual_test_password
environments= your_environments_DEV/STG/others

```

## Folder Structure

The project follows a standard Cypress structure with the Page Object Model:

-   `cypress/`
    -   `e2e/`: Contains all test files (spec files, `*.cy.js`).
        -   `test.cy.js`: Tests related to the functionality.
    -   `pages/`: Contains Page Object Model (POM) files. Each file represents a page or a significant component of the application and encapsulates its elements and interactions.
        -   `Test.js`: POM for the page.
    -   `support/`: Contains custom commands and global configurations.
        -   `e2e.js`: Executed before each spec file, good for global before/after hooks or importing custom commands.
        -   `commands.js`: Used to define custom Cypress commands.
-   `.env`: For Credentials
-   `.gitignore`: gitignore folder.
-   `cypress.config.js`: Main Cypress configuration file (base URL, etc.).
-   `README.md`: This file.
-   `package.json` (You would create this with `npm init -y` and it would list Cypress as a dev dependency).

