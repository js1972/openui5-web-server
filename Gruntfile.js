/*
Gruntfile.js to launch the SDK
Simply execute grunt at the comment line witin the "openui5"
folder. Then open a browser at http://localhost/index.html.

Requires grunt-contrib-connect and grunt-openui5 to be
installed with npm.
*/
module.exports = function(grunt) {
    "use strict";


    // Project configuration.
    grunt.initConfig({
        // Task configurations

        connect: {
            server: {
                options: {
                    port: 8000
                }
            }
        },

        openui5_connect: {
            server: {
                options: {
                    appresources: 'latest',
                    resources: 'latest/resources'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-openui5');


    // Server task
    grunt.registerTask('serve', function() {
        grunt.task.run('openui5_connect:server:keepalive');
    });

    // Default task
    grunt.registerTask('default', [
        'serve'
    ]);
};
