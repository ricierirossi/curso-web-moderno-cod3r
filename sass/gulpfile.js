const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// compilar arquivo scss em css
function buildStyles() {
  return src("index.scss") // caminho relativo do arquivo scss passado para src
    .pipe(sass())
    .pipe(dest("css"));
}

// vigiar mudanças no arquivo scss e chamar buildStyle
function watchTask() {
  watch(["index.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
