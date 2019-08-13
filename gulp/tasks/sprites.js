var gulp = require('gulp'),
svgSprite=require('gulp-svg-sprite'),
rename=require('gulp-rename'),
delt=require('del'),
svg2png=require('gulp-svg2png');

var config = {
	shape:{
		spacing:{
			padding:1
		}

	},
	mode:{
		css:{
			variables:{
				replaceSvgWithPng:function(){
					return function(sprite,render){
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite:'sprite.svg',
			render:{
				css:{
					template: './gulp/templates/sprite.css'
				}
			}

		}
	}
}
gulp.task('beginClean',function(){
	return delt(['./public/compile/sprite','./public/images/sprites']);
});
gulp.task('createSprite',['beginClean'],function() {
	return gulp.src('./public/images/icons/**/*.svg')
	.pipe(svgSprite(config))
	.pipe(gulp.dest('./public/compile/sprite/'));
});

gulp.task('createPngCopy',['createSprite'],function(){
	return gulp.src('./public/compile/sprite/css/*.svg')
	.pipe(svg2png())
	.pipe(gulp.dest('./public/compile/sprite/css'));
});




gulp.task('copySpriteGraphic',['createPngCopy'],function(){
	gulp.src('./public/compile/sprite/css/**/*.{svg,png}')
	.pipe(gulp.dest('./public/images/sprites'))
});




gulp.task('copySpriteCSS',['createSprite'],function() {
	gulp.src('./public/compile/sprite/css/*.css')
	.pipe(rename('_sprite.css'))
	.pipe(gulp.dest('./public/css/modules'));
});
gulp.task('endClean',['copySpriteGraphic','copySpriteCSS'],function(){
	return delt(['./public/compile/sprite'])
});
gulp.task('icons',['beginClean','createSprite','createPngCopy','copySpriteGraphic','copySpriteCSS','endClean']);