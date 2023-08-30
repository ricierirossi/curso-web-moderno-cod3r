const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss"); // para realizar o purge do css

// compilar arquivo scss em css
function buildStyles() {
  return src("shinobi/**/*.scss") // caminho relativo de qualquer arquivo scss (*) passado para src considerando as subpastas (**)
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] })) // caminho do arquivo a ser avaliado para o purge
    .pipe(dest("css"));
}

// vigiar mudanças no arquivo scss e chamar buildStyle
function watchTask() {
  watch(["*shinobi/**/*.scss", "*.html"], buildStyles); // para purge o css também é necessário passar os arquivos html
}

exports.default = series(buildStyles, watchTask);
