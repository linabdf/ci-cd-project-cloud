FROM node:18-slim

WORKDIR /app

# Copier uniquement package.json + package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code (serveur, public/, etc)
COPY . .

# Obligatoire pour Cloud Run
EXPOSE 8080

# Commande de démarrage
CMD ["npm", "start"]
