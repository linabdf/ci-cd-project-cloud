// Fonction pour supprimer les chiffres
export function removeNumber(input) {
    return input.replace(/[0-9]/g, "");
}

// Fonction pour l'affichage dans le HTML
export function showText() {
    const input = document.getElementById('userInput');
    const result = document.getElementById('result');
    result.innerText = "Tu as écrit : " + input.value;
}

// Event listener pour l'input
window.removeNumber = function() {
    const inputElem = document.getElementById('userInput');
    inputElem.value = removeNumber(inputElem.value);
}

// Event listener pour le bouton
window.showText = showText;
