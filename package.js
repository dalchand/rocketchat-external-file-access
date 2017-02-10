Package.describe({
  name: 'dc4ual:rocketchat-external-file-access',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A package for providing file access tokens for external services eg. facebook messenger',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dalchand/rocketchat-external-file-access.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.3');
  api.use('ecmascript');
  api.use('mongo');
  api.use('webapp');
  
  api.use('rocketchat:file-upload');

  api.addFiles([
    'file-access-tokens.js',
    'file-request.js'
    ], 'server');

  api.export('ExternalFileAccess');

});
