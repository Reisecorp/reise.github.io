var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cp = require('child_process'),
	util = require('gulp-util'),
    imagemin = require('gulp-imagemin'),
	browserSync = require('browser-sync'),
	prefix = require('gulp-autoprefixer'),	
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


var paths = {
	sass: './static/css/sass/**',
	css: './static/css/',
	jsIn: './static/js/dev/*.js',
	jsOut: './static/js/',
    imgIn: './static/img/dev/*',
    imgOut: './static/img/',
	siteRoot: '_site'
}

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuilding: '<span style="color: grey">Running:</span> $ jekyll build',
    jekyllBuilt: '<span style="color: grey">Finished </span> $ jekyll build',

};


gulp.task('jekyll-build',function (done) {
    browserSync.notify(messages.jekyllBuilding);
    return cp.spawn( jekyll , ['build','--incremental'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload({stream: true});
});

gulp.task('browser-sync', ['sass', 'js', 'images' , 'jekyll-build'], function() {
    browserSync({
    	files: paths.siteRoot + '/**',
    	port: 4000,
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('images',function(){
    return gulp.src(paths.imgIn)
        .pipe(imagemin())
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest(paths.imgOut))
        .pipe(gulp.dest('_site/static/img'));
});

gulp.task('sass', function () {
    return gulp.src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(concat('main.css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(paths.css))
        .pipe(gulp.dest('_site/static/css'));
});

gulp.task('js',function(){
	gulp.src(paths.jsIn)
    .pipe(concat('main.js'))
    // .pipe(uglify())
	.pipe(browserSync.reload({stream: true}))
	.pipe(gulp.dest(paths.jsOut))
    .pipe(gulp.dest('_site/static/js'));
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.jsIn, ['js']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_destinations/**/*' ], ['jekyll-rebuild']);
});


gulp.task('default',['browser-sync','watch']);
