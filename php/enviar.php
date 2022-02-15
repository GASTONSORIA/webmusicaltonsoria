<?php
$destino = "gastonsoria.18@gmail.com";
$nombre = $_POST["nombre"];
$correo = $_POST["email"];

$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo;

mail($destino, "SuscriptorWeb" $contenido)
header(location:"webmusicaltonsoria/index.html")


?>