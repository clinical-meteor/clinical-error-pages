Package.describe({
  name: 'clinical:error-pages',
  version: '0.1.0',
  summary: 'Error pages for healthcare apps:  LoadingPage and PageNotFound and maybe eventually others...',
  git: 'https://github.com/clinical-meteor/clinical-error-pages',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('templating');
  api.use('session');
  api.use('grove:less@0.1.1');
  api.use('clinical:router@2.0.17');

  api.addFiles('client/components/appLoading/appLoading.js');
  api.addFiles('client/components/appLoading/appLoading.html');
  api.addFiles('client/components/appLoading/appLoading.less');

  api.addFiles('client/components/pageNotFound/pageNotFound.js');
  api.addFiles('client/components/pageNotFound/pageNotFound.html');
  api.addFiles('client/components/pageNotFound/pageNotFound.less');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:error-pages');
});
