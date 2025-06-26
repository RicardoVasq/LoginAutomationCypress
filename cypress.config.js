const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
      baseUrl: 'https://practicetestautomation.com/',
      setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
};
