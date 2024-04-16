// Code Konami
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var konamiCodePosition = 0;

window.addEventListener('keydown', function (event) {
    // Vérifier si la touche pressée correspond à la prochaine touche du code Konami
    if (event.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        // Si toutes les touches du code Konami ont été pressées
        if (konamiCodePosition === konamiCode.length) {
            activateKonamiMode(); // Activer le mode Konami
            konamiCodePosition = 0; // Réinitialiser la position du code Konami
        }
    } else {
        konamiCodePosition = 0; // Réinitialiser la position du code Konami si la touche pressée ne correspond pas
    }
});

// Fonction pour activer le mode Konami
function activateKonamiMode() {
    // Styles pour les couleurs du site intra.laplateforme.io
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
}
