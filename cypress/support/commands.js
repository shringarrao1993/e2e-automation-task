// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a custom command for login --
Cypress.Commands.add(
    "login",
    (username = "qatestcypress123", password = "!123qaTesTcypress456@") => {
    cy.visit(
      "https://github.com/"
    );
    cy.clearCookies();
    cy.contains("div","Sign in").click();
    cy.get("#login_field").click();
    cy.get("#login_field").type(username);
    cy.get("#password").click();
    cy.get("#password").type(password);
    cy.get("input[value='Sign in']").click();
});

// -- This is a custom command for logout --
Cypress.Commands.add(
    "logout", () => {
    cy.get(".name").click();
    cy.contains("button","Sign out").click({ force: true });
        cy.get("input[value='Sign out']").click();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })