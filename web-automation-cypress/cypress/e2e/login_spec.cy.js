// SQA_Engineer_Portfolio/web-automation-cypress/cypress/e2e/login_spec.cy.js
// This is your first automated test script using Cypress.

// 'describe' is a way to group related tests together.
// Think of it as a chapter title for your tests.
describe('SauceDemo Login Functionality', () => {

  // 'it' defines an individual test case. Each 'it' block should test one specific thing.
  it('should allow a standard user to log in successfully', () => {
    // cy.log() is a Cypress command to print messages to the Cypress Test Runner log.
    cy.log('Visiting SauceDemo login page...');
    // cy.visit() command navigates the browser to the specified URL.
    cy.visit('https://www.saucedemo.com/');

    // cy.url() gets the current URL. .should('include', '...') is an assertion
    // to check if the URL contains a specific string. This verifies we landed on the correct site.
    cy.url().should('include', 'saucedemo.com');
    cy.log('Assertion Passed: Successfully navigated to SauceDemo site.');

    cy.log('Entering username...');
    // cy.get('#user-name') selects the HTML element with id="user-name" (the username input field).
    // .should('be.visible') is an assertion that also acts as a smart wait: Cypress waits until the element is visible.
    // .type('standard_user') types the specified text into the input field.
    cy.get('#user-name')
      .should('be.visible')
      .type('standard_user');
    cy.log('Entered username: standard_user');

    cy.log('Entering password...');
    // Selects the password input field by its ID and types the password.
    cy.get('#password')
      .should('be.visible')
      .type('secret_sauce');
    cy.log('Entered password: secret_sauce');

    cy.log('Clicking login button...');
    // Selects the login button by its ID and clicks it.
    cy.get('#login-button')
      .should('be.visible') // Ensure button is visible before clicking
      .click();
    cy.log('Clicked login button.');

    cy.log('Verifying navigation to inventory page...');
    // After clicking login, the URL should change to the products page.
    // We assert that the URL now includes '/inventory.html'.
    cy.url().should('include', '/inventory.html');
    cy.log('Assertion Passed: Successfully navigated to inventory page.');

    cy.log('Verifying "Products" title...');
    // Selects the element with class 'title' (which is the 'Products' heading on the inventory page).
    // .should('be.visible') asserts it's visible.
    // .and('have.text', 'Products') asserts its exact text content.
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Products');
    cy.log('Assertion Passed: "Products" title displayed correctly.');
  });

  it('should allow an invalid login scenario', () => {
    // cy.log() is a Cypress command to print messages to the Cypress Test Runner log.
    cy.log('Visiting SauceDemo login page...');
    // cy.visit() command navigates the browser to the specified URL.
    cy.visit('https://www.saucedemo.com/');

    cy.url().should('include', 'saucedemo.com');
    cy.log('Assertion Passed: Successfully navigated to SauceDemo site.');

    cy.log('Entering username...');
    cy.get('#user-name')
      .should('be.visible')
      .type('standard_user');
    cy.log('Entered username: invalid_user');

    cy.log('Entering password...');
    cy.get('#password')
      .should('be.visible')
      .type('wrong_password');
    cy.log('Entered password: wrong_password');

    cy.log('Clicking login button...');
    cy.get('#login-button')
      .should('be.visible') // Ensure button is visible before clicking
      .click();
    cy.log('Clicked login button.');

    cy.get('[data-test="error"]')
    .should('be.visible')
    .and('include.text', 'Username and password do not match');

    cy.log('Verifying navigation to inventory page...');
    cy.url().should('not.include', '/inventory.html');
    cy.log('Assertion Passed: Inventory page did not show.');
    

  });

  // --- Your Challenge: Add a new test case for an invalid login scenario here! ---
  // This would involve:
  // 1. Visiting the login page.
  // 2. Entering wrong credentials (e.g., 'invalid_user', 'wrong_password').
  // 3. Clicking the login button.
  // 4. Asserting that an error message appears (e.g., cy.get('[data-test="error"]').should('be.visible').and('include.text', 'Username and password do not match')).
  // 5. Asserting that the URL *does not* change to '/inventory.html'.
});