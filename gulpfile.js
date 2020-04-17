const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cssImport = require('gulp-cssimport');
const {watch} = require("gulp");

/* responsável por jogar o html no public */
function base() {

    return src('src/templates/*.html')
        .pipe(dest('public/'));

}

function javascript() {

    return src('src/js/*.js')
        .pipe(babel({
            presets: [ '@babel/env' ]
        }))
        .pipe(minifyJs())
        .pipe(rename({extname:'.min.js'}))
        .pipe(dest('public/assets/js'));

}

function css() {

    return src('src/css/*.css')
        /* primeiro eu junto os arquivos para depois rodar o sass nesse arquivo unificado */
        .pipe(cssImport())
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename({extname:'.min.css'}))
        .pipe(dest('public/assets/css/'))

}

exports.default = parallel(base, javascript, css)