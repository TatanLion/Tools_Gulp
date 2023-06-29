const {src, dest, watch, parallel} = require('gulp');
const imagemin = require('gulp-imagemin');
const gifsicle = require('imagemin-gifsicle');
const cache = require('gulp-cache')
const webp = require('gulp-webp');
const gulp = require('gulp');
const lottie = require('lottie-web');
const replace = require('gulp-replace');

function versionWebp(done){
    const opciones = {
        quality: 50
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}

function minifyGifs() {
    return gulp.src('src/gifs/*.gif')
      .pipe(imagemin([
        gifsicle({
          optimizationLevel: 3, // nivel de optimización (0-3)
          interlaced: true, // entrelazado
          colors: 64 // número máximo de colores
        })
    ]))
    .pipe(gulp.dest('build/gifs'));
}

function minifyLotties() {
    return gulp.src('src/lotties/*.json')  // Ruta de los archivos Lottie
      .pipe(replace(/"d":"[^"]+"/g, function(match) {
        return JSON.stringify(lottie.optimize(JSON.parse(match.substring(5))));
      }))
      .pipe(gulp.dest('build/lotties'));  // Ruta de salida para los archivos minificados
}

function watchFiles(){
    watch('src/img/**/*.{png,jpg}', versionWebp);
    watch('src/img/**/*.{png,jpg}', imagenes);
    watch('src/gifs/*.gif', minifyGifs);
    watch('src/lotties/*.json', minifyLotties);
}

exports.minifyGifs = minifyGifs;
exports.versionWebp = versionWebp;
exports.imagenes = imagenes;
exports.dev = parallel(imagenes, versionWebp, minifyGifs, minifyLotties, watchFiles);