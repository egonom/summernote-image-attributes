var gulp = require('gulp');

// var outputDir = 'assets/summernote';
//
// gulp.task('copy-summernote-image-attributes', function() {
// 	gulp.src('**/*')
// 		.pipe(gulp.dest(outputDir+'/plugin/image-attributes'))
// });

gulp.task('copy-summernote-image-attributes', function() {
	gulp.src('vendor/egonom/summernote-image-attributes/**/*')
		.pipe(gulp.dest('public/assets/vendor/summernote/plugin/image-attributes'))
});

gulp.task('default', ['copy-summernote-image-attributes']);