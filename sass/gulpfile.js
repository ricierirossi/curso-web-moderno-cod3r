const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compilar arquivo scss em css
function buildStyles() {
  return src("shinobi/**/*.scss") // caminho relativo de qualquer arquivo scss (*) passado para src considerando as subpastas (**)
    .pipe(sass())
    .pipe(dest("css"));
}

// vigiar mudanças no arquivo scss e chamar buildStyle
function watchTask() {
  watch(["*shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
