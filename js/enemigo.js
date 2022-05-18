class malo {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.direccion = Math.floor(Math.random() * 4);

        this.retraso = 50;
        this.fotograma = 0;


        this.dibuja = function () {
            ctx.drawImage(tileMap, 0, 32, 32, 32, this.x * anchoF, this.y * altoF, anchoF, altoF);
        };

        this.compruebaColision = function (x, y) {
            var colisiona = false;

            if (escenario[y][x] == 0) {
                colisiona = true;
            }

            return colisiona;
        };

        this.mueve = function () {

            protagonista.colisionEnemigo(this.x, this.y);



            if (this.contador < this.retraso) {
                this.contador++;
            } else {
                this.contador = 0;
                //arriba
                if (this.direccion == 0) {
                    if (this.compruebaColision(this.x, this.y - 1) == false) {
                        this.y--;
                    } else {
                        this.direccion = Math.floor(Math.random() * 4);
                    }
                }

                //abajo 
                if (this.direccion == 1) {
                    if (this.compruebaColision(this.x, this.y + 1) == false) {
                        this.y++;
                    } else {
                        this.direccion = Math.floor(Math.random() * 4);
                    }
                }

                //izquierda 
                if (this.direccion == 2) {
                    if (this.compruebaColision(this.x - 1, this.y) == false) {
                        this.x--;
                    } else {
                        this.direccion = Math.floor(Math.random() * 4);
                    }
                }

                //derecha 
                if (this.direccion == 3) {
                    if (this.compruebaColision(this.x + 1, this.y) == false) {
                        this.x++;
                    } else {
                        this.direccion = Math.floor(Math.random() * 4);
                    }
                }
            }
        };
    }
}