function citation() {
    var citationElement = document.getElementById("citation");
    if (citationElement) {
        var citationText = citationElement.textContent;
        console.log(citationText);
    } else {
        console.error("L'élément avec l'ID 'citation' n'a pas été trouvé.");
    }
}

// Ajout d'un gestionnaire d'événement au bouton
var buttonElement = document.getElementById("button");
if (buttonElement) {
    buttonElement.addEventListener("click", citation);
} else {
    console.error("L'élément avec l'ID 'button' n'a pas été trouvé.");
}
