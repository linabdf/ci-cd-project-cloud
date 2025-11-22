from flask import Flask
import random

app = Flask(__name__)

@app.route('/')
def home():
    quote = random.choice([
        "💪 N'abandonne passs— chaque pas compte !",
        "🚀 Chaque ligne de code te rapproche du succès.",
        "🧠 Les erreurs sont les professeurs du progrès.",
        "🔥 Tu vas y arriver, continue d'avancer !",
        "✨ Rêve, code, persiste et recommence."
    ])
    return f"""
    <html>
        <head>
            <title>Motivation du Jour</title>
            <style>
                body {{
                    font-family: 'Segoe UI', sans-serif;
                    background: linear-gradient(135deg, #e3f2fd, #bbdefb);
                    color: #1a237e;
                    text-align: center;
                    padding-top: 15%;
                }}
                h1 {{
                    font-size: 28px;
                    margin-bottom: 20px;
                }}
                p {{
                    font-size: 22px;
                    color: #283593;
                }}
            </style>
        </head>
        <body>
            <h1>🌟 Citation du jour 🌟</h1>
            <p>{quote}</p>
        </body>
    </html>
    """

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
