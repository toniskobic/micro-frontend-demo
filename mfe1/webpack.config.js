const {
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    "./Module": "./src/app/modules/demo/demo.module.ts",
  },

  // Explicitly share packages:
  shared: share({
    "@angular/core": {
      singleton: true,
      requiredVersion: "^15.2.0",
    },
    "@angular/common": {
      singleton: true,
      requiredVersion: "^15.2.0",
    },
    "@angular/common/http": {
      singleton: true,
      requiredVersion: "^15.2.0",
    },
    "@angular/router": {
      singleton: true,
      requiredVersion: "^15.2.0",
    },
  }),
});
