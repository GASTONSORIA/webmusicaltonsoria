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

//********************************* */ 1er pre-entrega final ****************************************

//CONSTRUCTOR Y OBJETOS

class Canción{
    constructor(nombre, duración, género) {
        this.nombre = nombre;
        this.duración = duración;
        this.género = género;
    }
    información(){
        console.log("Nombre:" + this.nombre, "\n Duración: " + this.duración, + "\n género: ", "\n Género: ", this.género);
    }
}
const tantasVeces = new Canción("Tantas veces", "3.21", "Reggae fusión Pop");
tantasVeces.información();

const soloViento = new Canción("Solo viento", "4.00", "Reggae fusión Jazz"); 
soloViento.información();

const contradicción = new Canción("Contradicción", "5.00", "Indie Folk");
contradicción.información();


// ARRAYS Y FILTRADOS



const demos = [
    { nombre: 'Tantas veces', duración: 3, género: 'Reggae fusión Pop'},
    { nombre: 'Solo viento', duración: 4, género: 'Reggae fusión Jazz' },
    { nombre: 'Contradicción', duración: 4, género: 'Indie Folk' }
]

const playlist1 = demos.reduce((acc, el) => acc + el.duración, 0)
alert("¿Tenes unos " + playlist1 + " minutos para desenchufarte y escuchar con auriculares? ¡Dale play a la primer nota de voz!") // 12 minutos


