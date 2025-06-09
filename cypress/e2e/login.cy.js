import LoginPage from '../pages/LoginPage';

const email = Cypress.env("MANTEE_EMAIL");
const password = Cypress.env("MANTEE_PASSWORD");

describe('Login Functionality', () => {
  beforeEach(() => {
    LoginPage.visitSignInPage();
  });

  it('should allow a user to log in with valid credentials', () => {
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.clickSignInButton();
    LoginPage.verifySignInSuccess();
  });

  it('should show an error message with invalid credentials', () => {
    LoginPage.fillEmail('invalid@example.com');
    LoginPage.fillPassword('wrongpassword');
    LoginPage.clickSignInButton();
    LoginPage.verifySignInFailure();
  });
});
