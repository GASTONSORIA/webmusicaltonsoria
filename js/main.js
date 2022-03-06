let cancionInedita = prompt("Escribí la palabra secreta para escuchar la canción (viento)");

function adivinanza () { 
while (cancionInedita != "viento") {
    alert("palabra incorrecta, recorda que la palabra es en minúsculas");
    cancionInedita = prompt("Son 6 letras, empieza con v y termina con o");
    if (cancionInedita == "viento") {
        alert("EXCELENTE!!! Aca te comparto la url privada, es un video oculto que solo se accede con esta direccion, copiala y pegala en tu navegador, seleccionandola: https://youtu.be/RzOAqq3bPl0")
    }else{
        cancionInedita = prompt("lo que genera un suspiro, sea de amor o de cansancio :P 6 letras, empieza con v y termina con o")
    }
}   
}

adivinanza () ;

