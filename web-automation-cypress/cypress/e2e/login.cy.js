import LoginPage from "./pages/LoginPage";         // Import your LoginPage "manual"
import ProductsPage from "./pages/ProductsPage";   // Import your ProductsPage "manual"

// 'describe' groups related tests together. Think of it as a chapter in a book.
describe('SauceDemo Login Functionality', () => {

// 'beforeEach' is a hook that runs *before each* individual test ('it' block) in this suite.
// It's great for setting up a clean state for every test, like visiting the login page.
    beforeEach(() => {
        LoginPage.visit();
        cy.log('Visited SauceDemo login page before test.');
    });
    
    // 'it' defines an individual test case. Each 'it' block should test one specific thing.
  it('should allow a standard user to log in successfully',() => {
    cy.log('Executing successful login test...');
    // Use the Page Object method for login, making the test very readable.
    LoginPage.login('standard_user', 'secret_sauce');

    // Assert that we are redirected to the products page and the title is correct.
    ProductsPage.verifyOnProductsPage();
    cy.log('Assertion Passed: Successfully logged in and navigated to inventory page.');
  });

  it('should display an error for invalid credentials',() => {
    cy.log('Executing invalid login test...');
    LoginPage.login('wrong_user', 'wrong_password'); // Invalid credentials

    // Assert that the correct error message is displayed for invalid credentials.
    LoginPage.getLoginErrorMessage()
      .should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service');
    cy.log('Assertion Passed: Correct error message displayed for invalid credentials.');
  });

  it('should display an error for locked out user',() => {
    cy.log('Executing locked out user test...');
    LoginPage.login('locked_out_user', 'secret_sauce');

    // Assert that the correct error message is displayed for a locked out user.
    LoginPage.getLoginErrorMessage()
      .should('be.visible')
      .and('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    cy.log('Assertion Passed: Correct error message displayed for locked out user.');
  });

  it('should display visual glitches for problem user',() => {
    cy.log('Executing problem user test...');
    LoginPage.login('problem_user', 'secret_sauce');

    ProductsPage.verifyOnProductsPage(); // Verify navigation first

    // Now, assert specific visual glitches. For SauceDemo, the product images are broken.
    cy.get('.inventory_item_img img')
      .each(($img) => {
        // Check if the image source is the broken one
        cy.wrap($img).should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
      });
    cy.log('Assertion Passed: Problem user visual glitches verified.');
  });
}); 
