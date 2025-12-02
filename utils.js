// utils.js
export function removeNumber(text) {
    return text.replace(/[0-9]/g, "");
}

export function toUpper(text) {
    return text.toUpperCase();
}

export function reverseText(text) {
    return text.split("").reverse().join("");
}

export function wordCount(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

export function charCount(text) {
    return text.replace(/\s/g, "").length;
}

export function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

export function countVowels(text) {
    const matches = text.toLowerCase().match(/[aeiouyàâäéèêëïîôöùûü]/g);
    return matches ? matches.length : 0;
}
