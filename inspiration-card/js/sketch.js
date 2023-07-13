
let colorPalettes = 218; //number of color palettes in csv file
let palette;
let minYchange = 1; //these two ranges determine line overlap and width
let maxYchange = 10;
let layers = 15;
let rotStripe = 0; //rotation of each stripe; try 10 or 90;
// try lines = true with high alph or lines = false with low alph (100)
let lines = true;
let alph = 255; //out of 255
let colRand = false; //true = random color; false = color from palette table
let filling = true;
let colorLines = false; //false for black lines
let sw = 3; //line width
let extraBlack = 0; //1 for some black line and white fills; 0 for neither; -2 for fewer colors;
let extraBlackAlph = 255; //out of 255 - used if extraBlack=1 & lines, filling, colorLines all true, low alph, high sw
let r, g, b;
let table;
let structure; // Variable zum Speichern des div-Elements

let y1, y2, y3, y4, y5, y6;

let y1Array = [];
let y2Array = [];
let y3Array = [];
let y4Array = [];
let y5Array = [];
let y6Array = [];
let rotateArray = [];
let rotateArrayIndex = [];
let index = 0;
let sketchContainer;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  changeCard();
  randomFont();
  let colors = [15];
  // pixelDensity(2);
    sketchContainer = select('#structure'); // Finde das div-Element mit der ID 'sketchContainer'
    
    let canv = createCanvas(sketchContainer.width, sketchContainer.height); // Verwende die Breite und Höhe des div-Elements
    canv.parent('structure'); // Füge das Canvas dem div-Element hinzu

  // canv.mousePressed(setup);
  
  
  
  noLoop();
}

function draw() {
  resizeCanvas(sketchContainer.width, sketchContainer.height);
  drawPattern(false, false);
}

function drawPattern(zoomChange, colorChange) {

  if (lines == true) {
    stroke(0, 0, 0, extraBlackAlph);
    strokeWeight(sw);
  } else {
    noStroke();
  }
  angleMode(DEGREES);
  let end = height / 2 + 500; // where lines stop
  
  if (zoomChange != true) {
    palette = floor(random(colorPalettes));
    colors = table.getRow(palette);
    changeColor(colors.arr, layers, sw, maxYchange);
  }
  if (colorChange != true) {
    rotateArray = [];

    y1Array = [];
    y2Array = [];
    y3Array = [];
    y4Array = [];
    y5Array = [];
    y6Array = [];
  
    for (let i = 0; i < layers; i++) {
      if (i == 0) {
        y1 = -height / 2 - 300;
      } else {
        y1 = -height / 2 + (height / layers) * i;
      }
      // starting height for each layer
      let y2 = y1,
        y3 = y1,
        y4 = y1,
        y5 = y1,
        y6 = y1;
      let rotLayer = random(359); // layer rotation
      console.log(rotLayer);
      rotateArray.push(rotLayer);
      let rotThisStripe = 0;
      // keep going until all the lines are at the bottom
      
      rotateArrayIndex.push(index);
      while (
        (y1 < end) &
        (y2 < end) &
        (y3 < end) &
        (y4 < end) &
        (y5 < end) &
        (y6 < end) &
        (-maxYchange < minYchange)
      ) {
        index++;

        y1 += random(minYchange, maxYchange);
        y2 += random(minYchange, maxYchange);
        y3 += random(minYchange, maxYchange);
        y4 += random(minYchange, maxYchange);
        y5 += random(minYchange, maxYchange);
        y6 += random(minYchange, maxYchange);

        y1Array.push(y1);
        y2Array.push(y2);
        y3Array.push(y3);
        y4Array.push(y4);
        y5Array.push(y5);
        y6Array.push(y6);

        if (colRand == true) {
          r = random(256);
          g = random(256);
          b = random(256);
        } else {
          let col = floor(random(5 + extraBlack));
          r = table.get(palette, col * 3);
          g = table.get(palette, col * 3 + 1);
          b = table.get(palette, col * 3 + 2);
        }
        if (filling == true) {
          fill(r, g, b, alph);
        } else {
          noFill();
        }
        if (colorLines == true) {
          stroke(r, g, b, alph);
        }
        push();
        
        translate(width, height);
        rotThisStripe += rotStripe; // rotating after each stripe
        rotate(rotThisStripe + rotLayer);
        let xStart = -width / 2;
        beginShape();
        curveVertex(xStart - 300, height / 2 + 500);
        curveVertex(xStart - 300, y1);
        curveVertex(xStart + (width / 5) * 1, y2);
        curveVertex(xStart + (width / 5) * 2, y3);
        curveVertex(xStart + (width / 5) * 3, y4);
        curveVertex(xStart + (width / 5) * 4, y5);
        curveVertex(width / 2 + 300, y6);
        curveVertex(width / 2 + 300, height / 2 + 500);
        endShape(CLOSE);
        pop();
      }
    }
  } else {
    console.log("colorChange");
    let y1Length = y1Array.length;

    let rotateIndex = 0;
    let rotThisStripe = 0;

    let angleSwitchIndex = 0;
    for (let i = 0; i < y1Length ; i++) {


      if (i == rotateArrayIndex[angleSwitchIndex]) {
        angleSwitchIndex++;
      }

      /*
      y1 += random(minYchange, maxYchange);
      y2 += random(minYchange, maxYchange);
      y3 += random(minYchange, maxYchange);
      y4 += random(minYchange, maxYchange);
      y5 += random(minYchange, maxYchange);
      y6 += random(minYchange, maxYchange);
      */
      y1 = y1Array[i];
      y2 = y2Array[i];
      y3 = y3Array[i];
      y4 = y4Array[i];
      y5 = y5Array[i];
      y6 = y6Array[i];

      if (colRand == true) {
        r = random(256);
        g = random(256);
        b = random(256);
      } else {
        let col = floor(random(5 + extraBlack));
        r = table.get(palette, col * 3);
        g = table.get(palette, col * 3 + 1);
        b = table.get(palette, col * 3 + 2);
      }
      if (filling == true) {
        fill(r, g, b, alph);
      } else {
        noFill();
      }
      if (colorLines == true) {
        stroke(r, g, b, alph);
      }
      push();
      
      translate(width, height);
      rotThisStripe += rotStripe; // rotating after each stripe
      rotate(rotThisStripe + rotateArray[angleSwitchIndex - 1]);
      console.log(rotateArray[angleSwitchIndex -1]);
      let xStart = -width / 2;
      beginShape();
      curveVertex(xStart - 300, height / 2 + 500);
      curveVertex(xStart - 300, y1);
      curveVertex(xStart + (width / 5) * 1, y2);
      curveVertex(xStart + (width / 5) * 2, y3);
      curveVertex(xStart + (width / 5) * 3, y4);
      curveVertex(xStart + (width / 5) * 4, y5);
      curveVertex(width / 2 + 300, y6);
      curveVertex(width / 2 + 300, height / 2 + 500);
      endShape(CLOSE);
      pop();

      rotateIndex++;
    }
  }
  const canva = document.getElementById("defaultCanvas0");
  // canva.classList.add("w100", "h100")
  canva.style.width = "100%";
  canva.style.height = "100%"; 

  const sruct = document.getElementById("structure");
  sruct.style.width = "100%";
  sruct.style.height = "100%"; 
}


// function keyTyped() {
//   if (key === "c") {
//     changeCard();
//   } else if (key === "z") {
//     minYchange += Math.floor(Math.random() * 10) + 30;
//     maxYchange += Math.floor(Math.random() * 10) + 30;
//     setup();
//   } else if (key === " ") {
//     setup();
//   } else if (key === "r") {
//     const card = document.getElementById("para");
//     const structure = document.getElementById("structure");
//     // Füge die CSS-Klasse für die Animation hinzu
//     card.classList.add("crumpled-card");
  
//     // Warte, bis die Animation abgeschlossen ist
//     setTimeout(() => {
//       // Entferne die CSS-Klasse für die Animation
//       card.classList.remove("crumpled-card");
  
//       // Füge hier den Code hinzu, um die neue Karte anzuzeigen
//       // z.B. ändere den Inhalt des "structure"-Elements oder lade eine neue Karte über AJAX
//       structure.innerHTML = card.innerHTML;
  
//       // Ändere die Schriftart
//       randomFont();
//     }, 1000);
//     // refresh page
//     window.location.reload();
//   }
// }




// function keyPressed() {
//   if (keyCode === "c" || "z") {
//     setup();
//   }
// }