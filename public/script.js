import {
    removeNumber,
    toUpper,
    reverseText,
    wordCount,
    charCount,
    isPalindrome,
    countVowels
} from "../utils.js";

// Sélection de l’input et du conteneur de résultats
const userInput = document.getElementById("userInput");
const resultsContainer = document.getElementById("resultsContainer");

// Fonction pour afficher une carte de résultat
function displayResult(title, content) {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `<strong>${title} :</strong> <p>${content}</p>`;
    resultsContainer.appendChild(card);
}

// Fonctions de traitement
function showText() {
    displayResult("Texte simple", userInput.value);
}

function showUpper() {
    displayResult("Majuscules", toUpper(userInput.value));
}

function showReversed() {
    displayResult("Texte inversé", reverseText(userInput.value));
}

function showWordCount() {
    displayResult("Nombre de mots", wordCount(userInput.value));
}

function showCharCount() {
    displayResult("Caractères (sans espaces)", charCount(userInput.value));
}

function showPalindrome() {
    const result = isPalindrome(userInput.value)
        ? "C'est un palindrome ✅"
        : "Ce n'est pas un palindrome ❌";
    displayResult("Palindrome", result);
}

function showVowels() {
    displayResult("Voyelles", countVowels(userInput.value));
}

// Fonction infos avancées
function showAdvancedInfo() {
    const text = userInput.value;
    const info = `
Texte simple : ${text}
Majuscules : ${toUpper(text)}
Texte inversé : ${reverseText(text)}
Nombre de mots : ${wordCount(text)}
Nombre de caractères : ${charCount(text)}
Palindrome : ${isPalindrome(text) ? "✅" : "❌"}
Voyelles : ${countVowels(text)}
`;
    displayResult("Infos avancées", info);
}

// Liaison des boutons
document.getElementById("btnText").addEventListener("click", showText);
document.getElementById("btnUpper").addEventListener("click", showUpper);
document.getElementById("btnReversed").addEventListener("click", showReversed);
document.getElementById("btnWordCount").addEventListener("click", showWordCount);
document.getElementById("btnCharCount").addEventListener("click", showCharCount);
document.getElementById("btnPalindrome").addEventListener("click", showPalindrome);
document.getElementById("btnVowels").addEventListener("click", showVowels);
document.getElementById("btnAdvanced").addEventListener("click", showAdvancedInfo);
