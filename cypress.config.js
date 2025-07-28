const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  image: true,
  reporterer: 'mochawesome',
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: false,
  timestamp: "MMDDYYYY_HHmmss",
});
