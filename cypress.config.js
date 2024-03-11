const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  //realiza el # de intentos si la prueba falla
  // retries: 1,
  //desactivar el reporte de video
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
