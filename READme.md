# [Bosna IF Basket Göteborg]

## Om sidan
Jag har byggt en webbsida för basketklubben Bosna IF i Göteborg. Sidan
är till för nya spelare och föräldrar som vill veta mer om klubben. Man
kan se kommande matcher, titta på klubbens lag och nyheter och anmäla
intresse för att börja spela.

## Skiss
Länk eller hänvisning till skissfilen i repot.
Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför?

## Funktionalitet
På sidan kan besökaren öppna och stänga menyn på mobil med hamburgerknappen, vilket sköts av funktionen `vaxlaMeny()` i `js/script.js`. Besökaren kan också filtrera matcherna med knapparna Alla, Herr, Dam och Ungdom, så att bara den valda kategorins matcher visas, och det görs av funktionen `filtreraMatcher()`. Slutligen kan besökaren anmäla intresse för att börja spela. Knappen "Börja spela basket" leder till formuläret, och när man trycker på Skicka kontrollerar `visaFel()` att alla fält är ifyllda, och `visaTack()` döljer formuläret och visar ett tackmeddelande. All JavaScript ligger i `js/script.js` och kopplas med `addEventListener`.


## AI-användning
Minst två exempel. För varje:
- Vad bad jag om?
- Vad fick jag?
- Vad gjorde jag med det?

## Tekniska val (VG)
Vilka beslut tog jag, och varför?

## Bedömning av AI-innehåll (VG)
Hur avgjorde jag om det AI gav mig var bra nog?
Vad behöll jag, vad ändrade jag, och varför?