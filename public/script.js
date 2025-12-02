// Fonction pour supprimer les chiffres
export function removeNumber(input) {
    return input.replace(/[0-9]/g, "");
}

// Afficher texte simple
function showText() {
    const text = document.getElementById("userInput").value;
    document.getElementById("result").innerText = "Vous avez écrit : " + text;
}

// Mettre en majuscules
function showUpper() {
    const text = document.getElementById("userInput").value;
    document.getElementById("result").innerText = text.toUpperCase();
}

// Inverser le texte
function showReversed() {
    const text = document.getElementById("userInput").value;
    document.getElementById("result").innerText = text.split("").reverse().join("");
}

// Compter les mots
function showWordCount() {
    const text = document.getElementById("userInput").value;
    const words = text.trim().split(/\s+/).filter(Boolean);
    document.getElementById("result").innerText = "Nombre de mots : " + words.length;
}

// Compter caractères sans espaces
function showCharCount() {
    const text = document.getElementById("userInput").value;
    const count = text.replace(/\s/g, "").length;
    document.getElementById("result").innerText = "Nombre de caractères (sans espaces) : " + count;
}

// Vérifier palindrome
function isPalindrome() {
    const text = document.getElementById("userInput").value.toLowerCase().replace(/[^a-z0-9]/g, "");
    return text === text.split("").reverse().join("");
}

function showPalindrome() {
    document.getElementById("result").innerText = isPalindrome() ? "C'est un palindrome ✅" : "Ce n'est pas un palindrome ❌";
}

// Compter voyelles
function countVowels() {
    const text = document.getElementById("userInput").value.toLowerCase();
    const matches = text.match(/[aeiouyàâäéèêëïîôöùûü]/g);
    return matches ? matches.length : 0;
}

function showVowels() {
    document.getElementById("result").innerText = "Nombre de voyelles : " + countVowels();
}

// Afficher toutes les infos avancées
function showAdvancedInfo() {
    const text = document.getElementById("userInput").value;
    const info = `
Texte original : ${text}
Majuscules : ${text.toUpperCase()}
Inversé : ${text.split("").reverse().join("")}
Nombre de mots : ${text.trim().split(/\s+/).filter(Boolean).length}
Nombre de caractères (sans espaces) : ${text.replace(/\s/g, "").length}
Palindrome : ${isPalindrome() ? "Oui" : "Non"}
Voyelles : ${countVowels()}
        `;
    document.getElementById("result").innerText = info;
}