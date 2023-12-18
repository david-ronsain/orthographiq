# Orthographiq

Voici le test technique de recrutement pour le poste de lead dev

## Ce qui a été fait

-   Création d'un monorepo avec nx
-   Développement du back avec typescript, expressjs et MongoDB. Le code se trouve dans le dossier apps/api
-   Développement du front avec vue3, vuetify, pinia et vue-router. Le code se trouve dans le dossier apps/front
-   Création d'une librairie dans le dossier shared, contenant des enumérations, des types et des DTO. Ce code est utilisé à la fois par le front et le back, d'où la création d'une librairie partagée

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

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

-   [Set up remote caching](https://nx.dev/core-features/share-your-cache)
-   [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
-   [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

-   [Join the community](https://nx.dev/community)
-   [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
-   [Follow us on Twitter](https://twitter.com/nxdevtools)
