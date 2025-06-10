import LoginPage from '../pages/LoginPage';
import MentoringPage from '../pages/MentoringPage';
import mentorList from '../support/mentorList.json';

const email = Cypress.env("MANTEE_EMAIL");
const password = Cypress.env("MANTEE_PASSWORD");
const searchVariable = mentorList[1];

Cypress.session.clearAllSavedSessions();

describe('Mentoring Page Functionality', () => {
  beforeEach(() => {
    cy.login(email, password);
    cy.wait(3000);
  });

  it('should allow a user to access a mentoring program detail and attempt to join', () => {
    // Pre-condition Mentor should be able to mentoring program
    cy.visit('/');
    MentoringPage.navigateToMentoring();
    cy.wait(3000);
    MentoringPage.searchMentor(searchVariable);
    cy.contains(searchVariable).click();
    MentoringPage.verifyMentoringDetailOpen(searchVariable);
    try {
        MentoringPage.attemptToJoinProgram();
    } catch (error) {
        cy.log('Could not attempt to join the program: ' + error.message);
    }
  });
});
