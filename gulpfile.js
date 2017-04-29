/*
In our gulpfile we have created two tasks,
a) Task bundle, takes "main.jsx" file, which is currently empty, transpils jsx code to plain javascript using "reactify" then stream sources it using "vinyl-source-stream" further creates "main.js" file on the fly in "dist" directory with transpiled js code in it.
b) Task copy,  takes index.html, bootstrap.min.css and style.css files files and copies them to "dist" folder.*/
var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"));
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/main.css"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});