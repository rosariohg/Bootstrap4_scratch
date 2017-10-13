const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compilar SASS e inyectarlo al browser
gulp.task('sass',function(){
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
});

//Mover archivos JS a src/js
gulp.task('js',function(){
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
		.pipe(gulp.dest("src/js"))
		.pipe(browserSync.stream());

});

//Mirar SASS y SERVER
gulp.task('serve',['sass'], function(){
	//inicializamos nuestro browser
	browserSync.init({
		server: "./src"
	});
	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass']);
	gulp.watch('src/*.html').on('change',browserSync.reload);
});

//Mover folder fonts a src
gulp.task('fonts',function(){
	return gulp.src('node_modules/font-awesome/fonts/*')
		.pipe(gulp.dest('src/fonts'));
});


//Mover font-awesome  a src
gulp.task('fa',function(){
	return gulp.src('node_modules/font-awesome/css/')
		.pipe(gulp.dest('src/fonts'));
});

gulp.task('default',['js','serve','fa','fonts']);