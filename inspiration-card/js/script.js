let arr = ["flex-row", "flex-row-reverse", "flex-column", "flex-column-reverse"];
let randFont;

window.onload = function() {
  init();
  calculateDate();
};

function init() {
  const col1 = document.getElementById("col1");
  const col2 = document.getElementById("col2");
  const col3 = document.getElementById("col3");
  const col4 = document.getElementById("col4");
  const col5 = document.getElementById("col5");
  const layers = document.getElementById("layers");

  const cardTitle = document.getElementById("cardTitle");
  const title = generateTitle(); // Funktion zum Generieren des Titels
  cardTitle.textContent = title;

  const version = document.querySelector("#version h5");
  version.textContent = "N." + generateVersionNumber().toString().padStart(3, "0");

  calculateDate(); // Datum berechnen und anzeigen
}

function changeCard() {

  const canva = document.getElementById("defaultCanvas0");
  canva.style.width = "100%";
  canva.style.height = "100%";
  const card = document.getElementById("para");
  let randomNum = Math.floor(Math.random() * arr.length);
  const cardContainer = document.querySelector(".card-container");

  for(let i = 0; i < arr.length; i++) {
    if(card.classList.contains(arr[i])) {
      card.classList.remove(arr[i]);
    }
  }
  card.classList.add(arr[randomNum]);
  
  

  const palette = document.getElementById("palette");

  if (card.classList.contains("flex-row") || card.classList.contains("flex-row-reverse")) {
    for(let i = 0; i < arr.length; i++) {
      if (palette.classList.contains(arr[i])) {
        palette.classList.remove(arr[i]);
        cardContainer.style.height = "416px";
        cardContainer.style.width = "630px";

        break;
      }
    }
    palette.classList.remove("w50");
    palette.classList.add("w100");
    palette.classList.add("flex-column");
  }

  if (card.classList.contains("flex-column") || card.classList.contains("flex-column-reverse")) {
    for(let i = 0; i < arr.length; i++) {
      if (palette.classList.contains(arr[i])) {
        palette.classList.remove(arr[i]);
        cardContainer.style.height = "630px";
        cardContainer.style.width = "416px";

        break;
      }
    }
    palette.classList.add("flex-row");
  }
}

function randomFont() {
  var fontFamilies = ["Capriola", "Hahmlet", "Hanken Grotesk", "Jura", "Lato", "Libre Baskerville", "Mulish", "Pacifico", "Pathway Gothic One"];
  randFont = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  
  document.documentElement.style.setProperty('--font-family-base', randFont);
}

function changeColor(colorarray, lay, lineWidth, waveHeight) {
  const layers = document.getElementById("layers");
  const line = document.getElementById("lineWidth");
  // const wave = document.getElementById("wave");
  const font = document.getElementById("font");

  col1.innerHTML = colorarray[0] + ", " + colorarray[1] + ", " + colorarray[2];
  col2.innerHTML = colorarray[3] + ", " + colorarray[4] + ", " + colorarray[5];
  col3.innerHTML = colorarray[6] + ", " + colorarray[7] + ", " + colorarray[8];
  col4.innerHTML = colorarray[9] + ", " + colorarray[10] + ", " + colorarray[11];
  col5.innerHTML = colorarray[12] + ", " + colorarray[13] + ", " + colorarray[14];
  
  layers.innerHTML = lay;
  line.innerHTML = lineWidth;
  // wave.innerHTML = waveHeight;
  font.innerHTML = randFont;
}


//Datum wird berechnet
function calculateDate() {
  var versionDateElement = document.getElementById("versionDate");
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();

  var formattedDay = (day < 10) ? '0' + day : day;
  var formattedMonth = (month < 10) ? '0' + month : month;
  var formattedYear = year.toString().slice(-2);

  var formattedDate = formattedDay + ' ' + formattedMonth + ' ' + formattedYear;
  versionDateElement.textContent = formattedDate;
}



//Versionsnummer wird generiert
// Beim Laden der Seite den Zählerwert aus dem Local Storage abrufen oder auf 1 setzen
var versionCounter = parseInt(localStorage.getItem("versionCounter")) || 1;

function generateVersionNumber() {
  var versionNumber = versionCounter % 1000;
  versionCounter++;
  localStorage.setItem("versionCounter", versionCounter.toString()); // Zählerwert im Local Storage aktualisieren
  return versionNumber;
}

// ------- Versionsnummer zurücksetzen -------
// function resetVersionCounter() {
//   versionCounter = 1;
//   localStorage.setItem("versionCounter", versionCounter.toString());
// }
// window.onload = function() {
//   resetVersionCounter();
//   // Weitere Initialisierungscode hier...
// };

// random Titel
function generateTitle() {
  // Hier können Sie den Code einfügen, um den Titel zu generieren
  // Zum Beispiel:
  const titles = ["Hedera helix", "Ficus benjamina", "Bambusa", "Monstera deliciosa", "Dracaena", "Ficus elastica", "Peperomia obtusifolia", "Ficus benjamina", "Cyperus", "Aloe vera", "Sansevieria", "Spathiphyllum", "Ficus lyrata", "Ficus microcarpa", "Ficus binnendijkii", "Ficus pumila", "Ficus retusa", "Ficus maclellandii", "Ficus altissima", "Ficus benghalensis", "Ficus triangularis", "Ficus natalensis", "Calathea", "Aglaonema", "Fittonia", "Maranta leuconeura", "Syngonium", "Schefflera", "Dieffenbachia", "Peperomia",  "Aspidistra elatior", "Tradescantia", "Hoya", "Philodendron", "Alocasia", "Zamioculcas zamiifolia", "Fatsia japonica", "Aeschynanthus", "Chamaedorea", "Streptocarpus", "Begonia", "Pteridophyta", "Aechmea", ];
  const randomIndex = Math.floor(Math.random() * titles.length);
  return titles[randomIndex];

  
}


/*****************************************************************************************************************
 *                                           Karte downloaden                                                       *
 * **************************************************************************************************************/

document.addEventListener('keydown', function(event) {
  const targetSelector = document.querySelector('.modal-open-button.dialog-1').getAttribute('data-target-selector');
  const target = document.querySelector(targetSelector);

  console.log(target.classList.contains('hidden'));

  if (event.key === "s" || event.key === "Enter") {
    if (target.classList.contains('hidden')) {
      downloadContent();
      target.classList.remove('hidden');
      setModalCoverState(true);
    } else {
      target.classList.add('hidden');
      setModalCoverState(false);
    }
  }
});



function downloadContent() {
  var container = document.getElementById("para");
  html2canvas(container, { allowTaint: true }).then(function(canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);

    // Aktuelles Datum und Uhrzeit abrufen
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    var day = ("0" + currentDate.getDate()).slice(-2);
    var hours = ("0" + currentDate.getHours()).slice(-2);
    var minutes = ("0" + currentDate.getMinutes()).slice(-2);
    var seconds = ("0" + currentDate.getSeconds()).slice(-2);
    
    var fileName = "inspireleaf_" + year + month + day + "_" + hours + minutes + seconds + ".png"; // Neuer Dateiname mit Datum und Uhrzeit
    
    link.download = fileName;
    link.href = canvas.toDataURL();
    link.click();
  });
}



/*****************************************************************************************************************
 *                                           weitere Tastensteuerung                                                        *
 * **************************************************************************************************************/

function keyTyped() {
  if (key === "c" || key === "9") {
    changeCard();
    
  } else if (key === "z" || key === ",") {
    minYchange += Math.floor(Math.random() * 10) + 30;
    maxYchange += Math.floor(Math.random() * 10) + 30;
    drawPattern(true, false);
  } else if (key === " ") {
    drawPattern(true, false);
  } else if(key === "b" || key === "2") {
    // stroke(10, 30, 40, extraBlackAlph);
    // strokeWeight (Math.random(sw)*10);
    sw = Math.floor(Math.random() * 3) + 1;
    drawPattern(true, true);
  }
   else if (key === "f" || key === "1") {
    //change font
    randomFont();
    font.innerHTML = randFont;
  }
   else if (key === "r" || key === "0") {
    minYchange = 1;
    maxYchange = 10;
    
    
    const card = document.getElementById("para");
    const structure = document.getElementById("structure");
    card.classList.add("crumpled-card");

    setTimeout(() => {


      card.classList.remove("crumpled-card");
      //lade eine neue Karte
      changeCard();
      setup();
      //structure.innerHTML = window.reload();
      // Ändere die Schriftart
      randomFont();
      cardTitle.innerHTML = generateTitle();
    }, 1000);
    // refresh page
    // window.location.reload();
    version.textContent = "N." + generateVersionNumber().toString().padStart(3, "0");
  }
  else if (key == "3") {
    drawPattern(false, true);
  }
}

window.addEventListener("load", function() {
  // Überprüfen, ob der Klassenname bereits gesetzt ist
  if (!document.documentElement.classList.contains("concrete")) {
    // Überprüfen, ob ein Hintergrund im Local Storage gespeichert ist
    var savedBackground = localStorage.getItem("background");

    // HTML-Element auswählen
    var htmlElement = document.querySelector("html");

    // Funktion zum Wechseln des Hintergrunds
    function toggleBackground() {
      htmlElement.classList.toggle("concrete");
      htmlElement.classList.toggle("transition");

      // Hintergrund im Local Storage speichern
      var currentBackground = htmlElement.classList.contains("concrete") ? "concrete" : "";
      localStorage.setItem("background", currentBackground);
    }

    // Überprüfen, ob ein gespeicherter Hintergrund vorhanden ist und ihn setzen
    if (savedBackground === "concrete") {
      htmlElement.classList.add("concrete");
    } else {
      htmlElement.classList.add("transition");
      htmlElement.classList.toggle("w100");
      htmlElement.classList.toggle("h100");
    }

    // Ereignislistener für das Tastendruckereignis hinzufügen
    document.addEventListener("keydown", function(event) {
      if (event.key === "h" || event.key === "8") {
        toggleBackground();
      }
    });
  }
});

  



/*****************************************************************************************************************
 *                                              Vollbildmodus                                                        *
 * **************************************************************************************************************/

document.addEventListener('DOMContentLoaded', function (event) {
  document.addEventListener('keydown', function (event) {
    if (event.key === "7") {
      toggleFullScreen();
    }
  });
});

function toggleFullScreen() {
  var element = document.documentElement; // Das gesamte Dokument wird in den Vollbildmodus versetzt
  if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    var savedBackground = document.documentElement.style.backgroundColor; // Hintergrundfarbe speichern

    if (element.requestFullscreen) {
      element.requestFullscreen().then(function () {
        // Hintergrundfarbe im Vollbildmodus setzen
        document.documentElement.style.backgroundColor = savedBackground;
      }).catch(function (error) {
        console.log('Error attempting to enable full-screen mode:', error.message);
      });
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT).then(function () {
        // Hintergrundfarbe im Vollbildmodus setzen
        document.documentElement.style.backgroundColor = savedBackground;
      }).catch(function (error) {
        console.log('Error attempting to enable full-screen mode:', error.message);
      });
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen().then(function () {
        // Hintergrundfarbe im Vollbildmodus setzen
        document.documentElement.style.backgroundColor = savedBackground;
      }).catch(function (error) {
        console.log('Error attempting to enable full-screen mode:', error.message);
      });
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen().then(function () {
        // Hintergrundfarbe im Vollbildmodus setzen
        document.documentElement.style.backgroundColor = savedBackground;
      }).catch(function (error) {
        console.log('Error attempting to enable full-screen mode:', error.message);
      });
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    // Hintergrundfarbe nach dem Verlassen des Vollbildmodus wiederherstellen
    var savedBackground = localStorage.getItem("background");
    document.documentElement.style.backgroundColor = savedBackground;
  }
}

window.addEventListener("load", function() {
  // Überprüfen, ob der Klassenname bereits gesetzt ist
  if (!document.documentElement.classList.contains("concrete")) {
    // Überprüfen, ob ein Hintergrund im Local Storage gespeichert ist
    var savedBackground = localStorage.getItem("background");

    // HTML-Element auswählen
    var htmlElement = document.querySelector("html");

    // Funktion zum Wechseln des Hintergrunds
    function toggleBackground() {
      htmlElement.classList.toggle("concrete");
      htmlElement.classList.toggle("transition");

      // Hintergrund im Local Storage speichern
      var currentBackground = htmlElement.classList.contains("concrete") ? "concrete" : "";
      localStorage.setItem("background", currentBackground);
    }

    // Überprüfen, ob ein gespeicherter Hintergrund vorhanden ist und ihn setzen
    if (savedBackground === "concrete") {
      htmlElement.classList.add("concrete");
    } else {
      htmlElement.classList.add("transition");
      htmlElement.classList.toggle("w100");
      htmlElement.classList.toggle("h100");
    }

    // Ereignislistener für das Tastendruckereignis hinzufügen
    document.addEventListener("keydown", function(event) {
      if (event.key === "h") {
        toggleBackground();
      }
    });
  }
});





/*****************************************************************************************************************
 *                                          Pop Up Fenster                                            *
 * **************************************************************************************************************/


// Open modal
document.addEventListener('keydown', function(event) {
  
    const targetSelector = document.querySelector('.modal-open-button').getAttribute('data-target-selector');
    const target = document.querySelector(targetSelector);

    console.log(target.classList.contains('hidden'));

    if (target.classList.contains('hidden') && (event.key === "i" || event.key === "-")) {
      target.classList.remove('hidden');
      setModalCoverState(true);
    } else if (target.classList.contains('hidden') == false && event.key === "-") {
      
      
      target.classList.add('hidden');
      setModalCoverState(false);
    }
});



/* FUNCTIONS */

// modal close
function closeModal(event) {
    // closest() search for the next parent node that has the specified selector
    const target = event.target.closest('.modal');
    target.classList.add('hidden');
    setModalCoverState(false);
}

// modal cover state
function setModalCoverState(active = true) {
    document.body.classList.toggle('some-modal-is-visible', active);

}




