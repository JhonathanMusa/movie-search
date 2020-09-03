<?php

session_start();
$_SESSION['usuario'] = $_POST['nombre'];

require_once "config.php";
/* $mostrar = "SELECT * FROM usuarios"; */

$nombre = $_SESSION['usuario'];
$contraseña = $_POST['contraseña'];

$consulta = "SELECT * FROM usuarios";
$resultado = $conexion->query($consulta);

while ($row = $resultado->fetch_assoc()) {

    if ($row['nombre'] === $nombre && $row['contraseña'] === $contraseña) {
        header("Location:paginaPrincipal.php");
    } else {
        echo "Usuario o contraseña invalido";
    }
}
