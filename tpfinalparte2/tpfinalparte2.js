//VIDEO: https://youtu.be/rVaLgye-Qjc

let juego; //variable juego
let fondo;
let dipper;
let enemigo;
let corriendo; 
let sonidofondo; 
let sonidodisparo;
let sonidocolision;

function preload(){
  fondo = loadImage ("assets/fondo.jpeg");
dipper = loadImage ("assets/dipper.png");
enemigo = loadImage ("assets/enemigo.png");
corriendo = loadImage ("assets/corriendo.png"); 
sonidocolision = loadSound ("assets/audiocolision.mp3");
sonidofondo = loadSound ("assets/audiofondo.mp3");
sonidodisparo = loadSound ("assets/audiodisparo.mp3");


}



function setup() {

createCanvas(640, 480);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  juego = new Juego();
}


function draw() {
background(25, 25, 40);
  image (fondo,0,0,width,height); 
  juego.actualizar();
  juego.mostrar();
}

function keyPressed() {
  juego.teclaPresionada(key);
}

function keyReleased() {
  juego.teclaSoltada(key);
}
