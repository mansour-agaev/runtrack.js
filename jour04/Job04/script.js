document.getElementById('update').addEventListener('click', () => {
    fetch('utilisateur.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de chargement du fichier');
            }
            return response.json();
        })
        .then(data => {
            displayUserData(data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});

function displayUserData(data) {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Clear the table body

    data.forEach(user => {
        const row = tableBody.insertRow();
        for (const key in user) {
            const cell = row.insertCell();
            cell.textContent = user[key];
        }
    });
}
