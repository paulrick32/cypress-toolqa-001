/* global Given, Then, When */

import PurchasePage from '../pageobjects/PurchasePage';
const purchasePage = new PurchasePage;

Given("acess the site with a user and password",() => {
    purchasePage.loginOnSite();
})

When("search for a shirt and select 2 products as per the data provided in parameters",() => {
    purchasePage.searchItem();
})

And("Browse the Checkout page and verify that the correct product is added in the cart",() => {
    purchasePage.checkTheCheckout();
})

And("Enter the Billing Data along with the Login details",() => {
    purchasePage.enterTheBillingData();
})

Then("Place the order button",() => {
    purchasePage.clickOrderButton();
})