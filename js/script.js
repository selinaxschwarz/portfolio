function reply_click(clicked_id){

    // Hier wird der Inhalt des Containers mit den Bildern gelöscht
    let element = document.getElementById("image-container");
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
    
    if (clicked_id == "robo23") {
        document.getElementById("header").innerHTML = "RoboCup 2023";
        document.getElementById("image").src = "/img/fotografie_robocup/RoboCup_Kassel-Quali22_vorschau.jpeg";
        document.getElementById("categorie").innerHTML = "Fotografie";
        document.getElementById("text").innerHTML = "Schon das zweite Jahr begleite ich den RoboCup in Kassel fotografisch. Die Motive überlege ich mir immer spontan und in Eigeninitiative. Im Mittelpunkt sollen selbstverständlich die Robotor, die Teams und die Wettkampfbahnen stehen. Durch meine Erfahrungen in den letzten Jahren konnte mein Blick für gute Kompositionen geschult werden.";
        
        // Hier wird ein neues div-Element erstellt, in dem alle Bilder angezeigt werden sollen
        var imagesDiv = document.createElement("div");
        imagesDiv.id = "images-robo23";
        
      
        // Hier definierst du den Pfad zum Ordner mit den Bildern
        var imagesPath = "/img/fotografie_robocup/";
        
        // Hier fügst du alle Bilder im Ordner zu dem div-Element hinzu
        for (var i = 1; i <= 13; i++) {
            var image = document.createElement("img");
            image.src = imagesPath + "robocup_junior_finale23-" + i + ".jpg";
            imagesDiv.appendChild(image);
        
        }
      
        // Hier fügst du das div-Element zu deinem HTML-Code hinzu
        document.getElementById("image-container").appendChild(imagesDiv);

        document.getElementById("footer").innerHTML = "☞ Fotografie, Bildbearbeitung, Videografie, Bildkomposition <br> ✌︎ In Zusammenarbeit mit " + '<a href="https://steckler-alex.de" target="_blank">Alex Steckler</a>';
    }

    else if (clicked_id == "klimperkasten") {
        document.getElementById("header").innerHTML = "Klimperkasten - Bayrisch Pub";
        document.getElementById("image").src = "img/branding_pub/klimperkasten_header.jpg";
        document.getElementById("categorie").innerHTML = "Branding";
        document.getElementById("text").innerHTML = "Im zwoadn Wohnzimma drifft urgis Ambiantn auf frisch gzapfts Bier und zünftig Burga: Des is Klimperkasten. In Freisingen, Vöttingen können Jung und Alt einen entspannten Abend im gemütlichen Ambiente verbringen und neue Bekanntschaften knüpfen. Essen, Trinken und Events stehen, doch das Corporate Design fehlte. Das Logo war bereits vorhanden, also durfte ich die Farben, Typos und Co. anpacken. Das alles landete auf dem Instagram Account, Flyern und Plakaten. Das Ziel mehr Kunden zu erreichen – vor allem Studierende – ist geglückt: Das urige Ambiente Klimperkasten war bei jeder Veranstaltung ausgebucht. Die Werbung hat viel Zuspruch und Lob bekommen, denn viele sind erst dadurch (wieder) auf den Pub aufmerksam geworden.";
        document.getElementById("footer").innerHTML = "☞ Branding, Corporate Design, Flyer, Plakate, Social Media <br>" + '<a href="https://www.instagram.com/klimperkasten_bayrisch_pub" target="_blank">☺ Klimperkasten – Bayrisch Pub</a>';
    }

    else if (clicked_id == "cardfolio") {
        document.getElementById("header").innerHTML = "Cardfolio";
        document.getElementById("image").src = "/img/uxui_cardfolio/26.jpg";
        document.getElementById("categorie").innerHTML = "UX/ UI Design";
        document.getElementById("text").innerHTML = "Dieser App-Prototyp entstand innerhalb des 3.Semesters im Kurs „(User) Experience Design“ basierend auf den Basics des UX-Designs und der Aufgabe einen Prototypen einer App/ Webseite für Designerinnen zu designen. <br> <br> Die App “Cardfolio” unterstützt den User dabei kreative Arbeiten für das eigene Portfolio zu erstellen, in dem der User wöchentliche Designaufgaben gestellt bekommt. Abschließend kann das Design in Form einer Spielkarte gespeichert werden. Durch das Abschließen der wöchentlichen Aufgabe und das Teilen mit der Community erhält der User Zugriff auf die Designs der Community. Dadurch ist es möglich neue Impulse und Inspiration zu der gleichen Aufgabe zu bekommen – ohne, dass der User davor beeinflusst wurde. <br> <br> Folgend mein Prozess in Form einer Case-Study.";
      
        // Hier wird ein neues div-Element erstellt, in dem alle Bilder angezeigt werden sollen
        var imagesDiv = document.createElement("div");
        imagesDiv.id = "images";
      
        // Hier definierst du den Pfad zum Ordner mit den Bildern
        var imagesPath = "/img/uxui_cardfolio/";
      
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
        document.getElementById("header").innerHTML = "Laulo Panadería";
        document.getElementById("image").src = "/img/branding_laulo/laulo.jpg";
        document.getElementById("categorie").innerHTML = "Branding";
        document.getElementById("text").innerHTML = "Eine mexikanische Bäckerei, die deutsches Brot verkauft? Loco! Das ist Laulo Panadería. Die Brote mit deutschen Namen kommt bei Touristen aus aller Welt, sowie bei Einheimischen muy bien an. ¡El mejor pan de México! Was fehlt sind die richtigen Werbemaßnahmen. Das Logo stand bereits, also kümmerte ich mich um die passende Corporate Identity. Dafür entwickelte ich eine Farbpalette, ein Typografiekonzept und Illustrationen. Diese haben ihren Platz final in Plakaten und Social Media Posts gefunden.";
        document.getElementById("footer").innerHTML = "☞ Corporate Identity, Illustration, Plakat, Social Media <br>" + '<a href="https://www.instagram.com/panaderialaulo" target="_blank">☺ Laulo Panadería</a>';
    }

    else if (clicked_id == "weltvmorgen") {
        document.getElementById("header").innerHTML = "Die Welt von Morgen";
        document.getElementById("image").src = "/img/weltvmorgen/playful_culture.jpg";
        document.getElementById("categorie").innerHTML = "Editorial";
        document.getElementById("text").innerHTML = "Im Kurs „Typografie“ des ersten Semesters meines Zweitstudiums entwickeln, konzipieren und gestalten wir ein Buch zur Zukunft. Was kommt auf uns zu? Wie verstehen wir diese Entwicklungen besser? Welche Meinungen gibt es? Wie sind Lösungen möglich? – Grundlage sind die sogenannten „Megatrends“. Wir arbeiten mit Recherche, unseren eigenen Ideen und Fundstücken. Jede Dreier-Gruppe erarbeitet zwei eigene Kurs-Buch-Kapitel, wobei meine Gruppe die Oberthemen „Globalisierung“ und „Wissenskultur“ behandelt. Jede Gruppe gestaltet ihre eigene Seiten typografisch, grafisch und inhaltlich – am Schluss fügen wir die Seiten zu einem großen Buch zusammen.";
        document.getElementById("footer").innerHTML = "☞ Editorial, Buchgestaltung, Typografie";
    }

    else if (clicked_id == "beme") {
        document.getElementById("header").innerHTML = "Be Me";
        document.getElementById("image").src = "/img/bme/bme.jpg";
        document.getElementById("categorie").innerHTML = "Branding";
        document.getElementById("text").innerHTML = "Eine Modemarke, die sich für Nachhaltigkeit und faire Produktion einsetzt. DIE Modemarke, die DICH different macht! Entstanden ist die Idee und die Umsetzung des Corporate Designs der Modemarke im 4. Semester zusammen mit zwei Kommilitoninnen an der Hochschule Fulda im Modul „Gestaltung in der Praxis“. Ein halbes Semester hatten wir dazu Zeit uns ein Corporate Design für ein Unternehmen unserer Wahl zu gestalten. Dazu inszenierten wir die Modemarke „Be Me“. <br>" + '<a href="https://www.youtube.com/shorts/lXMQsWrlwoU" target="_blank">Der Werbeclip</a>';
        document.getElementById("footer").innerHTML = "☞ Konzept, Logo, Printprodukte <br> ✌︎ In Zusammenarbeit mit " + '<a href="https://portfolio-melinaschwierzke.webflow.io/" target="_blank">Melina Schwierzke</a>' + " und " + '<a href="https://www.linkedin.com/in/frederike-barth-027171198/" target="_blank">Frederike Barth</a>';
    }

    else if (clicked_id == "infos") {
        document.getElementById("header").innerHTML = "hej, ich bin Selina! ";
        document.getElementById("image").src = "/img/";
        document.getElementById("text").innerHTML = "Ich bin Kommunikationsdesign-Studentin im vierten Semester. Schon von klein auf hat mich meine Kreativität sehr geprägt, durch die Oberstufe gebracht und schließlich in diesen kreativen Studiengang befördert. Projekte jeder Art gehe ich kreativ an und lasse mir immer neue Dinge einfallen. Dabei strebe ich ganz nach meinem Motto: Stift in der Hand. Ideen im Kopf. Designerin mit Herz.";
        document.getElementById("footer").innerHTML = "☞ UX/ UI Design, Fotografie, Branding, Konzeption & Editorial ";
    }

}