class Jugador {
  constructor(x, y) {
    this.x = x; 
    this.y = y;
    this.vel = 5; // velocidad
    this.vidas = 2; // vidas

    // movimiento
    this.moverIzq = false;
    this.moverDer = false;
    this.moverArriba = false;
    this.moverAbajo = false;

    // Control del disparo (para no disparar todo el tiempo)
    this.cooldown = 0; 
  }

//metodos
  actualizar() {
    // Movimiento horizontal
    if (this.moverIzq) this.x -= this.vel; 
    if (this.moverDer) this.x += this.vel;  

    // Movimiento vertical
    if (this.moverArriba) this.y -= this.vel;
    if (this.moverAbajo) this.y += this.vel;

    this.x = constrain(this.x, 20, width - 20); 
    this.y = constrain(this.y, 20, height - 20);
    
   
  

    // tiempo entre disparos
    if (this.cooldown > 0) this.cooldown--;
  }

  mostrar() { 
  if (this.moverIzq || this.moverDer || this.moverArriba || this.moverAbajo) {
      image(corriendo, this.x - 20, this.y - 20, 100, 100);
    } else {
      image(dipper, this.x - 20, this.y - 20, 100, 100);
    }

   
  }

  disparar(lasers) {
    if (this.cooldown === 0) {
    lasers.push(new Laser(this.x + 20, this.y)); 
    this.cooldown = 15; // tiempo entre disparos

    sonidodisparo.play();
    sonidodisparo.setVolume(0.8);
  }
}
  teclaPresionada(k) {
    if (k === "ArrowLeft") this.moverIzq = true;
    if (k === "ArrowRight") this.moverDer = true;
    if (k === "ArrowUp") this.moverArriba = true;
    if (k === "ArrowDown") this.moverAbajo = true;
  }

  teclaSoltada(k) {
    if (k === "ArrowLeft") this.moverIzq = false;
    if (k === "ArrowRight") this.moverDer = false;
    if (k === "ArrowUp") this.moverArriba = false;
    if (k === "ArrowDown") this.moverAbajo = false; //movimientos
  }
}
