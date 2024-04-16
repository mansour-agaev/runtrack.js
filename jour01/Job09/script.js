function tri(numbers, order) {
    // Vérification du paramètre order
    if (order !== "asc" && order !== "desc") {
        console.error("Le paramètre order doit être 'asc' ou 'desc'");
        return;
    }

    // Fonction de comparaison pour le tri ascendant
    function compareAsc(a, b) {
        return a - b;
    }

    // Fonction de comparaison pour le tri descendant
    function compareDesc(a, b) {
        return b - a;
    }

    // Tri selon l'ordre spécifié
    if (order === "asc") {
        return numbers.sort(compareAsc);
    } else {
        return numbers.sort(compareDesc);
    }
}

// Exemple d'utilisation de la fonction
var tableau = [3, 1, 5, 2, 4];

// Tri ascendant
console.log(tri(tableau.slice(), "asc")); // Affiche [1, 2, 3, 4, 5]

// Tri descendant
console.log(tri(tableau.slice(), "desc")); // Affiche [5, 4, 3, 2, 1]

