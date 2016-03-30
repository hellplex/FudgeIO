'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var FudgeA = new Module('fudgeA');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
FudgeA.register(function(app, auth, database, system) {

  //We enable routing. By default the Package Object is passed to the routes
  FudgeA.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  FudgeA.menus.add({
    title: 'fudgeA example page',
    link: 'fudgeA example page',
    roles: ['authenticated','anonymous']
    /*,   hide it for
    menu: 'mymain'*/
  });
  FudgeA.menus.add({
    title: 'menu 1',
    link: 'menu1',
    roles: ['authenticated','anonymous'],
    menu: 'mymain'
  });

  app.set('views', __dirname + '/server/views');
  
  FudgeA.aggregateAsset('css', 'fudgeA.css');

  FudgeA.angularDependencies(['mean.system']);    

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    FudgeA.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    FudgeA.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    FudgeA.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return FudgeA;
});
