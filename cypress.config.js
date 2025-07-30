require("dotenv").config();

const environment = process.env.NODE_ENV || "STG";

const baseUrls = {
  DEV: process.env.DEV_URL,
  STG: process.env.STG_URL
};

module.exports = {
  projectId: '1w1gub',
  e2e: {
    baseUrl: baseUrls[environment],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    ...process.env,
  },
  viewportWidth: 1280,
  viewportHeight: 800,
    retries: {
    runMode: 2,
    openMode: 0,
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  failOnStatusCode: false
};
