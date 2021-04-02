// ***************************************************************
// - [#] indicates a test step (e.g. # Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// ***************************************************************

describe('Search', () => {
    beforeEach(() => {
        const API_KEY = Cypress.env('REACT_API_KEY');

        // # Intercept the search request and fake the response
        cy.intercept(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Harry Potter and the&page=1&include_adult=false`,
            {
                fixture: 'search',
            },
        );
    });

    it('Can search and select movie', () => {
        // # Visit the home page
        cy.visit('/');

        // * The search input should be empty
        cy.get('#search').should('have.value', '');

        // # Get the search input field, type a value
        cy.get('#search').type('Harry Potter and the');

        // * The search input should contain the value
        cy.get('#search').should('have.value', 'Harry Potter and the');

        // # Get the search form and submit it
        cy.get('#search_form').submit();

        const resultsList = cy.get('#search_results');

        // * Get the search results list and check it has children
        resultsList.children().should('not.be.null');

        // * Get the search results list and check it has the correct amount of children
        resultsList.children().should('have.length', 13);

        // * Get the first result in the list and ensure that it has the correct value
        resultsList.first().should('have.text', "Harry Potter and the Philosopher's Stone");

        // # Get the first child in the search results list and click it
        resultsList.first().click();

        // * Check that the url now includes the movies ID
        cy.url().should('include', '671');
    });
});
