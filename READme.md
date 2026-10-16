# Bosna IF Basket Göteborg

## Om sidan
Jag har byggt en webbsida för basketklubben Bosna IF i Göteborg. Sidan
är till för nya spelare och föräldrar som vill veta mer om klubben. Man
kan se kommande matcher, titta på klubbens lag och nyheter och anmäla
intresse för att börja spela.

## Skiss
Jag har gjort tre skisser i Figma som visar hur hemsidan ska se ut på desktop och mobil samt hur formuläret ska vara uppbyggt. Skisserna finns i mappen img.

Det som skiljer sig mellan skissen och det färdiga projektet är bland annat headern och navigationen. I skissen hade jag en länk till kalendern, men jag valde att ta bort den och istället lägga in "Börja spela" tillsammans med de andra navigationslänkarna. Eftersom jag redan har en stor knapp med texten "Börja spela basket" på startsidan ville jag hålla navigationen enkel och undvika att hemsidan skulle kännas för upprepande.

Jag ändrade också matchfiltreringen från Alla, Herr, Dam och Ungdom till Alla, Hemma och Borta, eftersom det passar bättre för att sortera matcherna efter var de spelas. Jag tittade även på andra idrottsföreningars hemsidor och såg att flera hade en liknande struktur.

Jag ändrade även formuläret jämfört med skissen genom att lägga till fält för personuppgifter. Alla obligatoriska fält måste vara ifyllda innan formuläret kan skickas. När besökaren skickar formuläret visas ett tackmeddelande.

## Funktionalitet
På sidan kan besökaren öppna och stänga menyn på mobil med hamburgerknappen, vilket sköts av funktionen `vaxlaMeny()` i `script.js`. Besökaren kan också filtrera matcherna med knapparna Alla, Hemma och Borta så att bara den valda kategorins matcher visas, och det görs av funktionen `filtreraMatcher()`. Slutligen kan besökaren anmäla intresse för att börja spela. Knappen "Börja spela basket" leder till formuläret. Formulärets obligatoriska fält kontrolleras med HTML-attributet `required`, och när besökaren skickar formuläret döljer `visaTack()` formuläret och visar ett tackmeddelande. All JavaScript ligger i `script.js` och kopplas med `addEventListener`.


## AI-användning
1. Jag bad AI hjälpa mig med hur jag ska lägga upp min java script."Hur kan jag använda JavaScript för att filtrera matcherna på min hemsida när man klickar på knapparna Alla, Hemma och Borta?"

Jag fick hjälp med JavaScript och ett exempel på hur jag kunde filtrera matcherna.

matchKort.forEach(function (kort) {
    const visaMatch = valdMatchtyp === "alla" || kort.dataset.type === valdMatchtyp;

    kort.hidden = !visaMatch;
});

Jag använde koden på min hemsida och testade att knapparna fungerade. Jag lärde mig att forEach går igenom alla matcher en i taget och att hidden kan användas för att visa eller dölja matcher.

2. Jag frågade ChatGPT hur jag kunde få knapparna Alla, Hemma och Borta att reagera när man klickar på dem.

Jag fick hjälp med den här JavaScript-koden:

filterknappar.forEach(function (knapp) {
    knapp.addEventListener("click", filtreraMatcher);
});

Jag lade in koden i min script.js och testade knapparna på hemsidan. Jag klickade på Hemma för att se att bara hemmamatcher visades, Borta för att se bortamatcherna och Alla för att få tillbaka alla matcher. Jag lärde mig att forEach går igenom knapparna en i taget och att addEventListener gör att något händer när man klickar.

3. Jag frågade ChatGPT hur jag kunde få texten ”BOSNA IF BASKET” att ligga ovanpå lagbilden på startsidan istället för under bilden.

Jag fick hjälp med att använda position: relative och position: absolute i CSS.

.hero {
    position: relative;
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

Jag använde koden i min CSS och testade hur texten såg ut på hemsidan. Först såg jag till att texten hamnade ovanpå bilden. Sedan kontrollerade jag att den låg i mitten och inte hamnade fel när jag ändrade storleken på webbläsarfönstret.

Jag lärde mig att position: relative används på området med bilden och att position: absolute gör att jag kan placera texten ovanpå bilden. Med top, left och transform kunde jag få texten i mitten

Minst två exempel. För varje:
- Vad bad jag om?
- Vad fick jag?
- Vad gjorde jag med det?

## Tekniska val (VG)
När jag arbetade med matchfiltreringen fick jag hjälp av AI som föreslog att jag kunde använda data-type och hidden tillsammans med JavaScript.

Jag valde att behålla den lösningen eftersom jag kunde använda samma funktion, filtreraMatcher(), för alla tre knapparna istället för att skriva en funktion för varje knapp. Det gjorde att jag slapp upprepa kod och att det blev lättare för mig att förstå
hur filtreringen fungerar.

När jag arbetade med hamburgermenyn fick jag hjälp av ChatGPT med att använda classList.toggle("open"). Jag valde att behålla den lösningen eftersom samma knapp kan användas för att både öppna och stänga menyn, istället för att skriva olika funktioner för det.

Jag använde också classList.remove("open") för att menyn ska stängas när man klickar på en navigationslänk. Jag tyckte att det var en bra lösning eftersom menyn annars hade kunnat ligga kvar öppen.

När jag arbetade med formuläret valde jag att använda event.preventDefault() för att sidan inte ska laddas om när man skickar in det.

Jag valde också att använda textContent för att visa besökarens förnamn i tackmeddelandet och hidden för att dölja formuläret och visa meddelandet. Jag tyckte att det var en enkel lösning eftersom allt händer på samma sida och jag inte behövde skapa en separat tacksida.

## Bedömning av AI-innehåll (VG)
När jag arbetade med HTML och CSS fick jag ibland förslag på kod som inte gjorde någon skillnad på hemsidan när jag testade den. Jag valde därför att inte använda de förslagen eftersom jag tyckte att det var onödigt att lägga till extra kod som inte behövdes.