// script.js
import {
    removeNumber,
    toUpper,
    reverseText,
    wordCount,
    charCount,
    isPalindrome,
    countVowels
} from "../utils.js";

// Afficher texte simple
function showText() {
    const text = document.getElementById("userInput").value;
    displayResult("Texte simple", text);
}

// Mettre en majuscules
function showUpper() {
    const text = document.getElementById("userInput").value;
    displayResult("Majuscules", toUpper(text));
}

// Inverser le texte
function showReversed() {
    const text = document.getElementById("userInput").value;
    displayResult("Texte inversé", reverseText(text));
}

// Compter les mots
function showWordCount() {
    const text = document.getElementById("userInput").value;
    displayResult("Nombre de mots", wordCount(text));
}

// Compter caractères sans espaces
function showCharCount() {
    const text = document.getElementById("userInput").value;
    displayResult("Caractères (sans espaces)", charCount(text));
}

// Vérifier palindrome
function showPalindrome() {
    const text = document.getElementById("userInput").value;
    const result = isPalindrome(text) ? "C'est un palindrome ✅" : "Ce n'est pas un palindrome ❌";
    displayResult("Palindrome", result);
}

// Compter voyelles
function showVowels() {
    const text = document.getElementById("userInput").value;
    displayResult("Voyelles", countVowels(text));
}

// Afficher une carte de résultat
function displayResult(title, content) {
    const container = document.getElementById("resultsContainer");
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `<strong>${title} :</strong> <p>${content}</p>`;
    container.appendChild(card);
}
