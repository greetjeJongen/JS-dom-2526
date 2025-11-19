// Oefening 1: Tijdstip van laden

const pTijdstip = document.createElement("p");
const now = new Date();
const currentTime = now.toLocaleTimeString();
pTijdstip.innerHTML = currentTime;
document.getElementById("oef1").appendChild(pTijdstip);

// Oefening 2: Voetbal uitslagen 
const voetbal = (ploegen, datum, aantalRodeKaarten) => {
    const article = document.createElement("article");
    article.innerHTML = `
    <h3>${ploegen}</h3>
      <p>${datum}</p>
      <p>Rode kaarten: ${aantalRodeKaarten}</p>`
    if (aantalRodeKaarten > 0)
        article.querySelector("p:nth-child(3").classList.add("rodeKaart");
    document.getElementById("oef2").appendChild(article);

}
voetbal("Leuven-Westerlo", "25/11/2025", 7);
voetbal("Leuven-Standard", "14/12/2025", 0);

// Oefening 3: Waterpolo uitslagen
document.getElementById("Leuven-Oostende").remove();
document.querySelector("#oef3 > article:nth-child(1) > p:nth-child(3)").remove();
document.querySelector("#oef3 > article:nth-child(1) > h3").removeAttribute("style");

// Oefening 4: Getallenvierkant
const zijde = 14; // kan je later aanpassen om grotere of kleinere vierkanten te tekenen

// schrijf hieronder je code  
const table = document.createElement("table");
document.getElementById("oef4").append(table);

const createTableRow = (rowNumber) => {
    const tr = document.createElement("tr");
    document.querySelector("#oef4 table").appendChild(tr);
    for (let i = (rowNumber - 1) * zijde + 1; i <= rowNumber * zijde; i++) {
        const td = document.createElement("td");
        td.innerHTML = i;
        if (i % 2 === 0)
            td.style.textDecoration = "underline";
        if (i % 3 === 0)
            td.style.fontWeight = "bold";
        if (i % 5 === 0)
            td.style.color = "red";
        tr.appendChild(td);
    }
}

for (let j = 1; j <= zijde; j++) {
    createTableRow(j);
}