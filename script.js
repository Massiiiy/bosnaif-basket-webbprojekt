// FILTRERING AV MATCHER
const filterKnappar = document.querySelectorAll(".match-filter button");
const matcher = document.querySelectorAll(".match");

filterKnappar.forEach(function(knapp) {
    knapp.addEventListener("click", function() {
        const valtFilter = knapp.textContent.toLowerCase();

        matcher.forEach(function(match) {
            if (valtFilter === "alla" || match.dataset.type === valtFilter) {
                match.style.display = "block";
            } else {
                match.style.display = "none";
            }
        });
    });
});

// INTRESSEANMÄLAN
const formular = document.querySelector("#intresse-formular");

formular.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Tack för din intresseanmälan!");
    formular.reset();
});