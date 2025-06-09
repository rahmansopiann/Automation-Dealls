class MentoringPage {
  elements = {
    // Placeholder: Adjust selector based on actual element for accessing mentoring page
    mentoringLink: () => cy.contains('Mentoring'), // Or a more specific selector
    // Placeholder: Adjust selector for a mentoring program card/link
    firstMentoringProgram: () => cy.get('.mentoring-program-card').first(),
    // Placeholder: Adjust selector for the program detail section/title
    programDetailTitle: () => cy.get('h1.program-title'),
    // Placeholder: Adjust selector for a join/register button on the detail page
    joinButton: () => cy.contains('button', /Daftar|Join/i) // Regex to match 'Daftar' or 'Join', case-insensitive
  };

  navigateToMentoring() {
    // This might involve clicking a link from a homepage or directly visiting a URL
    // For now, let's assume there's a link to click after login
    this.elements.mentoringLink().click();
    cy.url().should('include', '/mentoring'); // Assuming '/mentoring' is part of the URL
  }

  selectFirstMentoringProgram() {
    this.elements.firstMentoringProgram().click();
  }

  verifyMentoringDetailOpen() {
    this.elements.programDetailTitle().should('be.visible');
  }

  attemptToJoinProgram() {
    // This is a "try to click" action. It might not always be possible if, e.g., criteria are not met.
    // We'll check if the button exists and is clickable.
    this.elements.joinButton().should('be.visible').and('be.enabled').click();
    // Further verification could be added here, e.g., checking for a confirmation message or URL change.
  }
}

export default new MentoringPage();
