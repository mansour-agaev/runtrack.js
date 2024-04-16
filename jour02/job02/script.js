function showhide() {
    var article = document.getElementById("article");

    if (!article) {
        // Créer l'article
        article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        article.id = "article";
        document.body.appendChild(article);
    } else {
        // Supprimer l'article
        article.parentNode.removeChild(article);
    }
}
