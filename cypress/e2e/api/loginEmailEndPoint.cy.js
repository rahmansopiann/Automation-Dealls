describe('Login Email EndPoint', () => {
    it('[POST] Login with valid credentials', () => {
        // Make a POST request to the login endpoint
        cy.request({
            method: 'POST',
            url: `${Cypress.env('API_DEV_URL')}/login/email`,
            body: {
                email: Cypress.env("MANTEE_EMAIL"),
                password: Cypress.env("MANTEE_PASSWORD")
            }
        }).then((response) => {
            // Verify the response status
            expect(response.status).to.eq(200);
            // Verify the response body contains the expected properties
            expect(response.body.data).to.have.property('profile');
            expect(response.body.data).to.have.property('role');
            expect(response.body.data).to.have.property('tokenData');
            expect(response.body.data).to.have.property('user');
        });
    });
    it('[POST] Login with invalid email', () => {
        // Make a POST request to the login endpoint with invalid credentials
        cy.request({
            method: 'POST',
            url: `${Cypress.env('API_DEV_URL')}/login/email`,
            body: {
                email: 'invalid@example',
                password: Cypress.env("MANTEE_PASSWORD")
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on 4xx/5xx responses
        }).then((response) => {
            // Verify the response status
            expect(response.status).to.eq(400);
            // Verify the response body contains the expected error message
            expect(response.body.message).to.eq('Bad Request');
        });
    });
    it('[POST] Login with invalid password', () => {
        // Make a POST request to the login endpoint with invalid credentials
        cy.request({
            method: 'POST',
            url: `${Cypress.env('API_DEV_URL')}/login/email`,
            body: {
                email: Cypress.env("MANTEE_EMAIL"),
                password: 'wrongpassword'
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on 4xx/5xx responses
        }).then((response) => {
            // Verify the response status
            expect(response.status).to.eq(403);
            // Verify the response body contains the expected error message
            expect(response.body.message).to.eq('Password WRONG');
        });
    });
});