import LoginPage from '../pages/LoginPage';

describe('Login Functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should allow a user to log in with valid credentials', () => {
    // IMPORTANT: Replace with actual test credentials.
    // Using environment variables is a best practice for sensitive data.
    const email = Cypress.env('TEST_EMAIL') || 'testuser@example.com';
    const password = Cypress.env('TEST_PASSWORD') || 'password123';

    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.submit();
    LoginPage.verifyLoginSuccess();
  });

  // Optional: Add a test for login failure
  it('should show an error message with invalid credentials', () => {
    LoginPage.fillEmail('invalid@example.com');
    LoginPage.fillPassword('wrongpassword');
    LoginPage.submit();
    // Placeholder: Add assertion for error message visibility
    // e.g., cy.get('.error-message').should('be.visible').and('contain', 'Invalid credentials');
    // For now, we'll just check that we are still on the login page
    cy.url().should('include', '/login');
  });
});
