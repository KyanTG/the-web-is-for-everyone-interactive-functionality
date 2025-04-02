# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Triple / Mediahuis Beschrijving

De opdracht deze sprint was om voor de radiogids een POST functie toe te voegen, ik heb hierbij gekozen voor een like button met een pagina waar je de gelikede programmas kan terugvinden. 

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->


## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

Als gebruiker kan je op de website radiozenders bekijken met daarbij de tijden, ook kan je bepaalde zenders een like geven die je gaaf vind. Je kan dan naar de likes pagina gaan en hier zie je de gelikede programmas terug. 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

# HTML

Als eerst heb ik natuurlijk ervoor gezorgd dat mijn HTML Semantisch is ingericht en dat ik de juiste elementen heb gebruikt in mijn code. Ik heb daarna gebruik gemaakt van een % Loop zodat de Articles met de juiste data automatisch worden ingeladen en zovaak worden gerepeat zoals nodig is. Daarna hebben wij deze sprint (9) nog een POST functie toegevoegd en dit hebben wij gedaan met een form met daarin een input hidden en een like button ( via de like button kan je de data sturen naar de directus database waardoor de likes zichtbaar worden in de likes HTML ). Ik heb ook nog een nieuwe HTML aangemaakt waarin er een likes pagina zichtbaar is waarin je alle gelikede programmas ziet. Hier ga ik ook nog een POST DELETE maken waardoor je de like weer kan verwijderen. op deze pagina heb ik ook gebruik gemaakt van % if % en % else % zodat als er geen likes zijn er een tekst komt te staan met Nog geen likes gegeven, en als er wel likes zijn die zichtbaar zijn. Code Voorbeelden

https://github.com/KyanTG/the-web-is-for-everyone-interactive-functionality/blob/6c1492630864a2911216a535415048ed4e647385/views/veronica.liquid#L8-L39

https://github.com/KyanTG/the-web-is-for-everyone-interactive-functionality/blob/6c1492630864a2911216a535415048ed4e647385/views/veronica-likes.liquid#L9-L39

# CSS

In CSS heb ik er voor gezorgd dat alles op de volgorde van de HTML ingedeeld is en daarbij heb ik ervoor gezorgd dat alles netjes genest is zodat de code optimaal werkt en overzichtelijk blijft. Ik heb ook mobile first gewerkt aangezien dit een principe is die we via de HVA meekrijgen. Als ik nog code ga gebruiken wat misschien niet door elke browser ondersteunt word ( zoals het animeren / stylen van mijn like button ga ik nog gebruik maken van @support, dit zorgt ervoor dat het alleen deze styling heeft als het ondersteunt word door de browser.  Code voorbeeld:

https://github.com/KyanTG/the-web-is-for-everyone-interactive-functionality/blob/f7994a46b3e3541ff188f93c0e0fef78f0ece86d/public/liquid.css#L43-L90

# Javascript / Express

In JS heb ik ervoor gezorgd dat de ( JSON ) database opgehaald kan worden, dit heb ik gedaan met een await fetch ('hierin de link'). Ik heb ik  hier de verschillende app.GET routes aangemaakt zodat er verschillende paginas zijn. Doormiddel van response.render laden deze paginas ook in. Deze sprint (9) hebben wij nog een app.POST functie toegevoegd waardoor wij data kunnen versturen naar de database ( de directus ). Ik ben ook nog bezig met een app.POST DELETE zodat we deze data er ook weer uit kunnen verwijderen Code voorbeelden

https://github.com/KyanTG/the-web-is-for-everyone-interactive-functionality/blob/f7994a46b3e3541ff188f93c0e0fef78f0ece86d/server.js#L37-L46

https://github.com/KyanTG/the-web-is-for-everyone-interactive-functionality/blob/f7994a46b3e3541ff188f93c0e0fef78f0ece86d/server.js#L59-L75

https://github.com/KyanTG/the-web-is-for-everyone-interactive-functionality/blob/c6c1f7f33c8f8cdc41376122084a36c700288c39/server.js#L77-L87


# Progressive Enhancement Wat houd dat in?

Met progressive enhancement heb je 3 stappen, eerst zorg je ervoor dat de functie werkt zonder styling etc zodat elke browser / apparaat dit kan gebruiken. Daarna kan je simpele styling gaan toepassen zodat het er wat mooier uitziet ( met deze stap bedoel ik dan kleine styling dus fonts kleuren sizes etc etc ). Als 3de stap kan je leuke animaties etc toevoegen, dit doe je als laatst omdat je de basisfunctie werkend wilt hebben. ( bij deze stap houd je rekening dat je met @supports werkt zodat als het niet ondersteunt word door de browser, de functie stap 1 dus nog werkt ).

## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
