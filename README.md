# Orthographiq

Voici le test technique de recrutement pour le poste de lead dev

## Ce qui a été fait

-   Création d'un monorepo avec nx
-   Développement du back avec typescript, expressjs et MongoDB. Le code se trouve dans le dossier apps/api
-   Développement du back avec typescript, nest et MongoDB. Le code se trouve dans le dossier apps/nest-api. C'est le même que le premier back, l'objectif était juste de tester nest
-   Développement du front avec vue3, vuetify, pinia et vue-router. Le code se trouve dans le dossier apps/front
-   Création d'une librairie dans le dossier shared, contenant des enumérations, des types et des DTO. Ce code est utilisé à la fois par le front et le back, d'où la création d'une librairie partagée
-   dockerisation de l'application
-   Tests unitaires:
  	- Côté back, les controllers, services, repository et helpers ont été testés
    - Côté front, les composants et les vues ont été testés 

## Ce qui a été envisagé

-   un découpage plus avancé sous forme de micro services
-   mise en place d'un pattern CQRS
-   l'ajout d'un message broker, de type rabbitmq
-   utilisation d'une clean archi
-   export en PDF des résultats du test

Les 4 premiers points n'ont pas été fait car le code est relativement simple, il ne fallait pas tomber dans de l'over engineering

Les 2 derniers n'ont pas été fait pour des questions de temps

## Démarrer l'application

L'application a été développée pour être compatible avec node 20.7

Avant de pouvoir la démarrer, il faut modifier le fichier .env.docker

Pour démarrer le front et le back, il suffit de lancer la commande "docker-compose up"

Sans modification du .env.docker, l'api sera accessible à l'url http://localhost:3000/, et le front à l'url http://localhost

Lors du premier lancement, les questions seront automatiquement insérées en base

## Vidéo de rendu

La vidéo screenshot comprenant des explications est disponible à la racine du repo, il s'agit du fichier rendu.mp4
