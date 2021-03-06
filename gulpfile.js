//require:相当于<script src="gulp.js"></script>
var gulp = require("gulp");
//var concat = require("gulp-concat");
//var uglify = require("gulp-uglify");
//var rename = require("gulp-rename");
var sass = require("gulp-sass");

let basepath = "D:\\phpStudy\\WWW\\swatch";

//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\swatch"));
});

//复制图片文件
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\swatch\\img"));
});

//复制css文件
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\swatch\\css"));
});
////合并js文件
//gulp.task("concat-js",function(){
//	gulp.src(["js/index.js","js/goodslist.js"])
//	.pipe(concat("common.js"))
//	.pipe(gulp.dest(basepath+"\\js"));
//});
//
//合并并且压缩js文件
//gulp.task("concatanduglify-js",function(){
//	gulp.src(["js/*.js"])
//	.pipe(concat("*.js"))
//	.pipe(uglify())
//	.pipe(gulp.dest(basepath+"\\js"));
//});

//管道：pipe。

//合并并且压缩重命名js文件
//gulp.task("concatanduglifyandrename-js",function(){
//	gulp.src(["js/*.js"])
//	.pipe(concat("*.js"))
//	.pipe(gulp.dest(basepath+"\\js"))
//	.pipe(uglify())
//	.pipe(rename("*.min.js"))
//	.pipe(gulp.dest(basepath+"\\js"));
//});


//复制js
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\swatch\\js"));
});

//复制php
gulp.task("php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\swatch\\php"));
});

//sass的编译
gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest(basepath+"\\css"));
});

gulp.task("build",["copy-html","copy-img","copy-css","js","php","sass"],function(){
	console.log("ok");
});
//监听
gulp.task("watchall",function(){
	//一旦过根目录下任何html文件的内容发生改变，那么就立即执行任务copy-html;
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("php/*.php",["php"]);
	gulp.watch("sass/*.scss",["sass"]);
});
