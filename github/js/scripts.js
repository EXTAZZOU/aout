function createTable(notesJuin) {
    // Sélectionner le tableau
    const table = document.querySelector('table tbody');

    // Parcourir les données
    notesJuin.forEach(note => {
        // Créer une nouvelle ligne
        const tr = document.createElement('tr');

        // Ajouter les cellules à la ligne
        ['Dossier', 'Nom', 'Prénom', 'MAT1', 'DEV1', 'DEV2', 'WEBG2'].forEach(key => {
            const td = document.createElement('td');
            td.textContent = note[key];

            // Si la note est inférieure à 10, ajouter la classe 'low-score'
            if (['MAT1', 'DEV1', 'DEV2', 'WEBG2'].includes(key) && note[key] < 10) {
                td.classList.add('low-score');
            }

            tr.appendChild(td);
        });

        // Ajouter la ligne au tableau
        table.appendChild(tr);
    });
}
