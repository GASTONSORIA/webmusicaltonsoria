<?php
$destino= "gastonsoria.18@gmail.com";
$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$locacion = $_POST["locacion"];
$email = $_POST["email"];
$whatsapp = $_POST["whatsapp"];
$evento = $_POST["evento"];
$nombredelevento= $_POST["nombredelevento"];
$asistencia = $_POST["asistencia"];
$tickets= $_POST["tickets"];
$fecha= $_POST["fecha"];
$informacionadicional= $_POST["informacionadicional"];

$contenido = "Nombre: " . $nombre . "\nApellido: " . $apellido . "\nLocacion: " . $locacion . "\nEmail: " . $email . "\nWhatsapp: " . $whatsapp . "\nEvento: " . $evento . "\nNombre: " . $nombre . "\nAsistencia: " . $asistencia . "\nTickets: " . $tickets . "\nFecha: " . $fecha . "\nInformacion: " . $informacionadicional; 

mail($destino, "contacto", $contenido);
header("location:webmusicaltonsoria/index.html");

?>