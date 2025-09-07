# Sauce Labs Demo - Cypress Automation Framework

This repository contains a test automation framework built with **Cypress** and structured using the **Page Object Model (POM)**. It demonstrates best practices for UI test automation by running tests against the [Sauce Labs demo website](https://www.saucedemo.com/).

The primary goal of this project is to showcase skills in modern web automation, framework design, and reporting.



---

## 🚀 Tech Stack

* **Test Runner & Assertion Library:** [Cypress](https://www.cypress.io/)
* **Programming Language:** JavaScript
* **Design Pattern:** Page Object Model (POM)
* **CI/CD Integration:** GitHub Actions (Example)
* **Reporting:** Mochawesome

---

## 🏗️ Framework Structure (Page Object Model)

This framework uses the **Page Object Model (POM)**, a design pattern that enhances test maintenance and reduces code duplication. Each page in the web application has a corresponding "page class" in the framework.

* **`cypress/pages/`**: This directory contains the page objects.
    * `LoginPage.js`: Encapsulates all selectors and methods related to the Login Page (e.g., `enterUsername()`, `enterPassword()`, `clickLoginButton()`).
    * `ProductsPage.js`: Encapsulates all selectors and methods related to the Products Page (e.g., `verifyTitle()`, `isShoppingCartVisible()`).

* **`cypress/e2e/`**: This directory contains the actual test files (specs).
    * `login.cy.js`: The test script imports methods from the page objects to perform actions and assertions, keeping the test logic clean and readable.

This separation of concerns makes the tests more robust. If a UI selector changes, we only need to update it in one place (the corresponding page object) instead of in every single test file.

---

## ⚙️ How to Run the Tests

Follow these steps to run the tests on your local machine.

### **Prerequisites**
* [Node.js](https://nodejs.org/) installed
* [Git](https://git-scm.com/) installed

### **1. Clone & Install**

First, clone the repository and install the necessary NPM dependencies.

```bash
# Clone the repository
git clone [https://github.com/your-username/SQA_Engineer_Portfolio.git](https://github.com/your-username/SQA_Engineer_Portfolio.git)

# Navigate to the project directory
cd SQA_Engineer_Portfolio

# Install dependencies
npm install