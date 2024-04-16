// Sélection de l'élément textarea
var keylogger = document.getElementById("keylogger");

// Gestionnaire d'événement pour les touches pressées
document.addEventListener("keydown", function (event) {
    var lettre = event.key.toLowerCase(); // Obtenir la lettre de la touche pressée, convertie en minuscule

    if (/[a-z]/.test(lettre)) { // Vérifier si la touche pressée est une lettre de l'alphabet
        if (document.activeElement !== keylogger) {
            // Si le focus n'est pas dans le textarea, ajouter la lettre une fois
            keylogger.value += lettre;
        } else {
            // Si le focus est dans le textarea, ajouter la lettre deux fois
            keylogger.value += lettre + lettre;
        }
    }
});
