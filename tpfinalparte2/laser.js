class Laser {
  constructor(x, y) {
    this.x = x; //pos x
    this.y = y; //pos y
    this.vel = 10; //velocidad
    this.radio = 4; //tamaño
  }

  actualizar() {
    this.x += this.vel; //movimiento
  }

  mostrar() { //dibujo
    stroke(0, 255, 180);
    strokeWeight(3);
    line(this.x - 6, this.y, this.x + 8, this.y);
    noStroke();
    fill(0, 255, 180);
    ellipse(this.x + 10, this.y, this.radio * 1.4);
  }

  fuera() {
    return this.x > width + 10; //detecta cuando esta afuera
  }

  golpeaEnemigo(e) {
    return dist(this.x, this.y, e.x, e.y) < this.radio + e.radio; //detecta colision
  }
}
