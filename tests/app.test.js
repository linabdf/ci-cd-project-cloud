import {
    toUpper,
    reverseText,
    wordCount,
    charCount,
    isPalindrome,
    countVowels
} from './utils.js';

test("toUpper should convert text to uppercase", () => {
    expect(toUpper("hello")).toBe("HELLO");
});

test("reverseText should invert text", () => {
    expect(reverseText("abc")).toBe("cba");
});

test("wordCount should count words correctly", () => {
    expect(wordCount("hello world")).toBe(2);
    expect(wordCount("   hello   world   ")).toBe(2);
    expect(wordCount("")).toBe(0);
});

test("charCount should count characters without spaces", () => {
    expect(charCount("hello world")).toBe(10);
});

test("isPalindrome should detect palindromes", () => {
    expect(isPalindrome("kayak")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
});

test("countVowels should count vowels including accentuated", () => {
    expect(countVowels("bonjour")).toBe(3);      // o, o, u
    expect(countVowels("Éléphant")).toBe(3);     // é, é, a
});
