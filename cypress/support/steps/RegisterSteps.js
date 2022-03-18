/* global Given, Then, When */

import RegisterPage from '../pageobjects/RegisterPage';
const registerPage = new RegisterPage;

Given("acess the site",() => {
    registerPage.acessSite();
})

When("Enter username, email and password",() => {
    registerPage.registerLogin();
})

Then("registration must be successful",() => {
    registerPage.validateRegister();
})