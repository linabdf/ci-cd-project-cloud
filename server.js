import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 8080;

// Correction pour __dirname avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir les fichiers statiques (HTML, CSS, JS…)
app.use(express.static(path.join(__dirname, "public")));

// Route principale : renvoie index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ------------------------------
// 🚑 Route Health Check (Smoke Test)
// ------------------------------
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        version: process.env.VERSION || "unknown"
    });
});

// Obligatoire pour Cloud Run
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});
