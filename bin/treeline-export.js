#!/usr/bin/env node


require('../standalone/build-script')({


  friendlyName: 'Export',


  description: 'Export a machinepack from Treeline into a folder of code on this computer.',


  inputs: {

    destination: {
      description: 'Absolute path where the machinepack will be exported.',
      extendedDescription: 'Defaults to the machinepack\'s name (lowercased) resolved from the current working directory.  For example, if you\'ve cd\'d into your Desktop and you\'re exporting a machinepack with name "Foo", then this might default to "/Users/mikermcneil/Desktop/foo.',
      example: '/Users/mikermcneil/Desktop/foo'
    }
  },


  exits: {

    error: {
      description: 'Unexpected error occurred.'
    },

    notLoggedIn: {
      description: 'This computer is not currently logged in to Treeline.'
    },

    alreadyExists: {
      description: 'A file or folder with the same name as this machinepack already exists in the current working directory.'
    },

    success: {
      description: 'Done.'
    },

  },


  fn: function (inputs, exits){

    var thisPack = require('../');

    thisPack.readKeychain().exec({
      error: exits.error,
      doesNotExist: exits.notLoggedIn,
      success: function (user){

        // Fetch list of machinepacks
        // TODO

        // Prompt user to choose the machinepack to export
        // TODO

        var packName = 'Foo';

        // Check to see whether a file/folder already exists in cwd
        // with the same name as the machinepack (all lowercased).
        // If so, let the user know what happened.
        // TODO

        // Fetch metadata and machine code for the pack
        // TODO

        // Generate the pack folder and machines (as well as package.json and other files)
        // TODO

        return exits.success(packName);
      }
    });
  }


}, {

  success: function (packName) {
    var chalk = require('chalk');
    console.log('Exported '+chalk.cyan(packName)+ ' successfully.');
  },

  notLoggedIn: function () {
    var chalk = require('chalk');
    console.log('This computer is '+chalk.yellow('not logged in')+' to Treeline.');
  },

});