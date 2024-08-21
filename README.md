# Gestion de Bibliothèque

Une application web de gestion de bibliothèque développée avec Vue.js 3 et la Composition API qui permet de gérer les livres, membres et les prêts.

## Fonctionnalités

1. **Gestion des Livres**:
   - Afficher la liste des livres
   - Ajouter un nouveau livre
   - Modifier les informations d'un livre existant
   - Supprimer un livre

2. **Gestion des Membres**:
   - Afficher la liste des membres
   - Ajouter un nouveau membre
   - Modifier les informations d'un membre existant
   - Supprimer un membre

3. **Gestion des Prêts**:
   - Afficher la liste des prêts
   - Enregistrer un nouveau prêt
   - Modifier les informations d'un prêt existant
   - Supprimer un prêt

## Installation

1. Clonez le dépôt Git :

   ```bash
       git clone https://github.com/FatimataAliouSall/gestion-bibliotheque.git
   ```

2. Naviguez jusqu'au répertoire du projet :

   ```bash
     cd gestion-bibliotheque
   ```

3. Installez les dépendances :

   ```bash
    npm install
    npm install vue-router@4
    npm install bootstrap@5                 
   ```
4. Démarrez le serveur de développement :

   ```bash
     npm run serve
   ```

5. Ouvrez votre navigateur et accédez à `http://localhost:5176/`.

## Structure du projet

Le projet est organisé de la manière suivante :

```
gestion-bibliotheque/
├── src/
│   ├── components/
│   │   ├── BookForm.vue
│   │   ├── BookList.vue
│   │   ├── BookEdit.vue
│   │   ├── MemberForm.vue
│   │   ├── MemberEdit.vue
│   │   ├── MemberList.vue
│   │   ├── LoanForm.vue
│   │   ├── LoanEdit.vue
│   │   └── LoanList.vue
│   ├── views/
│   │   ├── BooksView.vue
│   │   ├── MembersView.vue
│   │   ├── LoanView.vue
│   ├── stores/
│   │   ├── books.js
│   │   ├── members.js
│   │   └── loans.js
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── public/
└── package.json
```

- Le dossier `components` contient les composants réutilisables de l'application.
- Le dossier `views` contient les vues principales de l'application, chacune correspondant à une fonctionnalité.
- Le dossier `stores` contient les stores Pinia pour la gestion d'état globale.
- Le fichier `router/index.js` définit la configuration du routeur Vue.
- Le fichier `App.vue` est le composant racine de l'application.
- Le fichier `main.js` est le point d'entrée de l'application.

## Contribution

Si vous souhaitez contribuer à ce projet, n'hésitez pas à ouvrir une issue ou à soumettre une pull request. Toutes les contributions sont les bienvenues !


## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

[FatimataAliouSall](https://github.com/FatimataAliouSall/gestion-bibliotheque.git)


