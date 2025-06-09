// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import LoginPage from "../pages/LoginPage";

// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
  cy.session("session user", () => {
    LoginPage.visitSignInPage();
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.clickSignInButton();
    LoginPage.verifySignInSuccess();
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
