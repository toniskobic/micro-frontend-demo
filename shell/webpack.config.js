const {
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfe1: "http://localhost:4201/remoteEntry.js",
  },

  // Explicitly share packages:
  shared: share({
    "@angular/core": {
      singleton: true,
      requiredVersion: "^16.2.0",
    },
    "@angular/common": {
      singleton: true,
      requiredVersion: "^16.2.0",
    },
    "@angular/common/http": {
      singleton: true,
      requiredVersion: "^16.2.0",
    },
    "@angular/router": {
      singleton: true,
      requiredVersion: "^16.2.0",
    },
  }),
});
