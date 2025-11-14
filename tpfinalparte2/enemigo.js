class Enemigo { 
  constructor(x, y) {
    this.x = x; //posx
    this.y = y;//posy
    this.radio = 50;//tamaño
    this.vel = random(8,11);
  }

  actualizar() {
    this.x -= this.vel; //movimiento en x
  }

  mostrar() { //dibujado
  push()
  imageMode (CENTER);
   image (enemigo, this.x,this.y , 100, 100); 
   pop();
   
  }

  fuera() { //detecta cuando esta afuera
    return this.x < -this.radio;
  }

  golpeaJugador(j) { 
    return dist(this.x, this.y, j.x, j.y) < this.radio + 36; 
}
  }
