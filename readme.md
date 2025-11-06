Je krijgt voor deze opgave de HTML, de CSS en de startregel van het student.js bestand. Je schrijft code in student.js.

# 1. Voetbal uitslagen 
In index.html vind je div#oef1. 
- Schrijf JS code zodat deze HTML toegevoegd wordt aan de div:
```
    <article>
      <h3>Cercle Brugge - OH Leuven</h3>
      <p>8/11/2025</p>
      <p>Rode kaarten: 0</p>
    </article>
```
- Maak nu een functie voetbal(ploegen, datum, aantalRodeKaarten) die dezelfde HTML toevoegt aan de div, maar nu voor de gegeven ploegen, datum en aantal rode kaarten. Gebruik de functie om 2 extra voetbal uitslagen te maken.
- Pas de functie aan zodat de laatste regel rood wordt weergegeven als er minstens één rode kaart is. Gebruik de CSS klasse .rodeKaart hiervoor.

# 2. vierkant met getallen
 Schrijf code die een vierkant met de gegeven zijde maakt met opeenvolgende getallen, startend met 1. Dit moet het ongeveer worden:
![screenshot vierkant](img/screenshotVierkant.png)

Het ligt voor de hand om dit vierkant te maken via een HTML-tabel. Bekijk zeker even hoe je een tabel maakt in HTML. De elementen die je nodig hebt zijn table, tr en td. 

Bestudeer de CSS goed. Veelvouden van 2, 3 en 5 worden via een class anders getoond (vet, onderlijnd of in het rood).

Tips:
- Werk met functions (klassiek of vette pijl maakt niet uit)
- Deel het probleem op in deelproblemen: een tabel bestaat uit rijen, een rij bestaat uit aparte cellen …
- De variabele bovenaan student.js geeft de zijde van het vierkant. Als je die waarde wijzigt, wijzigt ook het formaat van het vierkant.
