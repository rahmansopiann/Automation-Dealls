import LoginPage from '../pages/LoginPage';
import MentoringPage from '../pages/MentoringPage';

describe('Mentoring Page Functionality', () => {
  beforeEach(() => {
    // Login before each test in this suite
    LoginPage.visit();
    // IMPORTANT: Replace with actual test credentials.
    const email = Cypress.env('TEST_EMAIL') || 'testuser@example.com';
    const password = Cypress.env('TEST_PASSWORD') || 'password123';
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
    LoginPage.submit();
    LoginPage.verifyLoginSuccess(); // Ensure login was successful
  });

  it('should allow a user to access a mentoring program detail and attempt to join', () => {
    MentoringPage.navigateToMentoring();
    MentoringPage.selectFirstMentoringProgram();
    MentoringPage.verifyMentoringDetailOpen();
    // The attemptToJoinProgram includes its own assertions for button visibility and clickability
    // Depending on the actual site behavior, this might navigate away or show a modal
    // For now, we assume it tries to click if possible.
    // Add a try-catch block if the button might not exist or be interactable in all cases,
    // or if the test should pass even if joining isn't possible (e.g., program full).
    try {
        MentoringPage.attemptToJoinProgram();
        // Add further assertions if needed, e.g., verify URL change or success message
        // cy.url().should('include', '/checkout'); // Example
    } catch (error) {
        cy.log('Could not attempt to join the program: ' + error.message);
        // Optionally, add an assertion here if this state is acceptable
        // For example, if the button is expected to be disabled in some cases.
    }
  });
});
