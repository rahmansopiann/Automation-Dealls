import LoginPage from '../pages/LoginPage';

const email = Cypress.env("MANTEE_EMAIL");
const password = Cypress.env("MANTEE_PASSWORD");

describe('Login Functionality', () => {
  beforeEach(() => {
    // Visit the login page before each test
    LoginPage.visitSignInPage();
  });

  it('should allow a user to log in with valid credentials', () => {
    // Fill in the login form and submit
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.clickSignInButton();
    // Verify successful login
    LoginPage.verifySignInSuccess();
  });

  it('should show an error message with invalid credentials', () => {
    // Attempt to log in with invalid credentials
    LoginPage.fillEmail('invalid@example.com');
    LoginPage.fillPassword('wrongpassword');
    LoginPage.clickSignInButton();
    // Verify that an error message is displayed
    LoginPage.verifySignInFailure();
  });
});
