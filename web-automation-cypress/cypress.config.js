const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com/',
    // Ensure this path correctly points to your test files.
    // Default Cypress test file pattern:
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // --- ADD THIS REPORTER CONFIGURATION ---
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome', // Directory where reports will be saved
      overwrite: false, // Set to true if you want to overwrite previous reports, false to generate new ones
      html: true, // Generate HTML report
      json: true, // Generate JSON report
      charts: true, // Include charts in the report
      reportPageTitle: 'SauceDemo Automation Report', // Title for your HTML report page
      embeddedScreenshots: true, // Embed screenshots directly into the HTML report for failures
      inlineAssets: true, // Embed CSS/JS into a single HTML file for easy sharing
    },
    // --- END REPORTER CONFIGURATION ---
  },
});
