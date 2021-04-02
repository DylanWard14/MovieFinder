// ***************************************************************
// - [#] indicates a test step (e.g. # Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// ***************************************************************

import { getApiKey } from '../../support/helpers';

describe('Search', () => {
    beforeEach(() => {
        // # Intercept the inital movie request and fake the response
        cy.interceptDefaultMovie();

        console.log('API KEY', getApiKey());

        // # Intercept the search request and fake the response
        cy.intercept(
            `https://api.themoviedb.org/3/search/movie?api_key=${getApiKey()}&language=en-US&query=Harry%20Potter%20and%20the&page=1&include_adult=false`,
            {
                fixture: 'search',
            },
        );

        // # Intercept the harry potter movie request and fake the response
        cy.intercept(`https://api.themoviedb.org/3/movie/671?api_key=${getApiKey()}&language=en-US`, {
            fixture: 'movie_harry_potter',
        });
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

        // * Check that the movie title is correct
        cy.get('#movie-title').should('have.text', "Harry Potter and the Philosopher's Stone");
    });
});
