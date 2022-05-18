function inicializa() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    tileMap = new Image();
    tileMap.src = 'assets/tilemap.png';
    musica.play();
    //crear antorcha

    ImagenAntorcha = new antorcha(0,0);
    protagonista = new jugador();


    //crear enemigos

    enemigo.push(new malo(3, 3));
    enemigo.push(new malo(5, 8));
    enemigo.push(new malo(7, 7));

    document.addEventListener('keydown', function (tecla) {
        if (tecla.keyCode == 38) {
            protagonista.arriba();
        }

        if (tecla.keyCode == 40) {
            protagonista.abajo();
        }

        if (tecla.keyCode == 37) {
            protagonista.izquierda();
        }

        if (tecla.keyCode == 39) {
            protagonista.derecha();
        }
    });

    setInterval(function () {
        principal();
    }, 1000 / FPS);
}

function borraCanvas() {
    canvas.width = 750;
    canvas.height = 500;
}

function principal() {
    borraCanvas();
    dibujarEscenario();
    ImagenAntorcha.dibuja();
    protagonista.dibuja();

    for (let c = 0; c < enemigo.length; c++) {
        enemigo[c].mueve();
        enemigo[c].dibuja();

    }
}