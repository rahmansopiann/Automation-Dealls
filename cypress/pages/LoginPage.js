class LoginPage {
  elements = {
    emailInput: () => cy.get('input[name="email"]'), // Assuming 'email' is the name attribute for the email input
    passwordInput: () => cy.get('input[name="password"]'), // Assuming 'password' is the name attribute for the password input
    loginButton: () => cy.get('button[type="submit"]') // Assuming submit button has type="submit"
  };

  visit() {
    cy.visit('/login'); // Assuming '/login' is the path to the login page
  }

  fillEmail(email) {
    this.elements.emailInput().type(email);
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }

  submit() {
    this.elements.loginButton().click();
  }

  // Basic verification, assumes redirection to a page that includes '/dashboard' or '/homepage' in its URL
  verifyLoginSuccess() {
    cy.url().should('match', /\/(dashboard|homepage)/); // Adjust regex if needed
  }
}

export default new LoginPage();
