<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar Users</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="topnav">
        <a href="#">Salir</a>
        <a href="#">Modificar</a>
        <a href="insertarUsuario.php">Insertar</a>
        <a href="vistaUsuarios.php">Notas</a>
        <a style="float:left" href="paginaPrincipal.php">Home</a>
    </nav>
    <form action="accionInsertar.php" method="post" name="insertForm">
        <input type="text" name="nombre" />
        <input type="number" name="calificacion" />
        <input type="submit" value="Agregar" id="btn_agregar" />
    </form>
</body>
</html>
