Pasos para correr el CRUD

1. verificar que las dependecias de node estén instaladas para que no genere error
2. entrar a postman o insomnia para usar nuestro crud
3. usar la siguiente ruta para el GET, POST, DELETE y PUT 'http://localhost:1234/users/'

Cómo usarla

1. Método 'C' create: Hacemos la petición por metodo POST a la url "http://localhost:1234/users/" y le pasamos los siguiente parametros: {
		"name": " texto ",
		"apellido": " texto  ",
		"nit": " texto  ",
		"email": " texto  "
	}
llenamos los datos correspondientes y lo enviamos a nuestra base de datos.

2. Método 'R' read: Hacemos la petición por metodo GET con la url "http://localhost:1234/users/", si queremos leer solo un usuario especificamos el id al final de la url, ejemplo: "http://localhost:1234/users/1" con esto consultaremos el usuario con ID 1.

3. Método 'U' update: Hacemos la petición PUT, Listamos nuestro usuario por ID con la ruta "http://localhost:1234/users/1" y al final de la url el id del usuario que actualizaremos, hacemos los cambios respectivos y lo enviaremos a la base de datos

4. Método 'D' delete: Hacemos la petición DELETE y pasamos la url de nuestro usuario que deseamos eliminiar, ejemplo: "http://localhost:1234/users/1"
