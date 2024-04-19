document.getElementById('filtrer').addEventListener('click', () => {
    const formData = new FormData(document.getElementById('filterForm'));
    const queryParams = new URLSearchParams(formData).toString();

    fetch(`pokemon.json?${queryParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier');
            }
            return response.json();
        })
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    fetch('pokemon.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier');
            }
            return response.json();
        })
        .then(data => {
            displayPokemonData(data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});

function displayPokemonData(data) {
    const table = document.getElementById('pokemonData');
    table.innerHTML = ''; // Clear the table

    // Create table header
    const headerRow = table.insertRow();
    for (const key in data[0]) {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    }

    // Populate table with Pokémon data
    data.forEach(pokemon => {
        const row = table.insertRow();
        for (const key in pokemon) {
            const cell = row.insertCell();
            cell.textContent = pokemon[key];
        }
    });
}
