function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
const annee = 2024;
console.log(`L'année ${annee} est bissextile : ${bisextile(annee)}`);
