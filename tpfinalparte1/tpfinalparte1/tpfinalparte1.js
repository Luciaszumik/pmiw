let estado;
let pantallas = [];
let imagenactual = 1;
let sillon;
let mapa;
let linterna;
let dialogo = [];
let tv;
let dado;
let puerta;
let cristales;
let arbusto;
let fuentecarta;
let sonidoambiente;
let hover;
let ultsonido = 0;
let click;

function preload () {
  for (let i= 1; i <= 21; i++) {
    pantallas [i] = loadImage ("assets/pantalla" + i + ".png");
  }
  sonidoambiente = loadSound ("assets/sonidofondo.mp3");
  hover = loadSound ("assets/presionado.mp3");
  click = loadSound ("assets/click.mp3");
  fuentecarta =loadFont ("assets/fuentecarta.otf");
  sillon = loadImage ("assets/sillon.png");
  linterna = loadImage ("assets/linterna.png");
  mapa = loadImage ("assets/mapa.png");
  tv = loadImage ("assets/tv.png");
  dado = loadImage ("assets/dado.png");
  puerta = loadImage ("assets/puerta.png");
  arbusto = loadImage ("assets/arbusto.png");
  cristales = loadImage ("assets/cristales.png");
}



function setup() {
hover.setVolume(0.5);
click.setVolume (0.5);
  createCanvas(640, 480);
  estado = 0;
  dialogo = ["En la Cabaña del Misterio, Dipper se encontraba ordenando cajas\nviejas cuando encuentra una extraña hoja amarillenta.", "Los mellizos se dirigen hacia el bosque. El aire se siente mas frio \n y los arboles parecen susurrar. De pronto una piedra con símbolos \n brillantes se enciende.", "Stan lee el papel y empalidece...", "Al seguir el mapa junto a Stan y Soos, llegan a una bóveda secreta \n debajo de la cabaña", "Mabel convence a Dipper de ir con Soos a pasar el rato. Él observa \n el papel y dice... ", "En la Cabaña del Misterio, Dipper se encontraba ordenando cajas \n viejas cuando encuentra una extraña hoja amarillenta."];
}


function draw() {
  background (0);
  cursor (ARROW);
  if (estado == 0) { //pantalla inicio/pantalla 1
    image(pantallas[1], 0, 0, width, height);
    textStyle (NORMAL);
    noStroke();
    if (mouseX>448 && mouseX<448+158 && mouseY> 357 && mouseY < 357+40) {
      fill(170);
    } else {
      fill(255);
    }

    rect (448, 357, 158, 40); //
    textSize (20);
    fill(0);
    text("Iniciar", 500, 385); //iniciar boton

    if (mouseX>448 && mouseX<448+158 && mouseY> 414 && mouseY < 414+40) {
      fill(170);
    } else {
      fill(255);
    }

    rect (448, 414, 158, 40);
    fill (0);
    text ("Créditos", 489, 442);//creditos boton
    if ((mouseX>448 && mouseX<448+158 && mouseY> 357 && mouseY < 357+40)||
      (mouseX>448 && mouseX<448+158 && mouseY> 414 && mouseY < 414+40)) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  } else if (estado == 1) { //creditos pantalla 2
    image(pantallas[2], 0, 0, width, height);
    push();
    fill (255);
    textStyle (ITALIC);
    textSize (20);
    text ("         Autor de la serie: Alex Hirsch\nAlumnas: Szumik Lucia, Rosciolesi Brisa", 130, 372);
    pop();
    textStyle (BOLD);
    fill (255, 0, 255);
    textSize(20);
    text("<< VOLVER", 42, 434);
    if (mouseX>42 && mouseX<120  && mouseY> 415 && mouseY < 434) {
      stroke(255);
    } else {
      noStroke();
    }
  } else if (estado == 2) { //arranca juego pantalla 3
    image(pantallas[3], 0, 0, width, height);
    cajatexto();
    push();
    siguiente();
    pop();
    textFont ("Arial");
    fill (0);
    textSize (15);
    text (dialogo[0], 63, 384, );
  } else if (estado == 3) { //pantalla 4
    image(pantallas[4], 0, 0, width, height);
    siguiente();
    textFont (fuentecarta);
    //textStyle (ITALIC);
    textSize (25);
    fill (0);
    push();
    textAlign (CENTER);
    text ("EL CUADERNO NUMERO 4 \n ESPERA A QUIEN SE ATREVA.\n PERO CADA PISTA ES UN \n RIESGO...", 320, 220);
    pop();
  } else if (estado == 4) { //pantalla 5
    image(pantallas[5], 0, 0, width, height);
    siguiente();
    textStyle (ITALIC);
    textSize (15);
    fill (0);
    push()
      textAlign(CENTER);
    text ("¡Dipper esto es\n claramente el comienzo\n de una aventura! ¿La \n seguimos?", 310, 165);
    pop();
  } else if (estado == 5) { //pantalla 6 tres decisiones
    image(pantallas[6], 0, 0, width, height);
    image (linterna, 350, 258, 55, 30);
    image (mapa, 76, 225, 55, 30);
    comoseguis();

    if (mouseX>325 && mouseX<415 && mouseY> 163 && mouseY < 233) {//coordenadas mouse sobre sillon
let ahora = millis();
if (ahora-ultsonido > 1000) {
    hover.play();
    ultsonido = ahora;
}
   
      fill (0, 150);
      rect (0, 0, 640, 680);
      image (sillon, 325, 163, 90, 70);
      textSize(10);
      fill (255);
      text ("Sentate en el sllon, no hagas\nnada y quedate en casa", 260, 140);
      comoseguis();
    }
    
    else if (mouseX>350 && mouseX<405 && mouseY>258 && mouseY<288) {//coordenadas mouse sobre lintwrna
   let ahora = millis();
if (ahora-ultsonido > 1000) {
    hover.play();
    ultsonido = ahora;
}
      
      fill (0, 150);
      rect (0, 0, 640, 680);
      image (linterna, 350, 258, 55, 30);
      textSize(10);
      fill (255);
      text ("Toma la linterna para ir\nal bosque a investigar", 350, 300 );
      comoseguis();
    } else if (mouseX>76 && mouseX<131 && mouseY>225 && mouseY<255) { //coordenadas mouse sobre mapa
     let ahora = millis();
if (ahora-ultsonido > 1000) {
    hover.play();
    ultsonido = ahora;
}
      fill (0, 150);
      rect (0, 0, 640, 680);
      image (mapa, 76, 225, 55, 30);
      textSize(10);
      fill (255);
      text ("Toma el mapa antiguo y\npidele ayuda a Stan", 76, 255 );
      comoseguis();
    }
  } else if (estado == 6) { //pantalla 7
    image(pantallas[7], 0, 0, width, height);
    cajatexto();
    push();
    siguiente();
    pop();
    fill(0);
    textSize (15);
    text (dialogo[1], 63, 386);
  } else if (estado == 7) { //pantalla 8
    image(pantallas[8], 0, 0, width, height);
    siguiente();
    textStyle (ITALIC);
    textSize (15);
    fill (0);
    push()
      textAlign(CENTER);
    text ("Dipper...¿Seguimos\nesas luces raras?", 348, 275);
    pop();
  } else if (estado == 8) { //pantalla 9
    image(pantallas[9], 0, 0, width, height);
    image (cristales, 330, 5, 190, 317);
    image (arbusto, 420, 296, 224, 149);
    comoseguis();
    if (mouseX>330 && mouseX<330+190 && mouseY> 5 && mouseY < 5+317) { //coordenadas mouse sobre cristales
     let ahora = millis();
if (ahora-ultsonido > 1000) {
    hover.play();
    ultsonido = ahora;
}
      fill (0, 150);
      rect (0, 0, 640, 680);
      image (cristales, 330, 5, 190, 317);
      textSize(10);
      fill (255);
      text ("Seguir las luces", 300, 140);
      comoseguis();
    } else if (mouseX>420 && mouseX<420+224 && mouseY>296 && mouseY<296+149) {//coordenadas mouse sobre arbusto
    let ahora = millis();
if (ahora-ultsonido > 1000) {
    hover.play();
    ultsonido = ahora;
} 
      fill (0, 150);
      rect (0, 0, 640, 680);
      image (arbusto, 420, 296, 224, 149);
      textSize(10);
      fill (255);
      text ("Esconderse\ndetras del arbusto\ny volver a casa", 400, 300 );
      comoseguis();
    }
  } else if (estado == 9) { //pantalla 10
    image(pantallas[10], 0, 0, width, height);
    textStyle (BOLD);
    fill (255, 0, 0);
    textSize(20);
    text("REINICIAR", 270, 434);
    if (mouseX>270 && mouseX<369 && mouseY> 415 && mouseY < 434) {
      stroke(255);
    } else {
      noStroke();
    }
  } else if (estado == 10) { //pantalla 11
    image(pantallas[11], 0, 0, width, height);
    cajatexto();
    push();
    siguiente();
    pop();
    fill(0);
    textSize (15);
    text (dialogo [2], 63, 386);
  } else if (estado == 11) { //Pantalla 12
    image(pantallas[12], 0, 0, width, height);
    push();
    siguiente();
    pop();
    push();
    fill (0);
    textSize (15);
    textAlign(CENTER);
    text ("Escuchen, ese\ncuaderno... no deberian\nbuscarlo. Hay cosas de\n nuestra familia que es\nmejor dejar atras.", 302, 117);
    pop();
  } else if (estado == 12) { //pantalla 13
    image(pantallas[13], 0, 0, width, height);
    push();
    siguiente();
    pop();
    push();
    fill (0);
    textSize (15);
    textAlign(CENTER);
    text ("Pero si esta marcado en\nel mapa, debe ser cool.", 385, 170);
    pop();
  } else if (estado == 13) { //pantalla 14
    image(pantallas[14], 0, 0, width, height);
    // image (puerta, 50 ,77, 150,348);
    image (mapa, 575, 268, 55, 30);
    comoseguis();
    if (mouseX>50 && mouseX<50+150 && mouseY> 77 && mouseY < 77+300) { //coordenadas mouse sobre puerta
    let ahora = millis();
if (ahora-ultsonido > 1000) {
    hover.play();
    ultsonido = ahora;
}
      fill (0, 150);
      rect (0, 0, 640, 680);
      image (puerta, 50, 77, 150, 300);
      textSize(10);
      fill (255);
      text ("Mejor investigar en\n el bosque", 220, 140);
      comoseguis();
    } else if (mouseX>575 && mouseX<575+55 && mouseY>268 && mouseY<268+30) {//coordenadas mouse sobre mapa
let ahora = millis();
if (ahora-ultsonido > 1000) {
    hover.play();
    ultsonido = ahora;
}
     fill (0, 150);
      rect (0, 0, 640, 680);
      image (mapa, 575, 268, 55, 30);
      textSize(10);
      fill (255);
      text ("Seguir el recorrido\ndel mapa junto a\n Stan y Soos", 500, 300 );
      comoseguis();
    }
  } else if (estado == 14) { //pantalla 15
    image(pantallas[15], 0, 0, width, height);
    cajatexto();
    push();
    siguiente();
    pop();
    fill(0);
    textSize (15);
    text(dialogo[3], 63, 386);
  } else if (estado == 15) { //pantalla 16
    image(pantallas[16], 0, 0, width, height);
    push();
    siguiente();
    pop();
    push();
    fill (0);
    textSize (15);
    textAlign(CENTER);
    text ("Les dije...\ndescubrieron mi\nsecreto.", 348, 140);
    pop();
  } else if (estado == 16) { //pntalla 17 ganaste descubriste secreto
    image(pantallas[17], 0, 0, width, height);
    textStyle (BOLD);
    fill (0, 255, 0);
    textSize(20);
    text("REINICIAR", 270, 434);
    if (mouseX>270 && mouseX<369 && mouseY> 415 && mouseY < 434) {
      stroke(255);
    } else {
      noStroke();
    }
  } else if (estado == 17) { //pantalla 18
    image(pantallas[18], 0, 0, width, height);
    cajatexto();
    push();
    siguiente();
    pop();
    fill(0);
    textSize (15);
    text(dialogo[4], 63, 386);
  } else if (estado == 18) { //pantalla 19
    image(pantallas[19], 0, 0, width, height);
    push();
    siguiente();
    pop();
    push();
    fill (0);
    textSize (15);
    textAlign(CENTER);
    text ("¡Oigan esto se parece a\nun juego de rol que\ninventé! Capaz el\ncuaderno no existe pero\nsi lo podemos crear!", 350, 106);
    pop();
  } else if (estado == 19) { //pantalla 20
    image(pantallas[20], 0, 0, width, height);
    comoseguisarriba();
    // image (puerta, 50 ,77, 150,348);
    image (dado, 97, 380, 110, 100);
    if (mouseX>97 && mouseX<97+110 && mouseY> 380 && mouseY < 380+100) { //coordenadas mouse sobre dado
      fill (0, 150);
      rect (0, 0, 640, 680);
      image(dado, 97, 380, 110, 100);
      textSize(10);
      fill (255);
      text ("Seguir el \njuego de Soos", 90, 375);
      comoseguisarriba();
    } else if (mouseX>430 && mouseX<430+180 && mouseY>220 && mouseY<220+240) {//coordenadas mouse sobre tv
      fill (0, 150);
      rect (0, 0, 640, 680);
      image (tv, 430, 220, 180, 240);
      textSize(10);
      fill (255);
      text ("Ignorar todo y\nmirar Tv", 380, 341 );
      comoseguisarriba();
    }
  } else if (estado == 20) {
    image(pantallas[21], 0, 0, width, height);
    textStyle (BOLD);
    fill (0, 255, 0);
    textSize(20);
    text("REINICIAR", 270, 434);
    if (mouseX>270 && mouseX<369 && mouseY> 415 && mouseY < 434) {
      stroke(255);
    } else {
      noStroke();
    }
  }
}







function mousePressed() {
  
  console.log("Mouse X: " + mouseX + ", Mouse Y: " + mouseY);
  //estado++;
  if (!sonidoambiente.isPlaying()) {
    sonidoambiente.loop();
    sonidoambiente.setVolume(0.4); 
  }
  
  if (estado == 0) {//en la pantalla 1
    if (mouseX > 448 && mouseX < 448+158 && mouseY > 357 && mouseY < 357+40) {
      estado = 2; // boton de inicia el juego
      return; //
    }
  }
  if (estado == 0) {//en la pantalla 1
    if (mouseX > 448 && mouseX < 448+158 && mouseY > 414 && mouseY < 414+40) {
      estado = 1; // boton de inicia el juego
      click.play(); 
    }
       return;
  }

  if (estado == 1) {
    if (mouseX>42 && mouseX<120  && mouseY> 415 && mouseY < 434) {
      estado = 0;
    }
    return;
  }


  if (estado == 2) {//pantalla 3
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 3 a 4 con "siguiente"
      estado = 3;
        click.play();
    }
  
    return;
  }
  if (estado == 3) {//pantalla 4
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 4 a 5 con "siguiente"
      estado = 4;
        click.play();
    }
    return;
  }
  if (estado == 4) {//pantalla 5
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 5 a 6 con "siguiente"
      estado = 5;
        click.play();
    }
    return;
  }
  if (estado ==5) {
    if (mouseX>350 && mouseX<405 && mouseY>258 && mouseY<288) { //tocar la linterna
      estado = 6;
    }
    if (mouseX>76 && mouseX<131 && mouseY>225 && mouseY<255) { //tocar el mapa
      estado = 10;
    }
    if (mouseX>325 && mouseX<415 && mouseY> 163 && mouseY < 233) { //tocar el sillon
      estado = 17;
    }
    return;
  }
  if (estado == 6) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 7 a 8  con "siguiente"
      estado = 7;
        click.play();
      
    }
    return;
  }
  if (estado == 7) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 8 a 9 con "siguiente"
      estado = 8;
        click.play();
    }
    return;
  }
  if (estado == 8) {
    if (mouseX>330 && mouseX<330+190 && mouseY> 5 && mouseY < 5+317) { //tocar cristales a perdiste
      estado = 9;
    }
    if (mouseX>420 && mouseX<420+224 && mouseY>296 && mouseY<296+149) {
      estado = 5;
    }
    return;
  }

  if (estado == 9) {
    if (mouseX>270 && mouseX<369 && mouseY> 415 && mouseY < 434) { //reiniciar perdiste
      estado = 0;
        click.play();
    }
    return;
  }


  if (estado ==10) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 11 a 12 con "siguiente"
      estado = 11;
        click.play();
    }
    return;
  }
  if (estado ==11) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 12 a 13 con "siguiente"
      estado = 12;
        click.play();
    }
    return;
  }
  if (estado ==12) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 13 a 14 con "siguiente"
      estado = 13;
        click.play();
    }
    return;
  }

  if (estado ==13) {
    if (mouseX>50 && mouseX<50+150 && mouseY> 77 && mouseY < 77+300) { //pasa de pantalla 14 a 7, vuevle al bosque
      estado = 6;
    }
    if (mouseX>575 && mouseX<575+55 && mouseY>268 && mouseY<268+30) { //sigue el camino a la pantalla 15
      estado = 14;
    }
    return;
  }


  if (estado ==14) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 15 a 16 con "siguiente"
      estado = 15;
        click.play();
    }
    return;
  }

  if (estado ==15) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 15 a 16 con "siguiente"
      estado = 16;
        click.play();
    }
    return;
  }

  if (estado == 16) {
    if (mouseX>270 && mouseX<369 && mouseY> 415 && mouseY < 434) { //reiniciar ganaste descubriste secreto
      estado = 0;
              click.play();

    }
    return;
  }

  if (estado == 17) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 18 a 19 con "siguiente"
      estado = 18;
              click.play();

    }
    return;
  }

  if (estado == 18) {
    if (mouseX > 480 && mouseX < 584 && mouseY > 425 && mouseY < 443) { //pasa de pantalla 15 a 16 con "siguiente"
      estado = 19;
              click.play();

    }
    return;
  }

  if (estado ==19) {
    if (mouseX>97 && mouseX<97+110 && mouseY> 380 && mouseY < 380+100) {
      estado = 20;
              click.play();

    }
    if (mouseX>430 && mouseX<430+180 && mouseY>220 && mouseY<220+240) {
      estado = 9;
              click.play();

    }
    return;
  }

  if (estado == 20) {
    if (mouseX>270 && mouseX<369 && mouseY> 415 && mouseY < 434) { //reiniciar ganaste descubriste secreto
      estado = 0;
              click.play();

    }
    return;
  }
}
