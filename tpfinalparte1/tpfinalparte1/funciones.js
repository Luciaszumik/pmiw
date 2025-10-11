function cajatexto (x=40, y=352, ancho=560, alto=100, color=255) {
  fill (color);
  rect (x,y,ancho,alto);}
  
function siguiente (){
  textFont("Arial");
  textStyle(BOLD); 
  textSize (15);
      fill (0);
  if (mouseX>472 && mouseX<472+114 && mouseY> 428 && mouseY < 428+17) {
      cursor(HAND);
      fill(255,255,0);
    } else {
      cursor(ARROW);
    }

  text ("SIGUIENTE >>", 479,440); 
  
 }
  


  function comoseguisarriba(){
    fill (255)
    rect (79,79,501,55);
    push();
    textSize (25);
    fill (0);
    textStyle (BOLD);
    text ("¿QUÉ QUERES HACER?", 180,107);
    pop();
    textSize (15);
    fill (0);
    text ("(busca con el mouse las distintas opciones)", 183,125);
  }
  
  
  
  function comoseguis (){
    let x=79
    let y= 389;
    let ancho= 501;
    let alto = 55;
    
    fill (255)
    rect (x,y,ancho,alto);
    push();
    textSize (25);
    fill (0);
    textStyle (BOLD);
    text ("¿QUÉ QUERES HACER?", 180,417);
    pop();
    textSize (15);
    fill (0);
    text ("(busca con el mouse las distintas opciones)", 183, 435);
  }
    
    
