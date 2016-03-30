(function () {
  'use strict';

  /* jshint -W098 */
  // The Package is past automatically as first parameter
  module.exports = function (FudgeA, app, auth, database) {

    app.get('/api/fudgeA/example/anyone', function (req, res, next) {
      res.send('Anyone can access this');
    });

    app.get('/api/fudgeA/example/auth', auth.requiresLogin, function (req, res, next) {
      res.send('Only authenticated users can access this');
    });

    app.get('/api/fudgeA/example/admin', auth.requiresAdmin, function (req, res, next) {
      res.send('Only users with Admin role can access this');
    });

    app.get('/api/fudgeA/example/render', function (req, res, next) {
      FudgeA.render('index', {
        package: 'fudgeA'
      }, function (err, html) {
        //Rendering a view from the Package server/views
        res.send(html);
      });
    });
  };
})();
