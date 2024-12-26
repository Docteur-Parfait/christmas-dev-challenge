# Christmas Dev Challenge 2024

Ce projet est un site web développé avec [Next.js](https://nextjs.org/) qui rassemble les liens, profils et dépôts GitHub de tous les participants au challenge de développement de Noël 2024.

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure) ou yarn (version 1.22 ou supérieure)

## Installation

Fork et Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/votre-utilisateur/christmas-dev-challenge.git
cd christmas-dev-challenge
npm install
# ou
yarn install
```

## Démarrage du serveur de développement

Pour démarrer le serveur de développement, exécutez :

```bash
npm run dev
# ou
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Structure du projet

Voici un aperçu de la structure des dossiers du projet :

```
/components
  /Home
    - Project.js
  /Items
    - ProjectItem.js
/pages
  - _app.js
  - index.js
/public
  /assets
    /projects
      - 1.png
      - 2.png
      - ...
/services
  - utils.js
```

## Composants

### Project

Le composant `Project` importe la liste des projets depuis `utils.js` et affiche chaque projet en utilisant le composant `ProjectItem`.

### ProjectItem

Le composant `ProjectItem` reçoit les données du projet via des props et affiche les informations du projet, y compris le nom de l'auteur, sa position, sa photo, et les liens vers le projet et le dépôt GitHub.

## Utilisation

Pour ajouter un nouveau projet, modifiez le fichier `utils.js` dans le dossier `services` et ajoutez un nouvel objet à la liste `projectList` :

```javascript
export const projectList = [
  {
    id: 1,
    authorName: "Nom de l'auteur",
    authorPosition: "Position de l'auteur",
    authorPhoto: "URL de la photo de l'auteur",
    authorLinkedin: "URL du profil LinkedIn de l'auteur",
    url: "URL du projet",
    github: "URL du dépôt GitHub",
  },
  // ...autres projets
];
```

## Déploiement

Le moyen le plus simple de déployer votre application Next.js est d'utiliser la [plateforme Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) créée par les développeurs de Next.js.

Consultez notre [documentation de déploiement Next.js](https://nextjs.org/docs/deployment) pour plus de détails.

## Ressources supplémentaires

Pour en savoir plus sur Next.js, consultez les ressources suivantes :

- [Documentation Next.js](https://nextjs.org/docs) - Apprenez-en plus sur les fonctionnalités et l'API de Next.js.
- [Apprendre Next.js](https://nextjs.org/learn) - Un tutoriel interactif Next.js.

Vous pouvez également consulter le [dépôt GitHub de Next.js](https://github.com/vercel/next.js) - vos retours et contributions sont les bienvenus !

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.
