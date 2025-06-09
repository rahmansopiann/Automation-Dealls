class LoginPage {
  elements = {
    emailInput: () => cy.get("#basic_email"),
    passwordInput: () => cy.get("#basic_password"),
    signInButton: () => cy.get("button[type='submit']"),
    successMessage: () => cy.get(".ant-message-notice-content"),
  };

  visitSignInPage() {
    cy.visit('/sign-in');
  }

  fillEmail(email) {
    this.elements.emailInput().type(email);
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickSignInButton() {
    this.elements.signInButton().click();
  }

  verifySignInSuccess() {
    this.elements.successMessage().should("be.visible").should("have.text", "Sign in success");
  }

  verifySignInFailure() {
    cy.url().should("include", "/sign-in");
    this.elements.successMessage().should("be.visible").should("contain.text", "Email Not found");
  }
}

export default new LoginPage();
