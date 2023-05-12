window.onload = function() {
  document.getElementById("header").innerHTML = "Portfolio";
      var imagesDiv = document.getElementById("imagecontainer");
      document.getElementById("categorie").innerHTML = "";
      document.getElementById("text").innerHTML = "";
    
    
      // Hier definierst du den Pfad zum Ordner mit den Bildern
      var imagesPath = "img/start/";
    
      // Hier fügst du alle Bilder im Ordner zu dem div-Element hinzu
      for (var i = 1; i <= 4; i++) {
        var image = document.createElement("img");
        image.src = imagesPath + i + ".jpg";
        imagesDiv.appendChild(image);
      }
    
    
      document.getElementById("footer").innerHTML = "";
}

function reply_click(clicked_id){

    // Hier wird der Inhalt des Containers mit den Bildern gelöscht
    let element = document.getElementById("image-container");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }

    let elements = document.getElementById("imagecontainer");
    while (elements.firstChild) {
    elements.removeChild(elements.firstChild);
    }

    document.getElementById("image").src = "";
    document.getElementById("image").classList.add("w-100");

    if (clicked_id == "index") {
      document.getElementById("header").innerHTML = "Portfolio";
      var imagesDiv = document.getElementById("imagecontainer");
      document.getElementById("categorie").innerHTML = "UX/UI Design, Fotografie, Branding";
      document.getElementById("text").innerHTML = "";
    
    
      // Hier definierst du den Pfad zum Ordner mit den Bildern
      var imagesPath = "img/start/";
    
      // Hier fügst du alle Bilder im Ordner zu dem div-Element hinzu
      for (var i = 1; i <= 4; i++) {
        var image = document.createElement("img");
        image.src = imagesPath + i + ".jpg";
        image.classList.add("pb-3");
        imagesDiv.appendChild(image);
      }
    
    
      document.getElementById("footer").innerHTML = "☞ UX/UI Design, Prototyping, Case Study";
    }

    else if (clicked_id == "robo23") {
        document.getElementById("header").innerHTML = "RoboCup 2023";
        document.getElementById("image").src = "img/fotografie_robocup/header.jpeg";
        document.getElementById("categorie").innerHTML = "Fotografie";
        document.getElementById("text").innerHTML = "Schon das dritte Jahr begleite ich den RoboCup in Kassel fotografisch. Die Motive überlege ich mir immer spontan und in Eigeninitiative. Im Mittelpunkt sollen selbstverständlich die Robotor, die Teams und die Wettkampfbahnen stehen. Durch meine Erfahrungen in den letzten Jahren konnte mein Blick für gute Kompositionen geschult werden.";
        
        // Hier wird ein neues div-Element erstellt, in dem alle Bilder angezeigt werden sollen
        var imagesDiv = document.createElement("div");
        imagesDiv.classList.add("row");
        imagesDiv.id = "images-robo23";
        var imagesPath = "img/fotografie_robocup/";
        var count = 0;

        for (var i = 1; i <= 3; i++) {
          var images = document.createElement("div");
          images.classList.add("col-lg-4", "col-md-12", "mb-4", "mb-lg-0");
          for(var j = 1; j <= 4; j++) {
            var image = document.createElement("img");
            image.src = imagesPath + "robocup_junior_finale23-" + (count + 1) + ".jpg";
            image.classList.add("w-100", "shadow-1-strong", "rounded", "p-1")
            images.appendChild(image);
            count++;
            console.log(count);
          }
          document.getElementById("image-container").appendChild(images);
        }

        document.getElementById("footer").innerHTML = "☞ Fotografie, Bildbearbeitung, Videografie, Bildkomposition <br> ✌︎ In Zusammenarbeit mit " + '<a class="social" href="https://steckler-alex.de" target="_blank">Alex Steckler</a>';
    }

    else if (clicked_id == "klimperkasten") {
        document.getElementById("header").innerHTML = "Klimperkasten - Bayrisch Pub";
        document.getElementById("image").src = "img/branding_pub/header.jpg";
        document.getElementById("categorie").innerHTML = "Branding";
        document.getElementById("text").innerHTML = "Im zwoadn Wohnzimma drifft urgis Ambiantn auf frisch gzapfts Bier und zünftig Burga: Des is Klimperkasten. In Freisingen, Vöttingen können Jung und Alt einen entspannten Abend im gemütlichen Ambiente verbringen und neue Bekanntschaften knüpfen. Essen, Trinken und Events stehen, doch das Corporate Design fehlte. Das Logo war bereits vorhanden, also durfte ich die Farben, Typos und Co. anpacken. Das alles landete auf dem Instagram Account, Flyern und Plakaten. Das Ziel mehr Kunden zu erreichen – vor allem Studierende – ist geglückt: Das urige Ambiente Klimperkasten war bei jeder Veranstaltung ausgebucht. Die Werbung hat viel Zuspruch und Lob bekommen, denn viele sind erst dadurch (wieder) auf den Pub aufmerksam geworden.";
        
        // Hier wird ein neues div-Element erstellt, in dem alle Bilder angezeigt werden sollen
        var imagesDiv = document.createElement("div");
        imagesDiv.id = "images-pub";
      
        // Hier definierst du den Pfad zum Ordner mit den Bildern
        var imagesPath = "img/branding_pub/";
      
        // Hier fügst du alle Bilder im Ordner zu dem div-Element hinzu
        for (var i = 1; i <= 6; i++) {
          var image = document.createElement("img");
          image.src = imagesPath + i + ".jpg";
          imagesDiv.appendChild(image);
        }
      
        // Hier fügst du das div-Element zu deinem HTML-Code hinzu
        document.getElementById("image-container").appendChild(imagesDiv);

        document.getElementById("footer").innerHTML = "☞ Branding, Corporate Design, Flyer, Plakate, Social Media <br>" + '<a href="https://www.instagram.com/klimperkasten_bayrisch_pub" target="_blank">☺ Klimperkasten – Bayrisch Pub</a>';
    }

    else if (clicked_id == "cardfolio") {
        document.getElementById("header").innerHTML = "Cardfolio";
        document.getElementById("image").src = "img/uxui_cardfolio/header.jpg";
        document.getElementById("categorie").innerHTML = "UX/ UI Design";
        document.getElementById("text").innerHTML = "Dieser App-Prototyp entstand innerhalb des 3.Semesters im Kurs „(User) Experience Design“ basierend auf den Basics des UX-Designs und der Aufgabe einen Prototypen einer App/ Webseite für Designerinnen zu designen. <br> <br> Die App “Cardfolio” unterstützt den User dabei kreative Arbeiten für das eigene Portfolio zu erstellen, in dem der User wöchentliche Designaufgaben gestellt bekommt. Abschließend kann das Design in Form einer Spielkarte gespeichert werden. Durch das Abschließen der wöchentlichen Aufgabe und das Teilen mit der Community erhält der User Zugriff auf die Designs der Community. Dadurch ist es möglich neue Impulse und Inspiration zu der gleichen Aufgabe zu bekommen – ohne, dass der User davor beeinflusst wurde. <br> <br> Folgend mein Prozess in Form einer Case-Study.";
      

        // Hier wird ein neues div-Element erstellt, in dem alle Bilder angezeigt werden sollen
        var imagesDiv = document.createElement("div");
        imagesDiv.id = "images";
      
        // Hier definierst du den Pfad zum Ordner mit den Bildern
        var imagesPath = "img/uxui_cardfolio/";
      
        // Hier fügst du alle Bilder im Ordner zu dem div-Element hinzu
        for (var i = 1; i <= 26; i++) {
          var image = document.createElement("img");
          image.src = imagesPath + i + ".jpg";
          imagesDiv.appendChild(image);
        }
      
        // Hier fügst du das div-Element zu deinem HTML-Code hinzu
        document.getElementById("image-container").appendChild(imagesDiv);
      
        document.getElementById("footer").innerHTML = "☞ UX/UI Design, Prototyping, Case Study";
      }
      

    else if (clicked_id == "laulo") {

      callContents(
        "Laulo Panadería",
        "img/branding_laulo/1.jpg",
        "Branding",
        "Eine mexikanische Bäckerei, die deutsches Brot verkauft? Loco! Das ist Laulo Panadería. Die Brote mit deutschen Namen kommt bei Touristen aus aller Welt, sowie bei Einheimischen muy bien an. ¡El mejor pan de México! Was fehlt sind die richtigen Werbemaßnahmen. Das Logo stand bereits, also kümmerte ich mich um die passende Corporate Identity. Dafür entwickelte ich eine Farbpalette, ein Typografiekonzept und Illustrationen. Diese haben ihren Platz final in Plakaten und Social Media Posts gefunden.",
        "☞ Corporate Identity, Illustration, Plakat, Social Media <br>" + '<a href="https://www.instagram.com/panaderialaulo" target="_blank">☺ Laulo Panadería</a>'
      );

        callImageContainer(6, "img/branding_laulo/");

    }

    else if (clicked_id == "weltvmorgen") {
      callContents(
        "Die Welt von Morgen",
        "img/weltvmorgen/welt_von_morgen.gif",
        "Editorial",
        "Im Kurs „Typografie“ des ersten Semesters meines Zweitstudiums entwickeln, konzipieren und gestalten wir ein Buch zur Zukunft. Was kommt auf uns zu? Wie verstehen wir diese Entwicklungen besser? Welche Meinungen gibt es? Wie sind Lösungen möglich? – Grundlage sind die sogenannten „Megatrends“. Wir arbeiten mit Recherche, unseren eigenen Ideen und Fundstücken. Jede Dreier-Gruppe erarbeitet zwei eigene Kurs-Buch-Kapitel, wobei meine Gruppe die Oberthemen „Globalisierung“ und „Wissenskultur“ behandelt. Jede Gruppe gestaltet ihre eigene Seiten typografisch, grafisch und inhaltlich – am Schluss fügen wir die Seiten zu einem großen Buch zusammen. Hier zu sehen sind die von mir gestalteten Buchseiten.",
        "☞ Editorial, Buchgestaltung, Typografie"
      );
    }

    else if (clicked_id == "beme") {
      callContents(
        "Be Me",
        "img/bme/bme.jpg",
        "Branding",
        "Eine Modemarke, die sich für Nachhaltigkeit und faire Produktion einsetzt. DIE Modemarke, die DICH different macht! Entstanden ist die Idee und die Umsetzung des Corporate Designs der Modemarke im 4. Semester zusammen mit zwei Kommilitoninnen an der Hochschule Fulda im Modul „Gestaltung in der Praxis“. Ein halbes Semester hatten wir dazu Zeit uns ein Corporate Design für ein Unternehmen unserer Wahl zu gestalten. Dazu inszenierten wir die Modemarke „Be Me“. <br> <br>" + '<a href="https://www.youtube.com/shorts/lXMQsWrlwoU" target="_blank">Der Werbeclip</a>',
        "☞ Konzept, Logo, Printprodukte <br> ✌︎ In Zusammenarbeit mit " + '<a class="social" href="https://portfolio-melinaschwierzke.webflow.io/" target="_blank">Melina Schwierzke</a>' + " und " + '<a class="social" href="https://www.linkedin.com/in/frederike-barth-027171198/" target="_blank">Frederike Barth</a>'
      );
    }

    else if (clicked_id == "freie-arbeiten") {
        callContents(
          "Freie Arbeiten",
          "img/freiearbeiten/2.jpg",
          "Diverses",
          "Arbeiten, die ich in meiner Freizeit erstellt habe ohne Uni-Bezug oder Kundenauftrag.",
          "☞ "
        );

        callImageContainer(5, "img/freiearbeiten/", "w-100");
    }

    else if (clicked_id == "infos") {
      callContents(
        "hej, ich bin Selina!",
        "",
        "UX/ UI Design, Fotografie, Branding, Konzeption & Editorial",
        "Komplexe Ideen in kreative Lösungen umwandeln ist meine Leidenschaft als angehende Designerin. Ich bin Selina und studiere Kommunikationsdesign im vierten Semester in Mainz. Im Studium kann ich meiner kreativen Ader in verschiedenen Bereichen wie UX/UI, Fotografie, Branding, Konzeption und Editorial Design nachgehen. Durch die Kombination meiner kreativen Fähigkeiten mit meinem technischen Wissen und meinen Erfahrungen, bin ich in der Lage, wirkungsvolle Designs zu schaffen. In meinem Portfolio ist eine Auswahl meiner Arbeiten, die ich im Rahmen meines Studiums und auch außerhalb davon erstellt habe, zu finden. <br> <br> Kontakt: " + '<a href="mailto:hej@selinaschwarz.me?subject=Anfrage/%20Feedback/%20Fragen" target="_blank">hej@selinaschwarz.me</a>',
        "<br><br><br><br> Impressum <br> Angaben gemäß § 5 TMG <br> <br> Selina Schwarz <br> Bretzenheimer Straße 23 <br> 55128 Mainz <br><br> Kontakt <br> E-Mail: " + '<a class="social" href="mailto:hej@selinaschwarz.me?subject=Anfrage/%20Feedback/%20Fragen" target="_blank">hej@selinaschwarz.me</a>' + "<br> <br> HAFTUNGSHINWEIS: <br> Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Inhalte externer Links übernommen. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich."
      );

      
      var image = document.getElementById("image");
      image.classList.remove("w-100");
      image.classList.add("profil");
      image.src = "img/profil/1.jpg";
    } 
    
    else console.log("Error");
}

function callContents(header, image, categorie, text, footer) {
    document.getElementById("header").innerHTML = header;
    document.getElementById("image").src = image;
    document.getElementById("categorie").innerHTML = "☞ " + categorie;
    document.getElementById("text").innerHTML = text;
    document.getElementById("footer").innerHTML = footer;
}

function callImageContainer(num, path, classTag) {
    var imagesDiv = document.createElement("div");
    imagesDiv.classList.add("col-12")
    imagesDiv.id = "images-frei";

    for (var i = 1; i <= num; i++) {
      var image = document.createElement("img");
      image.src = path + i + ".jpg";
      image.classList.add(classTag);
      imagesDiv.appendChild(image);
    }
    document.getElementById("image-container").appendChild(imagesDiv);
}