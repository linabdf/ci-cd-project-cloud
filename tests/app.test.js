import { removeNumber } from "../public/script.js";

test("removeNumber enlève tous les chiffres", () => {
    expect(removeNumber("abc123")).toBe("abc");
});

test("removeNumber garde les lettres et caractères spéciaux", () => {
    expect(removeNumber("Bonjour!42")).toBe("Bonjour!");
});

test("removeNumber avec texte sans chiffre", () => {
    expect(removeNumber("Test")).toBe("Test");
});
