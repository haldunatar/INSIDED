module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),

 watch: {
    html: {
        files: ['css/style.css','js/engine.js','img/**/*.{png,jpg}'],
        tasks: ['cssmin', 'uglify', 'imagemin']
    }
},
    
cssmin: {
  minify: {
    expand: true,
    cwd: 'css/',
    src: ['*.css', '!*.min.css'],
    dest: 'css/',
    ext: '.min.css'
  }
},

uglify: {
    build: {
        src: 'js/engine.js',
        dest: 'js/engine.min.js'
    }
},

imagemin:{
  dynamic:{
    files: [{
      expand:true,
      cwd: 'img/',
      src: ['**/*.{png,jpg}'],
      dest: 'img/build'
    }]
  }
}



});

// Load the plugin that provides the task that are being.
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify'); 
grunt.loadNpmTasks('grunt-contrib-imagemin');
 
// Default task(s).
grunt.registerTask('default', ['watch', 'cssmin', 'uglify', 'imagemin']);

};