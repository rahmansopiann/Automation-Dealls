import MentoringPage from "../../pages/MentoringPage";
import mentorList from "../../support/mentorList.json";

const email = Cypress.env("MANTEE_EMAIL");
const password = Cypress.env("MANTEE_PASSWORD");
const searchVariable = mentorList[2]; // Use the first mentor from the list

Cypress.session.clearAllSavedSessions();

describe("Mentoring Page Functionality", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.login(email, password);
    cy.wait(3000);
  });

  it("should allow a user to access a mentoring program detail and attempt to join", () => {
    // Pre-condition Mentor should be able to mentoring program
    cy.visit("/");
    MentoringPage.navigateToMentoring();
    cy.wait(3000);
    // Search for a mentor and select the first mentoring program
    MentoringPage.searchMentor(searchVariable);
    cy.url().should("include", `/mentoring?mSearch=${searchVariable}`);
    cy.wait(3000);
    // Assuming you want to click the mentor if found, otherwise click the first mentoring program
    cy.get("body").then(($body) => {
      if ($body.text().includes(searchVariable)) {
        cy.contains(searchVariable).should("be.visible").click();
      } else {
        cy.get("div h4:nth-child(1)").click();
      }
    });
    // Verify that the mentoring detail is open
    MentoringPage.verifyMentoringDetailOpen(searchVariable);
    try {
      MentoringPage.attemptToJoinProgram();
    } catch (error) {
      cy.log("Could not attempt to join the program: " + error.message);
    }
  });
});
