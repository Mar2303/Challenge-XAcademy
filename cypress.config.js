const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 180000, // 120 segundos
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

