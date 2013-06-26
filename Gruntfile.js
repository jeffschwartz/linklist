module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        pkg    : grunt.file.readJSON( 'package.json' ),
        uglify : {
            prod : {
                options : {
                    report : 'gzip',
                    compress : true
                },
                files   : {
                    'javascripts/dist/linklist.min.js' : ['javascripts/linklist.js']
                }
            }
        }
    } );

    // Load the plugins
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    // Alias Tasks
    grunt.registerTask( 'prod', 'Running Grunt prod', ['uglify:prod'] );

};
