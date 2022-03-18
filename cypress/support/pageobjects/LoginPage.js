/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements';
const loginElements = new LoginElements;
const url = Cypress.config("baseUrl");

class LoginPage {
    acessSite() {
        cy.visit(url);
    }

    makeLogin() {
        cy.get(loginElements.inputLoginUser()).
        type('pr.atg32@gmail.com');

        cy.get(loginElements.inputLoginPassword()).
        type('Teste@123!!!#$!@$!$!$!');

        cy.get(loginElements.btnLogin()).click();
    }
    validateLogin() {
        cy.contains(loginElements.messageLogin());
    }



}
export default LoginPage;