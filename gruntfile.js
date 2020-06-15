module.exports = function(grunt) {
  const sass = require("node-sass");
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "app/images",
            src: ["**/*.{png,jpg,gif}"],
            dest: "app/images"
          }
        ]
      }
    },

    sass: {
      options: {
        implementation: sass
      },
      dist: {
        files: {
          "dist/css/main.css": "app/scss/main.scss"
        }
      }
    },

    cssmin: {
      build: {
        files: {
          "dist/css/main.min.css": "dist/css/main.css"
        }
      }
    },

    uglify: {
      build: {
        files: {
          "dist/js/game.min.js": "app/js/game.js",
          "dist/js/index.min.js": "app/js/index.js",
          "dist/js/ui.min.js": "app/js/ui.js"          
        }
      }
    },
    watch: {
      css: {
        files: ["**/*.scss"],
        tasks: ["sass", "cssmin"]
      },

      scripts: {
        files: ["**/*.js"],
        tasks: ["uglify"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("imagemin", ["imagemin"]);
  grunt.registerTask("css", ["sass", "cssmin", "watch"]);
  grunt.registerTask("default", ["sass", "cssmin", "uglify", "watch"]);
};