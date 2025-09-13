let OpArt;
let c1,c2,fondo;
let tam, cant;
let fondo1;

function preload(){
   OpArt = loadImage("assets/F_28.jpg")
}
function setup () {
   createCanvas(800, 400);
   cant = 40;
   tam = width / cant;
   fondo = 240;
   fondo1 = false;
   invertirColor(fondo1);
}

function draw() {
   background(fondo);
   noStroke();

   push();
   translate(400, 0);
   dibujo(cant, tam, c1, c2);
   pop();

   image(OpArt, 0, 0, 400, 400);
    console.log(mouseX, mouseY, fondo1);
}

function mouseDragged() {
   if (mouseX > width / 2 && dist(600, 200, mouseX, mouseY) <= 200) {
      c1 = combcolores(mouseX, mouseY);
      c2 = combcolores(mouseY, mouseX);
   }
}

function keyPressed() {
   if (key === 'i' || key === 'I') {
   fondo1 = !fondo1;
   invertirColor(fondo1);
}
if (keyCode === RIGHT_ARROW && cant < 80) {
  cant++;
  tam = width / cant;
}
  else if (keyCode === LEFT_ARROW && cant > 4) {
  cant--;
  tam = width / cant;
} 
if (key === ' ') {
  resetValores();
  }
}
//funciones

function dibujo(cantidad, tamano, c11, c22) {
for (let x = 0; x < cantidad; x++) {
 for (let y = 0; y < cantidad; y++) {
  if ((x + y) % 2 === 0) {
   fill(c11);
    circle(x * tamano + tamano / 2, y * tamano + tamano / 2, tamano);
}
 else {
  fill(c22);
  rect(x * tamano, y * tamano, tamano, tamano);
   }
  }
 }
}

function invertirColor(fondoBoN) {
if (fondoBoN) {
fondo = color(0);
c1 = color(240);
c2 = color(240);
} 

else {
fondo = color(240);
c1 = color(0);
c2 = color(0);
}
}

function resetValores() {
cant = 40;
tam = width / cant;
fondo1 = false;
invertirColor(fondo1);
}

function combcolores(x,y) {
let r = map(x, 0, width / 2, 0, 70);
let g = map(y, 0, height, 0, 160);
let b = map(y, 0, height, 50, 147);
return color(r, g, b);
}
