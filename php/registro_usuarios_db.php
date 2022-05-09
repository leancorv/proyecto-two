<?php 
    
    include "conexion_db.php";

    if (isset($_POST['usuario']) && isset($_POST['nombre']) && isset($_POST['password']) && isset($_POST['password2']) && isset($_POST['telefono'])) {
        $usuario = $_POST['usuario'];
        $nombre = $_POST['nombre'];
        $password = $_POST['password'];
        $password2 = $_POST['password2'];
        $correo = $_POST['correo'];
        $telefono = $_POST['telefono'];

        $consulta = "INSERT INTO datos(usuario, nombre, password, password2, correo, telefono) VALUES ( '$usuario', '$nombre', '$password', '$password2', '$correo', '$telefono')";
        $ejecutar = mysqli_query($conexion, $consulta);
    
        mysqli_close($conexion);
    }

?>  
