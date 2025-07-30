describe('Recommendation Job List EndPoint', () => {
    let authToken;

    before(() => {
        // Clear all saved sessions before running the tests
        Cypress.session.clearAllSavedSessions();
        // Generate a token for authentication
        cy.generateToken().then((tokenObj) => {
            // If tokenObj is { token: "..." }, extract the string
            authToken = tokenObj.token || tokenObj;
        });
    });

    it('[GET] Recommendation Job list', function () {
        cy.wrap(null).then(() => {
            cy.request({
                method: 'GET',
                url: `${Cypress.env('API_DEV_URL')}/explore-job/job/recommendation`,
                qs: {
                    page: 1,
                    limit: 5,
                    sortParam: 'mostRelevant',
                    shortBy: 'asc',
                    published: true,
                    status: 'active',
                    prioritizeNonFilledApplicantQuota: true,
                    //externalPlatformApplyUrlSet : null,
                },
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            }).then((response) => {
                // Verify the response status
                expect(response.status).to.eq(200);
                // Verify the response body contains the expected properties
                expect(response.body.data).to.have.property('docs');
                expect(response.body.data).to.have.property('totalDocs');
                expect(response.body.data).to.have.property('page');
                expect(response.body.data).to.have.property('totalPages');
                expect(response.body.data.docs[0]).to.have.property('role');
                expect(response.body.data.docs[0]).to.have.property('company');
                expect(response.body.data.docs[0]).to.have.property('workplaceType');
            });
        });
    });
});