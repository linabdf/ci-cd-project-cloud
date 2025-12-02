# Dockerfile pour Node.js / Express
FROM node:18-slim

# Répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install --production

# Copier le reste du code
COPY . .

# Port utilisé par Cloud Run
ENV PORT=8080

# Commande pour démarrer l'app
CMD ["npm", "start"]
