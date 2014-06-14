module.exports = function (grunt) {

    grunt.initConfig({

        mochaTest: {
            e2e: {
                options: {
//                    require: [
//                        'test/e2e/globals/globals.js'
//                    ],
                    reporter: 'spec'
                },
                src: ['test/e2e/**/*.js']
            },
            unit: {
                options: {
                    reporter: 'spec'
                },
                src: ['test/unit/*.js']
            }
        },
        express: {
            test: {
                options: {
                    script: 'app.js',
                    port: 6007,
                    //delay: 1000,
                    output: ".*listening.*",
                    node_env: 'testing'
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('e2e', ['express:test','mochaTest:e2e']);
    grunt.registerTask('unit', ['mochaTest:unit']);
    grunt.registerTask('test', ['mochaTest:unit', 'express:test','mochaTest:e2e']);

    grunt.registerTask('default', ['test']);
};