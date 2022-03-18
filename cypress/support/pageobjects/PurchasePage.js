/// <reference types="Cypress" />
import PurchaseElements from '../elements/PurchaseElements';
import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements;
const purchaseElements = new PurchaseElements;
const url = Cypress.config("baseUrl");

class PurchasePage {
    loginOnSite() {
        cy.visit(url);

        cy.get(loginElements.inputLoginUser()).
        type('pr.atg32@gmail.com');

        cy.get(loginElements.inputLoginPassword()).
        type('Teste@123!!!#$!@$!$!$!');

        cy.get(loginElements.btnLogin()).click();
    }
    searchItem() {
        cy.get(purchaseElements.btnSearch()).click();
        cy.get(purchaseElements.inputSearch()).type('t-shirt').type('{enter}');
        cy.get(purchaseElements.colorOption()).select('black').should('have.value', 'black');
        cy.get(purchaseElements.sizeOption()).select('32').should('have.value', '32');
        cy.get(purchaseElements.btnIncrease()).click();
        cy.get(purchaseElements.btnAddToCart()).click();
        cy.get(purchaseElements.btnViewCart()).click();
        cy.get(purchaseElements.btnProceedToCheckout()).click();
    }
    checkTheCheckout() {
        cy.contains(purchaseElements.textCheckout());
        cy.clearLocalStorage();
    }
    enterTheBillingData() {
        cy.get(purchaseElements.inputBillingFirstName()).type('Paulo Ricardo');
        cy.get(purchaseElements.inputBillingLastName()).type('Pereira');
        cy.get(purchaseElements.inputCompanyName()).type('Test Company');
        cy.get(purchaseElements.countrySelect()).click();
        cy.get(purchaseElements.countryName()).type('Brazil').should('have.value', 'Brazil').type('{enter}');
        cy.get(purchaseElements.inputAddress()).type('Avenida Brasil, 489');
        cy.get(purchaseElements.inputAddressDetail()).type('Close to a nice garden.');
        cy.get(purchaseElements.inputCityName()).type('Porto Alegre');
        cy.get(purchaseElements.stateSelect()).click();
        cy.get(purchaseElements.stateSelect()).type('Rio Grande do Sul').click();
        cy.get(purchaseElements.zipCode()).type('91750-210');
        cy.get(purchaseElements.phoneNumber()).type('51-9999-9999');
        cy.get(purchaseElements.billingEmail()).should('have.value', 'pr.atg32@gmail.com');
        cy.get(purchaseElements.orderComments()).type('Ordem Comments!!');
        cy.get(purchaseElements.terms()).click();

        // cy.get(purchaseElements.inputBillingFirstName()).clear();
        // cy.get(purchaseElements.inputBillingLastName()).clear();
        // cy.get(purchaseElements.inputCompanyName()).clear();
        // cy.get(purchaseElements.inputAddress()).clear()
        // cy.get(purchaseElements.inputAddressDetail()).clear()
        // cy.get(purchaseElements.inputCityName()).clear()
        // cy.get(purchaseElements.zipCode()).clear();
        // cy.get(purchaseElements.phoneNumber()).clear();
        // cy.get(purchaseElements.orderComments()).clear();
    }

    clickOrderButton() {
        cy.get(purchaseElements.btnPlaceOrder()).click();
    }
}

export default PurchasePage;