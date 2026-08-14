# Lundgren Digital backlog

## P0 — Baslinje för lokal synlighet

**Mål:** Gör Lundgren Digital synligt och mätbart i Google för relevanta sökningar kring AI-automation, hemsidor och lokal söksynlighet i Åkersberga och Stockholm. Detta är ett pilotcase för erbjudandet, inte ett löfte om en viss placering.

### 1. Google Search Console

**Ägare:** Hannes (Google-kontots verifiering), Sten (kontroll och uppföljning när åtkomst finns).

1. Gå till <https://search.google.com/search-console/> och logga in med det Google-konto som ska äga Lundgren Digital.
2. Välj **Lägg till egendom** → **Domän** och ange exakt `lundgrendigital.se` (utan `https://` och utan sökväg).
3. Google visar en TXT-post för DNS-verifiering. Lägg in den hos den DNS-leverantör som hanterar domänen. Ändra eller ta inte bort befintliga DNS-poster.
4. Vänta tills DNS-posten kan läsas av Google och tryck **Verifiera**. DNS kan slå igenom snabbt men ibland ta upp till 24–48 timmar.
5. När domänen är verifierad: öppna **Sitemaps**, ange `sitemap.xml` och skicka in. Den fullständiga adressen är `https://lundgrendigital.se/sitemap.xml`.
6. Öppna **URL-inspektion**, skriv in:
   - `https://lundgrendigital.se/`
   - `https://lundgrendigital.se/lokal-sok/`
   Begär indexering för respektive sida om den ännu inte är indexerad. Gör inte upprepade begäranden; en gång per ny eller väsentligt ändrad sida räcker.
7. Efter 7–14 dagar: kontrollera **Sidor** för indexeringsfel och **Prestanda → Sökresultat** för första visningar, sökfraser och klick.

**Klart när:** Domänegendomen är verifierad, sitemap är godkänd och de två sidorna är begärda för indexering.

### 2. Google Business Profile

**Förutsättning:** Använd en korrekt juridisk verksamhet och ett Google-konto som Hannes kontrollerar. Publicera inte en bostadsadress om kunder inte tas emot där.

1. Gå till <https://www.google.com/business/> och välj **Hantera nu**.
2. Ange företagsnamnet exakt: `Lundgren Digital`. Använd samma stavning på webbplats, fakturor och övriga företagsprofiler.
3. Välj den mest precisa huvudkategorin som Google erbjuder. Första utgångspunkt: **Marketing consultant** eller **Website designer**. Välj den som bäst beskriver den huvudsakliga tjänst som faktiskt säljs; lägg övriga som sekundära kategorier först efter att profilen är verifierad.
4. På frågan om plats: välj **Jag levererar varor och tjänster till mina kunder** om verksamheten är ett tjänsteföretag utan kundmottagning. Välj inte en offentlig kontorsadress om den inte kan ta emot kunder under angivna öppettider.
5. Ange serviceområden: **Åkersberga** och **Stockholm**. Lägg bara till fler områden som ni rimligen kan betjäna.
6. Lägg in webbplats: `https://lundgrendigital.se/` och kontaktmejl `hannes@lundgrendigital.se`. Lägg bara in telefonnummer om det är ett nummer som faktiskt besvaras av verksamheten.
7. Skriv en kort beskrivning utan superlativ och utan sökordsstapling. Förslag:
   > Lundgren Digital hjälper mindre företag i Åkersberga och Stockholm med AI-automation, hemsidor och lokal söksynlighet. Vi gör kundflöden tydligare, minskar manuellt arbete och bygger digitala lösningar som går att använda i vardagen.
8. Skapa tjänster med tydliga namn och korta beskrivningar:
   - AI-automation för kundflöden
   - Hemsidor för mindre företag
   - Lokal söksynlighet / Local Search Sprint
9. Lägg in 5–10 äkta bilder: logotyp, arbetsmiljö och eget material. Använd inte AI-genererade bilder som ska föreställa kundprojekt eller kontor som inte finns.
10. Genomför Googles verifieringsmetod. Metoden bestäms av Google och kan vara video, telefon, e-post eller post. Lämna aldrig ut inloggningsuppgifter eller verifieringskod till någon annan.

**Klart när:** Profilen är verifierad, korrekt konfigurerad som tjänsteföretag och har webbplats, serviceområden, tjänster, beskrivning och autentiska bilder.

### 3. Mätning och månadsrutin

1. Skapa en enkel månadsrad med datum, Search Console-visningar, klick, toppsökningar, indexerade sidor, Google-profilens webbplatsklick/samtal och verkliga förfrågningar.
2. Följ dessa initiala sökteman — inte en enskild "rank":
   - AI-automation för småföretag Åkersberga
   - hemsida för småföretag Åkersberga
   - lokal SEO Åkersberga
   - Google Business Profile hjälp Stockholm
3. Kontrollera en gång per månad: Search Console, Business Profile Performance, nya recensioner, kontaktmejl/formulär och eventuella indexeringsfel.
4. Dokumentera förändringar på sajten och i profilen tillsammans med mätvärdena. Efter minst 90 dagar kan materialet bli ett transparent pilotcase.

### 4. Innehåll och trovärdighet

1. Publicera först när underlaget finns: ett faktiskt case eller en tydlig processartikel från Lundgren Digital. Gör inga påståenden om resultat som ännu inte kan beläggas.
2. Sök relevanta lokala omnämnanden: företagsnätverk, branschregister, samarbeten eller lokala föreningar. Prioritera relevans framför antal.
3. Be om recension först efter ett riktigt genomfört uppdrag. Köp aldrig recensioner, erbjud inte belöning för positiva omdömen och be inte bara utvalda nöjda kunder.

## Teknisk status (2026-08-14)

- `https://lundgrendigital.se/` och `https://lundgrendigital.se/lokal-sok/` har giltig JSON-LD för `ProfessionalService` respektive `Service`.
- `sitemap.xml` finns och innehåller den nya Local sök-sidan.
- Publicerat på `main` i commit `9a9d92f`.
- Nästa blockerande steg är Google-kontots ägarskapsverifiering; det kan inte ersättas av kodändringar på sajten.
