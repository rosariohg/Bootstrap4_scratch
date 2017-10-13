1. Crear una carpeta
2. En consola: npm init
3. Consola: 
	npm install bootstrap@4.0.0-beta font-awesome jquery popper.js --save
4. Instalamos GULP: 
	npm install gulp gulp-sass browser-sync --save-dev
	npm install -g gulp-cli
5. Creamos la carpeta: src, dentro de esta scss y dentro un archivo style.scss
6. En la carpeta raíz creamos un archivo: gulpfile.js
7. Luego de configurar gulpfile.js en consola: gulp
	Realizará cada tarea declarada
8. Creamos un archivo dentro src "index.html"
9. Copiamos lo siguiente <!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-sacle=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Bootstrap</title>
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/style.css">
</head>
<body>

	<h1>Bootstrap 4</h1>

	<script src="js/jquery.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
</body>
</html>
10. En el archivo package.json en "scripts":[
	"start":gulp
]
