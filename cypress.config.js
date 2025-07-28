const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth:  1920,
    viewportHeight: 1080,
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  image: false,
  reporterer: 'mochawesome',
  reportDir: 'cypress/reports',
  overwrite: false,
  html: true,
  json: false,
  timestamp: "MMDDYYYY_HHmmss",
});
