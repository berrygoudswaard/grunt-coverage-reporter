/*
 * grunt-coverage-reporter
 * https://github.com/berrygoudswaard/grunt-coverage-reporter
 *
 * Copyright (c) 2015 Berry Goudswaard
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('coverage_reporter', 'Prints the coverage, so that GitLab can used it.', function() {
      var content = grunt.file.read(this.data.file);
      var lines = content.split("\n");
      var re = new RegExp(".*(Statements|Lines|Functions).*: ([0-9\.]+)");
      var sum = 0;
      var count = 0;

      for (var i in lines) {
          var line = lines[i];
          var matches = line.match(re);
          if (matches) {
              count++;
              sum += parseFloat(matches[2]);
          }
      }

      var coverage = sum/count;
      console.log(coverage + '% covered.');
  });

};
