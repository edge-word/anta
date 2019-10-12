const gulp = require("gulp");
const concat = require("gulp-concat");//合并文件
const rename = require("gulp-rename");//重新起名字
const minifycss = require("gulp-minify-css");//压缩css
const uglify = require("gulp-uglify");//合并压缩
const babel = require("gulp-babel");
const es2015Preset = require("babel-preset-es2015");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");//压缩图片



//监听器
gulp.task("watchall",async ()=>{
    //监听html
    gulp.watch("*.html",async ()=>{
        //把当前目录下的所有html文件拷贝至目录：dist
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\anta"));
    });

    // 监听js
    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        // .pipe(babel({presets:[es2015Preset]}))
        // .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\anta\\js"));
    });

    // 监听sass
    gulp.watch("sass/**/*.scss",async ()=>{
        gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\anta\\css"));
    });

    gulp.watch("css/*.css",async ()=>{
        gulp.src("css/index.css")
        .pipe(minifycss())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\anta\\css"));
    })

    gulp.watch("img/**/*",async ()=>{
        gulp.src("img/**/*")
        // .pipe(imagemin())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\project\\anta\\img"));
    });
});