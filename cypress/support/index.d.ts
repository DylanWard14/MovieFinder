declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to return the movie db api key.
         * @example cy.getApiKey()
         */
        interceptDefaultMovie(): Chainable<Element>;
    }
}
