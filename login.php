<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container_login">
        <h1>Bienvenidos</h1>
        <form action="checkuser.php" method="post" name="verificar">
            <input type="text" name="nombre" placeholder="Nombre" id="nombre_usuario" autofocus><br>
            <input type="password" name="contraseña" placeholder="Contraseña" id="contraseña_usuario"><br>
            <input type="submit" value="Ingresar" id="btn_verificar">
        </form>
    </div>
    <script src="main.js"></script>
</body>
</html>
