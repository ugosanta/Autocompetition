// 1. Sélectionner les éléments HTML
const boutonTheme = document.getElementById('bouton-theme');
const corpsPage = document.body;

// 2. Charger le thème sauvegardé ou utiliser la préférence système
function chargerTheme() {
    const themeSauvegarde = localStorage.getItem('theme');
    
    if (themeSauvegarde) {
        // Utiliser le thème sauvegardé
        if (themeSauvegarde === 'light') {
            corpsPage.classList.add('light-mode');
            boutonTheme.textContent = 'Light';
        } else {
            corpsPage.classList.remove('light-mode');
            boutonTheme.textContent = 'dark';
        }
    } else {
        // Sinon, détecter la préférence système
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            corpsPage.classList.add('light-mode');
            boutonTheme.textContent = 'Light';
            localStorage.setItem('theme', 'light');
        } else {
            corpsPage.classList.remove('light-mode');
            boutonTheme.textContent = 'dark';
            localStorage.setItem('theme', 'dark');
        }
    }
}

// 3. Ajouter un événement au clic sur le bouton
boutonTheme.addEventListener('click', function() {
    
    // Basculer (ajouter/enlever) la classe 'light-mode' sur le body
    corpsPage.classList.toggle('light-mode');

    // Vérifier l'état actuel et sauvegarder
    if (corpsPage.classList.contains('light-mode')) {
        boutonTheme.textContent = 'Light';
        localStorage.setItem('theme', 'light');
    } else {
        boutonTheme.textContent = 'Dark';
        localStorage.setItem('theme', 'dark');
    }
});

// 4. Charger le thème au chargement de la page
chargerTheme();