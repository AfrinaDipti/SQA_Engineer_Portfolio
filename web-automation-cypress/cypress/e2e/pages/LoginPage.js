class LoginPage {
    // Locators: These are the "landmarks" on the Login Page
    getUsernameField() {
        return cy.get('#user-name'); // Selects the username input field by its ID
    }
    getPasswordField() {
        return cy.get('#password'); // Selects the password input field by its ID
    }
    getLoginButton() {
        return cy.get('#login-button'); // Selects the login button by its ID
    }
    getErrorMessage() {
        // This is a more robust CSS selector for the error message element
        return cy.get('[data-test="error"]');
    }

    // Methods: These are the "actions" a user can perform on the Login Page

    /**
     * Navigates the browser to the SauceDemo login page.
     * Asserts that the login button is visible, indicating the page has loaded.
     */
    visit() {
        cy.visit('https://www.saucedemo.com/');
        this.getLoginButton().should('be.visible'); // Ensure page is loaded before proceeding
    }

    /**
     * Types the given username into the username input field.
     * @param {string} username - The username to enter.
     */
    enterUsername(username) {
        this.getUsernameField().type(username);
    }

    /**
     * Types the given password into the password input field.
     * @param {string} password - The password to enter.
     */
    enterPassword(password) {
        this.getPasswordField().type(password);
    }

    /**
     * Clicks the login button.
     */
    clickLoginButton() {
        this.getLoginButton().click();
    }

    /**
     * Performs a complete login action by entering username, password, and clicking the login button.
     * @param {string} username - The username for login.
     * @param {string} password - The password for login.
     */
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    /**
     * Gets the error message element for assertions.
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>} - The Cypress chainable for the error message.
     */
    getLoginErrorMessage() {
        return this.getErrorMessage();
    }
}

// Export an instance of the LoginPage class so it can be easily imported and used in test files.
export default new LoginPage();

