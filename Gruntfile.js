module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            my_target: {
              files: {
                'assets/login.min.js': ['assets/login.js']
              }
            }
          }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
  };