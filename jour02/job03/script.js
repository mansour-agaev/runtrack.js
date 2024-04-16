// Sélection de l'élément bouton et de l'élément paragraphe (compteur)
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur
var nombreClics = 0;

// Fonction pour incrémenter le compteur et mettre à jour le texte du paragraphe
function addOne() {
    nombreClics++;
    compteur.textContent = nombreClics;
}

// Ajout d'un gestionnaire d'événement au bouton
button.addEventListener("click", addOne);
