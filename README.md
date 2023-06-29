# Herramientas gulp

Para poder optimizar los recursos que usamos dentro de nuestros proyectos como (imagenes, lotties, gif y audios) procederemos a descargar herramientas que nos permitan esta función.

- gulp
- gulp-cache
- gulp-imagemin
- gulp-replace
- gulp-webp
- imagemin-gifsicle
- lottie-minify
- lottie-web

Dentro del archivo **gulpfile.js** vamos a configurar las funciones necesarias para dar uso a estas herramientas.
La organización de carpetas dentro es muy importante puesto que allí se buscaran los archivos para su optimización. En este ejemplo, se tiene una carpeta **src** y allí dentro estan las demas carpetas como (**audios, img, lotties, gif**) los archivos optimizados se alojaran de la misma forma pero dentro de una carpeta llamada **build**

Dentro del archivo package.json en la sección de scripts se dejo definido para que la actividad corra en las carpetas y se mantenga ejecutando hasta que sea detenida (Ctrl + c), con el fin de que cada vez que descarguemos o coloquemos un archivo nuevo dentro de estas carpetas inmediatamente pueda optimizarlo y alojarlo en **build**

**Es importante que si se clona este directorio se use en la terminal el comando (npm i) para que se instalen las herramientas necesarias junto con la carpeta node_modules**
