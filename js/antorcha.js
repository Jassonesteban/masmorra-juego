class antorcha {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.retraso = 10;
        this.contador = 0;
        this.fotograma = 0;

        this.cambiaFotograma = function () {
            if (this.fotograma < 3) {
                this.fotograma++;
            } else {
                this.fotograma = 0;
            }
        };

        this.dibuja = function () {
            if (this.contador < this.retraso) {
                this.contador++;
            } else {
                this.contador = 0;
                this.cambiaFotograma();
            }
            ctx.drawImage(tileMap, this.fotograma * 32, 64, 32, 32, anchoF * x, altoF * y, anchoF, altoF);
        };
    }
}