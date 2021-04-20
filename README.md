# Javascript - Examen final

Pour travailler sur cet examen, 2 choix s'offrent à vous :
- Faire un fork du projet sur Github et me le transmettre à la fin de l'examen (en faisant une Pull Request et/ou en me l'envoyant)
- [Télécharger le zip du projet à cette adresse](https://github.com/Dreeckan/js-exam/archive/refs/heads/main.zip) et me transmettre un Zip à la fin de l'examen

## Modalités 

- L'examen est prévu pour une durée de 3 heures
- Un retard dans le rendu pourra être pénalisé (-1 point si rendu après 18h, -2 si rendu après 20h)

## Liste des exercices et barème

Le barème indiqué est à titre indicatif, il peut être modifié au moment des corrections.

1. Syntaxe et bases du langage (3 points)
2. Conditions et boucles (3 points)
3. DOM, événement et JQuery (5 points)
4. AJAX (5 points)
5. POO (4 points)

## 1. Syntaxe et bases du langage (3 points)

Pour cette partie, nous allons travailler dans les fichiers `1-bases/1-bases.html` et `1-bases/1-bases.js`. Mettez à jour le fichier HTML pour inclure le fichier JS nécessaire.

### 1.1. Utilisation des tableaux (1 point)

- Déclarer un tableau nommé contenant les valeurs suivantes : `'test'`, `42`, `0.0`
- Ajouter ensuite un élément à la fin du tableau, avec pour valeur `'second test'`
- Retourner l'index de la valeur `'test'` à l'aide d'une méthode des tableaux vue en cours (et l'afficher dans la console)

### 1.2. Fonctions (2 points)

- Écrire une fonction `multiply` :
  - prenant 2 paramètres `x` et `y`
  - Si l'un de ces deux paramètres n'est pas un nombre, retourner 0
  - Sinon, retourner le résultat de la multiplication de `x` par `y` (`x * y`)
- Faire un appel de cette fonction, avec les arguments de votre choix, et afficher le résultat dans la console

- Écrire une fonction `affine` :
  - prenant 2 paramètres `x` et `y`
  - Si l'un de ces deux paramètres n'est pas un nombre, retourner 0
  - Sinon
    - Si `x` est strictement supérieur à 8, retourner le résultat de `4x + 3y + 6`
    - Sinon, si `y` est inférieur ou égal à 4, retourner le résultat de `3x - 2y + 12`
    - Sinon, retourner le résultat de `2x + 2y + 2`
- Faire 3 appels de cette fonction, pour récupérer les 3 cas, et afficher les résultats dans la console

## 2. Conditions et boucles (3 points)

Pour cette partie, nous allons travailler dans les fichiers `2-loops/2-loops.html` et `2-loops/2-loops.js`. Mettez à jour le fichier HTML pour inclure le fichier JS nécessaire.

### 2.1. Parcours de tableau (1.5 points)

- Utiliser 3 types de boucles différents pour afficher le contenu du tableau `shoes`, présent dans le fichier `loops/2-loops.js` (nous avons vu 5 types de boucles en cours). À chaque itération (passage dans la boucle), afficher la valeur dans la console.

### 2.2. Utiliser `prompt()` (1.5 points)

- Demander un nombre à l'utilisateur (fonction `prompt()`), entre 0 et 4 (0 et 4 inclus)

- S'il entre autre chose qu'un nombre ou un nombre en dehors des valeurs autorisées, continuer à lui demander un nombre (afficher le message tant que la réponse n'est pas conforme aux attentes)
- Afficher avec `alert()` le nom de chaussure (dans le tableau `shoes`) choisi par l'utilisateur (on utilise le nombre `n` entré pour récupérer l'entrée `n` du tableau)

## 3. DOM, événements et JQuery (5 points)

Pour cette partie, nous allons travailler dans les fichiers `3-dom/3-dom.html` et `3-dom/3-dom.js`. Mettez à jour le fichier HTML pour inclure le fichier JS nécessaire.

Intégrer JQuery dans le fichier `3-dom/3-dom.html` (soit en le téléchargeant et en ajoutant la balise `script`, soit en ajoutant la balise `script` avec un lien CDN)

### 3.2. Sélectionner et modifier du contenu (2 points)

- Sélectionner le titre du premier article (balise `h2`) avec VanillaJS
  - Remplacer le texte par `Un titre remplacé avec VanillaJS`
  
- Sélectionner ce même titre avec JQuery
  - Ajouter ce texte ` et complété avec JQuery`
  
- Sélectionner le champ de formulaire avec pour id `username` et mettre à jour sa valeur
  - Avec VanillaJS, lui donner la valeur `test VanillaJS`
  - Avec JQuery, lui donner la valeur `test Jquery`

### 3.3. Sélectionner et modifier les classes (1 point)

- Sélectionner tous les paragraphes des articles (balises `p`)
  - Avec VanillaJS, ajouter la classe `paragraph`

- Sélectionner le premier paragraphe de chaque article
  - Avec JQuery, ajouter la classe `summary`
  
### 3.4. Ajouter des event listeners (2 points)

- Avec VanillaJS, au clic sur les liens avec la classe `more`: 
  - empêcher le rechargement de la page
  - afficher le message `Récupéré avec VanillaJS` dans la console

- Ajouter un event listener lors de la soumission du formulaire (événement `submit`)
  - Empêcher le rechargement de la page
    - Avec VanillaJS **et** Jquery, afficher le contenu des champs `username` et `password` dans la console

## 4. AJAX (5 points)

Pour cette partie, nous allons travailler dans les fichiers `4-ajax/4-ajax.html` et `4-ajax/4-ajax.js`. Mettez à jour le fichier HTML pour inclure le fichier JS nécessaire.

Pour utiliser JQuery, intégrer JQuery dans le fichier `4-ajax/4-ajax.html` (soit en le téléchargeant et en ajoutant la balise `script`, soit en ajoutant la balise `script` avec un lien CDN)

Le fichier HTML contient déjà cette structure : 
```html
<div id="content">
    <h1 id="title"></h1>
    <img src="" id="image">
    <p id="desc"></p>
</div>
```

Nous allons [récupérer des données depuis cette API](https://fakerapi.it/en) et insérer les données récupérées dans le HTML. Les données auront cette forme : 

```json
{
    "status": "OK",
    "code": 200,
    "total": 1,
    "data": [
        {
            "title": "Consequatur et nihil nihil.",
            "description": "Consequatur optio harum accusantium ut vel et. Sit voluptate eaque consequatur possimus nobis fugiat. Beatae est nihil qui.",
            "url": "http://placeimg.com/640/480/any"
        }
    ]
}
```

- Avec `$.ajax()` ou `fetch()`
  - récupérer les données de [https://fakerapi.it/api/v1/images?_quantity=1](https://fakerapi.it/api/v1/images?_quantity=1)
  - une fois les données récupérées, ajouter le contenu de la propriété `data` dans le HTML :
    - `data.title` dans la balise avec l'id `title`
    - `data.description` dans la balise avec l'id `desc`
    - `data.url` dans la balise avec l'id `image` (attribut `src`)
  
- Avec `$.ajax()` ou `fetch()`
  - récupérer les données de [https://fakerapi.it/api/v1/images?_quantity=10](https://fakerapi.it/api/v1/images?_quantity=10)
  - une fois les données récupérées, ajouter le contenu de la propriété `data` dans le HTML
    - Cette fois-ci, créer un noeud par entrée du tableau `data`
      - `data.title` dans la balise `h1`
      - `data.description` dans la balise `p`
      - `data.url` dans la balise `img` (attribut `src`)
    - Ajouter ce noeud dans la `div` avec l'id `content-multiple`
```html
    <h1></h1>
    <img src="">
    <p id="desc"></p>
```

## 5. POO (4 points)

Pour cette partie, nous allons travailler dans les fichiers `5-poo/5-poo.html` et `5-poo/5-poo.js`. Mettez à jour le fichier HTML pour inclure le fichier JS nécessaire.
Un ensemble de données utilisable, une fois vos classes créées, est déjà présent dans `5-poo/5-poo.js`.

- Créer une classe `Product` avec les propriétés suivantes :
  - `name` (chaine de caractères) le nom du produit
  - `quantity` (nombre entier) la quantité de produits disponibles
  - `price` (nombre flottant) le prix en euros d'un produit

- Créer une classe `Cart` avec les propriétés suivantes
  - `customer` (chaine de caractères) le nom du client
  - `products` (tableau) les produits ajoutés au panier

- Écrire les méthodes suivantes dans `Cart`:
  - `addProduct()` qui prendre en paramètre un `Product` et l'ajoute au tableau `products` 
    - un même produit ne peut être qu'une seule fois dans le tableau, vérifier avec `this.products.includes(product)` si le produit est déjà dans le panier.
    - lorsqu'un produit est ajouté avec cette méthode, diminuer la valeur de `quantity` du produit de 1
  - `getTotal()` qui retourne le montant total du panier (en faisant la somme des prix des différents produits du panier)