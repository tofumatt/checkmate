/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'checkmate',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      FOURSQUARE_API_DATE: "20130901",
      FOURSQUARE_CLIENT_ID: "C2ACFUDNBSKDNEQ5DL4GP33TVHH1RHBKA3LU0GUPLGBSYMVZ",
      FOURSQUARE_SECRET: "LYB32YTFZKMLHM0H3L2CGR0PX25BONJDSYZOKCJ2U1QDTTOH"
    },

    cordova: {
      rebuildOnChange: false,
      emulate: false
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
