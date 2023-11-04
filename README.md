# Micro Frontend Demo

**Micro-Frontend Demo** is an Angular project that demonstrates the concept of micro-frontends. It consists of multiple Angular apps, with the first one serving as a shell app and the others being lazily loaded micro-frontends. These micro-frontends are loaded dynamically using the [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation) package that enables seamless usage of Webpack Module Federation with the Angular CLI. 

Notably, this demo project highlights a version mismatch between the shell app, which is an Angular 16 application, and a microfrontend app, which is an Angular 15 application. To address this disparity, the microfrontend with a different Angular version is encapsulated within Web Components. This approach offers several benefits, including abstracting differences between frameworks, simplifying the mounting and unmounting of Web Components, leveraging Shadow DOM for CSS style isolation, and enabling communication through custom events and properties. Explore this project to understand the power of micro-frontends and their flexibility in handling varying Angular versions.

This project consists of multiple Angular apps:

- "shell" Angular 16 app - the shell app that serves as the main entry point for this micro-frontend architecture
- "mfe1" Angular 15 app - a microfrontend shell app that showcases a version mismatch with the shell app
- "mfe2" Angular 14 app - currently not implemented and not loaded into the shell app, can be ignored
