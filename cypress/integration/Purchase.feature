Feature: Purchase itens on site

    Scenario: Purchase two t-shirts on site
        Given acess the site with a user and password
        When search for a shirt and select 2 products as per the data provided in parameters
        And Browse the Checkout page and verify that the correct product is added in the cart
        And Enter the Billing Data along with the Login details
        Then Place the order button