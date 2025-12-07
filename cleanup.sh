#!/bin/bash

# Variables
PROJECT_ID="ci-cd-cloudrun"
REGION="europe-west1"
SERVICE="hello-app"
KEEP_LAST_N=10  # garder les 5 dernières révisions

echo "Nettoyage des anciennes révisions Cloud Run..."

# Liste des révisions sans trafic
REVISIONS=$(gcloud run revisions list \
  --service $SERVICE \
  --region $REGION \
  --format="value(metadata.name)" \
  --sort-by="metadata.creationTimestamp")

# Supprimer les plus anciennes
COUNT=0
for REV in $REVISIONS; do
  COUNT=$((COUNT+1))
  if [ $COUNT -le $KEEP_LAST_N ]; then
    continue
  fi
  echo "Suppression de la révision : $REV"
  gcloud run revisions delete $REV --region $REGION --quiet
done

echo "Nettoyage terminé."
