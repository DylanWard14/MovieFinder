// ***************************************************************
// - [#] indicates a test step (e.g. # Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// ***************************************************************

describe('Search', () => {
    it('Can search and select movie', () => {
        // # Visit the home page
        cy.visit('/');

        // * The search input should be empty
        cy.get('#search').should('have.value', '');

        // # Get the search input field, type a value
        cy.get('#search').type('Harry Potter and the Chamber of Secrets');

        // * The search input should contain the value
        cy.get('#search').should('have.value', 'Harry Potter and the Chamber of Secrets');

        // # Get the search form and submit it
        cy.get('#search_form').submit();

        // * Get the search results list and check it has children
        cy.get('#search_results')
            .children()
            .should('not.be.null');

        // # Get the first child in the search results list and click it
        cy.get('#search_results')
            .first()
            .click();

        // * Check that the url now includes the movies ID
        cy.url().should('include', '672'); // This is the ID for Harry Potter and the Chamber of Secrets
    });
});
