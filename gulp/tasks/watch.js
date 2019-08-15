var gulp = require('gulp'),
watch=require('gulp-watch')


gulp.task('watch',function(){
	/*browserSync.init({
		proxy: 'http://localhost/',
    	port: 3000,
		notify: false,
		ui: {
    port: 8080
}
	});
	*/


	watch('./public/css/**/*.css',function(){
	 gulp.start('cssInject');
	
	});
	watch('./public/js/**/*.js',function(){
		gulp.start('scriptsRefresh');
		
	});
});

gulp.task('cssInject',['styles'],function() {
	return gulp.src('./public/compile/style/styles.css');
	
});
gulp.task('scriptsRefresh',['scripts'],function(){
	//browserSync.reload();
});
/*gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: './public/index.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});
*/