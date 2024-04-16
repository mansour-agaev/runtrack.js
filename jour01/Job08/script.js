// Fonction pour vérifier si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;

    if (nombre % 2 === 0 || nombre % 3 === 0) return false;

    var i = 5;
    while (i * i <= nombre) {
        if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

// Fonction pour calculer la somme de deux nombres premiers
function sommeNombresPremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Exemple d'utilisation de la fonction
var resultat = sommeNombresPremiers(3, 5); // 3 et 5 sont premiers, donc leur somme est 8
console.log(resultat); // Affiche 8

resultat = sommeNombresPremiers(4, 7); // 4 n'est pas premier, donc retourne false
console.log(resultat); // Affiche false

