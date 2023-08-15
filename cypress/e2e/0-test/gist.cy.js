context.only("Gist Page", () => {
    before(() => {
        Cypress.Cookies.debug(true);
        cy.viewport(1280, 800);
        cy.login();
        cy.contains("h3", "Create your first project")
          .should("be.visible");
    });

    it("Create a Gist", () => {
        cy.get("#global-create-menu-button").click();
        cy.contains("span", "New gist").click();
        cy.get("input[name='gist[description]']").click();
        cy.get("input[name='gist[description]']").type("QA Gist description");
        cy.get("input.js-gist-filename").click();
        cy.get("input.js-gist-filename").type("qa-gist");
        cy.get("div>pre").last().click();
        cy.get("div>pre").last().type("QA Gist Content");
        cy.contains("button", "Create secret gist").click();
        cy.contains("div", "QA Gist description")
          .should("be.visible");
        cy.contains("#file-qa-gist>div", "qa-gist")
            .should("be.visible");
        cy.contains(".js-file-line", "QA Gist Content")
            .should("be.visible");
    });

    after(() => {
        cy.logout();
        cy.contains("h1", "Let’s build from here")
            .should("be.visible");
    });
});
