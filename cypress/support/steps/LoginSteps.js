/* global Given, Then, When */

import LoginPage from '../pageobjects/LoginPage';
const loginPage = new LoginPage;

Given("acess the site",() => {
    loginPage.acessSite();
})

When("enter username or email, and password",() => {
    loginPage.makeLogin();
})

Then("login must be successful",() => {
    loginPage.validateLogin();
})