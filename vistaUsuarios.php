<?php

require_once "config.php";
$consulta = "SELECT * FROM notas_alumnos";

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
        <a style="float:left" href="paginaPrincipal.php">Home</a>
    </nav>
    <div class="tabla_estudiantes">
        <div class="tabla_title">Datos de usuario</div>
        <div class="tabla_header">Nombre</div>
        <div class="tabla_header">Calificacion</div>

        <?php
$consulta = $conexion->query($consulta);
while ($row = $consulta->fetch_assoc()) {?>
    <div class="tabla_item"><?php echo $row['nombre'] ?></div>
    <div class="tabla_item"><?php echo $row['calificacion'] ?></div>
    <?php
}
?>
</div>
</body>
</html>
