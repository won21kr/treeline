module.exports = {


  friendlyName: 'New app',


  description: 'Generate a new Sails app in a new directory of the specified name.',


  extendedDescription: '',


  inputs: {

    name: {
      description: 'The name of the new app to generate.',
      example: 'pencil-pals',
      required: true
    }

  },


  exits: {

    error: {
      description: 'Unexpected error occurred.',
    },

    success: {
      description: 'Done.',
    },

  },


  fn: function (inputs,exits) {
    var path = require('path');
    var helperPack = require('../');
    var sailsgen = require('../../node_modules/sails/node_modules/sails-generate');


    var dir = process.cwd();

    // Run the Sails generator
    sailsgen({
      // Use the sails-generate-new generator
      generatorType: 'new',
      // Override the views and backend modules with our copies
      modules: {
        "views": path.resolve(__dirname,"../../node_modules/treeline-generate-views"),
        "backend": path.resolve(__dirname,"../../node_modules/treeline-generate-backend"),
        "sails.io.js": "sails-generate-sails.io.js"
      },
      // Use the package.json from Sails as a reference for which versions of dependencies to
      // add to the new project's package.json
      sailsPackageJSON: require(path.resolve(__dirname, '../../node_modules/sails', "package.json")),
      // Start from a blank package.json for the new app
      packageJson: {
      },
      // Use the current working directory as the root path for generators
      rootPath: dir,
      // Send in the name of the new app to create
      args: [ inputs.name ],
      // Send in the path to the local Sails
      sailsRoot: path.resolve(__dirname, '../../node_modules/sails')
    }, exits);

  },



};
