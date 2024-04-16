function jourTravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1;
    var jour = date.getDate();

    // Tableau des jours fériés en 2024
    var joursFeries = [
        "01-01", // Nouvel An
        "04-05", // Lundi de Pâques
        "01-05", // Fête du Travail
        "08-05", // Victoire des Alliés
        "13-05", // Ascension
        "24-06", // Fête Nationale
        "15-08", // Assomption
        "11-11", // Armistice
        "25-12"  // Noël
    ];

    var jourSemaine = date.getDay();

    // Vérifier si c'est un jour férié
    var dateFerie = (jour < 10 ? '0' : '') + jour + "-" + (mois < 10 ? '0' : '') + mois;
    if (joursFeries.includes(dateFerie)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié");
    } else if (jourSemaine === 0 || jourSemaine === 6) { // Samedi (6) ou dimanche (0)
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé");
    }
}

// Exemple d'utilisation de la fonction
var maDate = new Date(2024, 0, 1); // 1er janvier 2024
jourTravaille(maDate);

