# Herramientas gulp

Para poder optimizar los recursos que usamos dentro de nuestros proyectos como (imagenes, lotties, gif y audios) procederemos a descargar herramientas que nos permitan esta función. Usamos herramientas de [NPM](https://www.npmjs.com/)

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Dentro del archivo gulpfile.js vamos a configurar las funciones necesarias para dar uso a estas herramientas. La organización de carpetas dentro es muy importante puesto que allí se buscaran los archivos para su optimización. En este ejemplo, se tiene una carpeta src y allí dentro estan las demas carpetas como (audios, img, lotties, gif) los archivos optimizados se alojaran de la misma forma pero dentro de una carpeta llamada build

Dentro del archivo package.json en la sección de scripts se dejo definido para que la actividad corra en las carpetas y se mantenga ejecutando hasta que sea detenida (Ctrl + c), con el fin de que cada vez que descarguemos o coloquemos un archivo nuevo dentro de estas carpetas inmediatamente pueda optimizarlo y alojarlo en build

Es importante que si se clona este directorio se use en la terminal el comando
```
npm install
```
para que se instalen las herramientas necesarias dentro de la carpeta node_modules


### Pre-requisitos 📋

_Realizar un git clone del proyecto_

_Para HTTPS_
```
https://github.com/TatanLion/Tools_Gulp.git
```

### Instalación 🔧

_Se sugiere la instalación de [Git](https://git-scm.com/) y un editor de código de preferencia, en mi caso uso [VsCode](https://code.visualstudio.com/) para poder manipular y observar el proyecto_

## Construido con 🛠️
* JS
* [Gulp](https://gulpjs.com/)
* [Gulp Cache](https://www.npmjs.com/package/gulp-cache)
* [Gulp Imagemin](https://www.npmjs.com/package/imagemin)
* [Gulp Replace](https://www.npmjs.com/package/replace)
* [Gulp Webp](https://www.npmjs.com/package/webp)
* [Gulp GifSicle](https://www.npmjs.com/package/imagemin-gifsicle)
* [Lottie Minify](https://www.npmjs.com/package/lottie-minify)
* [Lottie Web](https://www.npmjs.com/package/lottie-web)

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/TatanLion/Tools_Gulp.git) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Autores ✒️

* **Jonathan Amaya** - *Ing Sistemas - Desarrollador Web* - [TatanLion](https://github.com/TatanLion)

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.

---
⌨️ con ❤️ por [TatanLion](https://github.com/TatanLion) 😊
