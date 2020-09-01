<?php

require_once "config.php";
/* $mostrar = "SELECT * FROM usuarios"; */

$nombre = $_POST['nombre'];
$contraseña = $_POST['contraseña'];

$consulta = "SELECT * FROM usuarios";
$resultado = $conexion->query($consulta);

while ($row = $resultado->fetch_assoc()) {

    if ($row['nombre'] === $nombre && $row['contraseña'] === $contraseña) {
        header("Location:vistaUsuarios.php");
    } else {
        echo "Usuario o contraseña invalido";
    }
}
