# Orthographiq

Voici le test technique de recrutement pour le poste de lead dev

## Ce qui a été fait

-   Création d'un monorepo avec nx
-   Développement du back avec typescript, expressjs et MongoDB. Le code se trouve dans le dossier apps/api
-   Développement du front avec vue3, vuetify, pinia et vue-router. Le code se trouve dans le dossier apps/front
-   Création d'une librairie dans le dossier shared, contenant des enumérations, des types et des DTO. Ce code est utilisé à la fois par le front et le back, d'où la création d'une librairie partagée
-   Tests unitaires:
  	- Côté back, seuls les helpers ont été testés
    - Côté front, les composants et les vues ont été testés 

## Ce qui a été envisagé

-   un découpage plus avancé sous forme de micro services
-   mise en place d'un pattern CQRS
-   l'ajout d'un message broker, de type rabbitmq
-   utilisation d'une clean archi
-   dockerisation de l'application
-   export en PDF des résultats du test

Les 4 premiers points n'ont pas été fait car le code est relativement simple, il ne fallait pas tomber dans de l'over engineering

Les 2 derniers n'ont pas été fait pour des questions de temps

## Start the app

L'application a été développée pour être compatible avec node 20.7

Avant de pouvoir la démarrer, il faut renommer le fichier .env.template en .env

Pour démarrer le front et le back, il suffit de lancer la commande "npm run serve". Pour lancer uniquement le front, utiliser la commande "nx serve front", et pour lancer uniquement le back, "nx serve api"

Sans modification du .env, l'api sera accessible à l'url http://localhost:3000/, et le front à l'url http://localhost:3001

Lors du premier lancement, les questions seront automatiquement insérées en base

## Vidéo de rendu

La vidéo screenshot comprenant des explications est disponible à la racine du repo, il s'agit du fichier rendu.mp4
