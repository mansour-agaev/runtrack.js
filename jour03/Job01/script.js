// Sélection de la balise <p> contenant la citation
const quoteElement = document.getElementById('quote');

// Sélection du bouton pour afficher le texte
const showButton = document.getElementById('showButton');
showButton.addEventListener('click', function () {
    quoteElement.style.display = 'block'; // Affiche le texte en changeant le style de l'élément
});

// Sélection du bouton pour masquer le texte
const hideButton = document.getElementById('hideButton');
hideButton.addEventListener('click', function () {
    quoteElement.style.display = 'none'; // Masque le texte en changeant le style de l'élément
});
