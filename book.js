module.exports = { "root": "./stpihkal" };

// Only add piwik if we're building on the CI and deploying
if (process.env.CI) {
  module.exports["plugins"] = ["piwik"];
  module.exports["pluginsConfig"] = {
    "piwik": {
      "URL": "apps.nonpolynomial.com/piwik/",
      "siteId": 8
    }
  };
}
