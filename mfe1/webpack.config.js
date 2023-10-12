const {
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");


module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    './web-components': './src/bootstrap.ts',
  },

  // Explicitly share packages:
  shared: share({
    "@angular/core": {
      requiredVersion: "auto",
    },
    "@angular/common": {
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      requiredVersion: "auto",
    },
    "@angular/router": {
      requiredVersion: "auto",
    },
    "useless-lib": {
      requiredVersion: "auto"
    }
  }),
});
