# 💻 PC Market - Interface E-commerce Front-End


Une interface web moderne, réactive et dynamique pour une vitrine de commerce électronique spécialisée dans la vente d'ordinateurs portables (Développement, Professionnel, Bureautique).

Ce projet est conçu comme un **Frontend Showcase** pour démontrer des compétences en manipulation du DOM, en filtrage de données en temps réel et en intégration de design moderne (Glassmorphism, Gradients) sans dépendre d'un framework lourd.

##  Fonctionnalités Principales

* **Recherche en Temps Réel (Live Search) :** Filtrage instantané des ordinateurs par nom, marque ou catégorie dès la saisie de l'utilisateur.
* **Design Moderne (UI/UX) :** Utilisation de Tailwind CSS pour un rendu épuré, incluant des effets de *Glassmorphism* sur la barre de navigation et des dégradés profonds.
* **Génération Dynamique (DOM Manipulation) :** Rendu des cartes produits généré entièrement via JavaScript (Vanilla JS) à partir d'un fichier de données local.
* **Totalement Responsive :** L'interface s'adapte parfaitement aux écrans d'ordinateurs, de tablettes et de smartphones.
* **Architecture Orientée Données :** L'utilisation d'un fichier `computers.json` structuré simule parfaitement la consommation d'une API REST, préparant le terrain pour une future intégration Backend/IA.

##  Technologies Utilisées

* **HTML5** : Structure sémantique.
* **CSS3 / Tailwind CSS (CDN)** : Stylisation rapide, utilitaires CSS, animations et responsivité.
* **JavaScript (ES6+)** : Logique métier, requêtes asynchrones (`fetch`), et manipulation du DOM.
* **Lucide Icons** : Icônes vectorielles légères.

##  Installation et Lancement

Ce projet est un site statique (Static Web App). Aucun serveur Node.js n'est requis pour faire tourner cette version de démonstration.

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/votre-nom-utilisateur/pcMarket.git](https://github.com/votre-nom-utilisateur/pcMarket.git)
    ```
2.  **Ouvrir le projet :**
    Ouvrez le dossier `frontend` dans votre éditeur de code (ex: VS Code).
3.  **Lancer localement :**
    Utilisez l'extension **Live Server** sur VS Code ou ouvrez simplement le fichier `index.html` dans votre navigateur.

##  Structure du Projet

```text
📦 pcMarket
 ┃ ┣  index.html       # Structure principale de la page
 ┃ ┣  styles.css       # Styles personnalisés (si nécessaires)
 ┃ ┣  index.js         # Logique de récupération de données et manipulation DOM
 ┃ ┗  computers.json   # Base de données locale (Mock Data)
 ┗  README.md