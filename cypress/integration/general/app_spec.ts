// ***************************************************************
// - [#] indicates a test step (e.g. # Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// ***************************************************************

describe('Application', () => {
    beforeEach(() => {
        // # Intercept the movie request and fake the response
        cy.interceptDefaultMovie();
    });

    it('Loads page correctly', () => {
        // # Visit the home page
        cy.visit('/');

        // * Check the url contains the default movie ID
        cy.url().should('include', 11);

        // * Check that the movie title is correct
        cy.get('#movie-title').should('have.text', 'Star Wars');
    });
});
