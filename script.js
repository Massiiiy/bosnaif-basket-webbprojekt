 // FILTRERING AV MATCHER

const filterknappar = document.querySelectorAll(".match-filter button");
const matchKort = document.querySelectorAll(".match");

function filtreraMatcher(event) {
    const valdMatchtyp = event.currentTarget.textContent.trim().toLowerCase();

    matchKort.forEach(function (kort) {
        const visaMatch = valdMatchtyp === "alla" || kort.dataset.type === valdMatchtyp;

        kort.hidden = !visaMatch;
    });
}

filterknappar.forEach(function (knapp) {
    knapp.addEventListener("click", filtreraMatcher);
});

 // INTRESSEANMÄLAN

const intresseFormular = document.querySelector("#intresse-formular");
const bekraftelseMeddelande = document.querySelector("#tack-meddelande");

function visaTack(event) {
    event.preventDefault();

    const spelarensFornamn = document.querySelector("#fornamn").value;

    bekraftelseMeddelande.querySelector("strong").textContent = "Tack, " + spelarensFornamn + "!";

    intresseFormular.hidden = true;
    bekraftelseMeddelande.hidden = false;
}

intresseFormular.addEventListener("submit", visaTack);

 // HAMBURGERMENY

const menyKnapp = document.querySelector(".menu-toggle");
const huvudMeny = document.querySelector(".main-nav");
const menyLankar = document.querySelectorAll(".nav-link");

function vaxlaMeny() {
    huvudMeny.classList.toggle("open");
}

function stangMeny() {
    huvudMeny.classList.remove("open");
}

menyKnapp.addEventListener("click", vaxlaMeny);

menyLankar.forEach(function (lank) {
    lank.addEventListener("click", stangMeny);
});
