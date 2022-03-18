/// <reference types="Cypress" />

import RegisterElements from '../elements/RegisterElements';
const registerElements = new RegisterElements;
const url = Cypress.config("baseUrl");

class RegisterPage {
    acessSite() {
        cy.visit(url);
    }

    registerLogin() {
        cy.get(registerElements.inputRegister()).
        type('paulrick21');

        cy.get(registerElements.inputEmail()).
        type('pr.atg32@gmail.com');

        cy.get(registerElements.inputPassword()).
        type('Teste@123!!!#$!@$!$!$!');

        cy.get(registerElements.btnRegister()).click();
    }

    validateRegister() {
        cy.contains(registerElements.errorMessage());
    }
}
export default RegisterPage;