
//Grunt is just JavaScript running in node, after all...
module.exports = function(grunt) {

grunt.initConfig({
	distFolder: 'dist',
    // You can also set the value of a key as parsed JSON.
    // Allows us to reference properties we declared in package.json.
    pkg: grunt.file.readJSON('node_modules/grunt-jsdoc-plugin/package.json'),

    jsdoc : {
        dist : {
        	src: ['js/ffbrowser.js','js/api/*.js','js/plf/*.js','js/plu/*.js','js/req/*.js'],
            dest: 'doc'
        }
    }
});

grunt.loadNpmTasks('grunt-jsdoc-plugin');
// Register our own custom task alias.
grunt.registerTask('jsdocbuild', ['jsdoc']);
};