class ProductsPage {
    // Locators: "Landmarks" on the Products Page
    getProductsTitle() {
        return cy.get('.title'); // Selects the heading with class 'title' (which is 'Products')
    }

    /**
     * Gets the 'Add to Cart' button for a specific product.
     * This uses a more advanced CSS selector to find the button reliably.
     * @param {string} productName - The full name of the product (e.g., 'Sauce Labs Backpack').
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} - The Cypress chainable for the Add to Cart button.
     */
    getAddToCartButton(productName) {
        // Finds the product name, then navigates up to its parent item container,
        // and then finds the 'Add to Cart' button within that specific item.
        return cy.contains('.inventory_item_name', productName)
                 .parents('.inventory_item')
                 .find('.btn_primary');
    }

    /**
     * Gets the 'Remove' button for a specific product that has been added to cart.
     * @param {string} productName - The full name of the product.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} - The Cypress chainable for the Remove button.
     */
    getRemoveButton(productName) {
        return cy.contains('.inventory_item_name', productName)
                 .parents('.inventory_item')
                 .find('.btn_secondary');
    }

    /**
     * Gets the shopping cart icon element.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} - The Cypress chainable for the cart icon.
     */
    getShoppingCartIcon() {
        return cy.get('.shopping_cart_link');
    }

    /**
     * Gets the number of items displayed on the shopping cart badge.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} - The Cypress chainable for the cart badge.
     */
    getShoppingCartBadge() {
        return cy.get('.shopping_cart_badge');
    }

    /**
     * Verifies that the current URL is the inventory page and the 'Products' title is displayed.
     */
    verifyOnProductsPage() {
        cy.url().should('include', '/inventory.html'); // Assert the URL changed
        this.getProductsTitle()
            .should('be.visible') // Assert the title element is visible
            .and('have.text', 'Products'); // Assert its text content is "Products"
    }

    /**
     * Adds a specified product to the cart.
     * @param {string} productName - The name of the product to add.
     */
    addToCart(productName) {
        this.getAddToCartButton(productName).click();
        cy.log(`Added "${productName}" to cart.`);
    }

    /**
     * Removes a specified product from the cart (assuming it's already added).
     * @param {string} productName - The name of the product to remove.
     */
    removeFromCart(productName) {
        this.getRemoveButton(productName).click();
        cy.log(`Removed "${productName}" from cart.`);
    }

    /**
     * Clicks on the shopping cart icon to navigate to the cart page.
     */
    goToCart() {
        this.getShoppingCartIcon().click();
        cy.log('Navigated to shopping cart.');
    }
}

export default new ProductsPage();