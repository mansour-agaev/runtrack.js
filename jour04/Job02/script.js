function jsonValueKey(jsonString, key) {
    try {
        // Analyser la chaîne JSON en un objet JavaScript
        const jsonObject = JSON.parse(jsonString);

        // Vérifier si la clé existe dans l'objet
        if (jsonObject.hasOwnProperty(key)) {
            // Retourner la valeur associée à la clé
            return jsonObject[key];
        } else {
            throw new Error("La clé spécifiée n'existe pas dans l'objet JSON.");
        }
    } catch (error) {
        console.error("Erreur:", error.message);
        return null; // Retourner null en cas d'erreur
    }
}

// Exemple d'utilisation
const jsonString = '{"name": "La Plateforme", "adress": 8 rue dhozier, "city": "Marseille"}';
const key = "city";
const cityValue = jsonValueKey(jsonString, key);
console.log(cityValue); // Output: Marseille

