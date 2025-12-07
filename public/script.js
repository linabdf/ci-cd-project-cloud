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

// Liaison des boutons aux fonctions
document.querySelector("button[onclick='showText()']").addEventListener("click", showText);
document.querySelector("button[onclick='showUpper()']").addEventListener("click", showUpper);
document.querySelector("button[onclick='showReversed()']").addEventListener("click", showReversed);
document.querySelector("button[onclick='showWordCount()']").addEventListener("click", showWordCount);
document.querySelector("button[onclick='showCharCount()']").addEventListener("click", showCharCount);
document.querySelector("button[onclick='showPalindrome()']").addEventListener("click", showPalindrome);
document.querySelector("button[onclick='showVowels()']").addEventListener("click", showVowels);
