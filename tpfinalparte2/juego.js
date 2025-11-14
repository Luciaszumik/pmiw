class Juego { //atributos
  constructor() {
    this.estado = "menu"; // "menu" | "jugando" | "gana" | "pierde"
    this.jugador = null; 
    this.lasers = []; 
    this.enemigos = [];//enemigos
    this.puntaje = 0; 
    this.meta = 8; //puntaje a alcanzar 
    this.spawn = 0;
    this.intervalo = 70; // salen enemigos
    
  }
  //metodos
  iniciar() { //se llama con R para reiniciar o con ENTER para iniciar 
    this.jugador = new Jugador(80, height / 2);  
    this.lasers = [];
    this.enemigos = [];
    this.puntaje = 0;
    this.estado = "jugando"; //llama todo en 0, y el estado es jugando
    if (!sonidofondo.isPlaying()) {
      sonidofondo.loop(); 
      sonidofondo.setVolume(0.5);  }
    }

actualizar() {
    if (this.estado !== "jugando") return; //solo aparece el resto de cosas si el estado es jugando, sino no. 

    this.jugador.actualizar(); 

    // disparos
    for (let i = this.lasers.length - 1; i >= 0; i--) { //recorre la lista 
      this.lasers[i].actualizar(); //mueve el laser
      if (this.lasers[i].fuera()) this.lasers.splice(i, 1);  
    }

// enemigos
    this.spawn++; //aumena el contador
    if (this.spawn >= this.intervalo) { // crea nuevo enemigo
      this.enemigos.push(new Enemigo(width + 20, random(60, height - 60))); 
      this.spawn = 0; //reseta contador
    }

    for (let i = this.enemigos.length - 1; i >= 0; i--) {
      let e = this.enemigos[i];
      e.actualizar(); //hace q se muevan 

      // colisión con jugador
      if (e.golpeaJugador(this.jugador)) {
        this.jugador.vidas--; // resta vida
        this.enemigos.splice(i, 1); //se borra el enemigo de los arreglos
        if (this.jugador.vidas <= 0) { 
          this.estado = "pierde"; 
        }
        continue; 
      }

      // colisión con láser
      for (let j = this.lasers.length - 1; j >= 0; j--) {
        if (this.lasers[j].golpeaEnemigo(e)) { 
          this.enemigos.splice(i, 1);
          this.lasers.splice(j, 1);
          this.puntaje++; //suma punto
          break; 
        }
      }

      if (e.fuera()) this.enemigos.splice(i, 1); 
    }

    // Condiciones de victoria y derrota
    if (this.puntaje >= this.meta) this.estado = "gana";
  }

  mostrar() {
    if (this.estado === "menu") {
      this.mostrarMenu();
      return;
    }

    // HUD
    fill(255);
    textSize(14);
    textAlign(LEFT, TOP);
    text("Puntaje: " + this.puntaje, 10, 10);
    text("Vidas: " + this.jugador.vidas, 10, 30); //muestra vidas y puntaje

    // dibujar objetos
    this.jugador.mostrar();
    for (let l of this.lasers) l.mostrar(); 
    for (let e of this.enemigos) e.mostrar(); //dibuja jugador, enemgisoy laseres

    // pantalla de fin
    if (this.estado === "gana" || this.estado === "pierde") {
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255);
      if (this.estado === "gana") text("¡Ganaste! 🎉", width / 2, height / 2 - 20);
      if (this.estado === "pierde") text("Perdiste 😢", width / 2, height / 2 - 20);
      textSize(16);
      text("Presioná R para reiniciar", width / 2, height / 2 + 20);
    }
  }

  mostrarMenu() { //creditos e instrucciones
    fill(255);
    textSize(28);
    text("Laser Tag", width / 2, 80);
    textSize(14);
    text("Objetivo: Alcanzar " + this.meta + " puntos", width / 2, 160);
    text("Si te golpean 2 veces, perdés", width / 2, 180);
    text("Controles: ← → para moverte | ESPACIO para disparar", width / 2, 210);
    text("Presioná ENTER para empezar", width / 2, 240);
    text("Créditos: Alumnas: Rosciolesi Brisa, Szumik Lucia | Basado en Gravity Falls", width / 2, 430);
  }

  teclaPresionada(k) {
    if (this.estado === "menu" && k === "Enter") this.iniciar(); 
    if ((this.estado === "gana" || this.estado === "pierde") && (k === "r" || k === "R")) this.iniciar(); 
    if (this.estado === "jugando") {
      if (k === " ") this.jugador.disparar(this.lasers); 
      this.jugador.teclaPresionada(k);
    }
  }

  teclaSoltada(k) {
    if (this.estado === "jugando") this.jugador.teclaSoltada(k);
  }
}
