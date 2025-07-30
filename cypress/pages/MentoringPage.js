class MentoringPage {
  elements = {
    mentoringLink: () => cy.contains('Mentoring'),
    searchMentor: () => cy.get("#searchMentor"),
    firstMentoringProgram: () => cy.get('.mentoring-program-card').first(),
    programDetailTitle: () => cy.get(':nth-child(2) > .mb-2\.5 > .w-full'),
    joinButton: () => cy.contains('button', /Daftar|Join/i)
  };

  navigateToMentoring() {
    this.elements.mentoringLink().click();
    cy.url().should('include', '/mentoring');
  }

  searchMentor(searchVariable) {
    this.elements.searchMentor().type(searchVariable);
  }

  selectFirstMentoringProgram() {
    this.elements.firstMentoringProgram().click();
  }

  verifyMentoringDetailOpen(searchVariable) {
    cy.contains(searchVariable).should("be.visible");
    cy.contains("Overview").should("be.visible");
    cy.contains("Topik Keahlian").should("be.visible");
  }

  attemptToJoinProgram() {
    cy.contains("Ajukan test").should('be.visible').and('be.enabled').click();
  }
}

export default new MentoringPage();
