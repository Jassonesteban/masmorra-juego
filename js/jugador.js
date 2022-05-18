class jugador {
    constructor() {
        this.x = 1;
        this.y = 1;
        this.color = '#820c01';
        this.llave = false;

        this.dibuja = function () {
            //ctx.fillStyle = this.color;
            //ctx.fillRect(this.x * anchoF, this.y * altoF, anchoF, altoF);
            ctx.drawImage(tileMap, 32, 32, 32, 32, this.x * anchoF, this.y * altoF, anchoF, altoF);
        };

        this.colisionEnemigo = function (x, y) {
            if (this.x == x && this.y == y) {
                this.muerte();
            }
        };

        this.margenes = function (x, y) {
            var colision = false;

            if (escenario[y][x] == 0) {
                colision = true;
            }

            return (colision);
        };

        this.arriba = function () {
            if (this.margenes(this.x, this.y - 1) == false) {
                this.y--;
                this.logicaObjetos();
            }
        };

        this.abajo = function () {
            if (this.margenes(this.x, this.y + 1) == false) {
                this.y++;
                this.logicaObjetos();
            }
        };

        this.izquierda = function () {
            if (this.margenes(this.x - 1, this.y) == false)
                this.x--;
            this.logicaObjetos();
        };

        this.derecha = function () {
            if (this.margenes(this.x + 1, this.y) == false)
                this.x++;
            this.logicaObjetos();
        };

        this.victoria = function () {
            console.log("Has ganado !!!!!");
            this.x = 1;
            this.y = 1;
            this.llave = false;
            escenario[8][3] = 3;
            sonido3.play();
        };


        this.muerte = function () {
            console.log("Has perdido !!!!!");
            sonido1.play();
            this.x = 1;
            this.y = 1;
            this.llave = false;
            escenario[8][3] = 3;
        };

        this.logicaObjetos = function () {
            var objeto = escenario[this.y][this.x];
            //obtiene llave
            if (objeto == 3) {
                this.llave = true;
                escenario[this.y][this.x] = 2;
                console.log('Llave obtenida !!!!!!!');
                sonido2.play();
            }

            //abrir puerta
            if (objeto == 1) {
                if (this.llave == true) {
                    this.victoria();
                }
            } else {
                // console.log('Te falta la llave :o !!!!!!!');
            }
        };

    }
}