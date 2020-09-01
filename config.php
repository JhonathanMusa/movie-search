<?php

// conexion con la base de datos
// parametros

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'escuela_bd';

$conexion = new mysqli($host, $user, $password, $database);

if ($conexion->connect_error) {
    die("Imposible conectar en este momento con la base de datos" . $conexion->connect_error);
}

// Verificacion de la consulta

function mysqlQuery($consulta){
    global $conexion;
    $resultado = $conexion->query($consulta);
    if (!$resultado){
        die("Error fatal");
    } 
    return $resultado;
}