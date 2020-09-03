<?php

session_start();

echo "Sesion iniciada $_SESSION[usuario]";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="topnav">
        <a href="#">Salir</a>
        <a href="#">Modificar</a>
        <a href="#">Ingresar</a>
        <a href="vistaUsuarios.php">Notas</a>
        <a style="float:left" href="#">Home</a>
    </nav>
</body>
</html>
