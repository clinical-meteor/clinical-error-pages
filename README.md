##clinical:theming

Error pages for healthcare apps:  LoadingPage and PageNotFound and maybe eventually others...

===============================
#### Installation  

````bash
meteor add clinical:error-pages
````

===============================
#### Usage  

Add the ``pageNotFound`` and ``appLoading`` templates to the router config, like so:

````js
Router.configure({
  layoutTemplate: 'appLayout',
  notFoundTemplate: 'pageNotFound',
  loadingTemplate: 'appLoading'
});
````

===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
