#  motoMagasin
 
Une application web pour découvrir et filtrer une sélection de motos haut de gamme en temps réel.
 
![Statut](https://img.shields.io/badge/statut-en%20développement-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
 
##  Démo en ligne
 
 Voir la démo:  https://ennigro.github.io/motoMagasin/
 
##  Aperçu
 
<!-- Ajoute ici une capture d'écran ou un GIF de l'app -->
<!-- ![Aperçu](./screenshot.png) -->
 
##  Fonctionnalités
 
-  Recherche en temps réel par nom, marque ou catégorie
-  Design responsive (mobile, tablette, desktop)
-  Cartes moto avec image, prix, année, cylindrée et description
-  Chargement dynamique des données depuis un fichier JSON
-  Message clair quand aucun résultat ne correspond à la recherche
##  Technologies utilisées
 
- **HTML5** — structure sémantique
- **CSS3** — classes utilitaires (style Tailwind), design responsive
- **JavaScript (ES6+)** — logique de filtrage, manipulation du DOM, `async/await`
- **TypeScript** — typage des données (`interface Motorcycle`, `type Category`)
##  Installation et exécution locale
 
1. Clone le dépôt :
```bash
   git clone https://github.com/TON-USERNAME/motoMagasin.git
   cd motoMagasin
```
 
2. Ouvre `index.html` directement dans ton navigateur, ou lance un petit serveur local :
```bash
   npx serve .
```
   ou avec Python :
```bash
   python3 -m http.server 5500
```
 
3. Ouvre `http://localhost:5500` dans ton navigateur.
> 💡 Si tu modifies `index.ts`, compile-le en JavaScript avec :
> ```bash
> tsc index.ts
> ```
 
## 📁 Structure du projet
 
```
motoMagasin/
├── index.html          # Structure de la page
├── index.js            # Logique de l'application (JavaScript)
├── index.ts             # Version TypeScript (source)
├── motorcycles.json     # Données des motos
├── styles.css           # Styles de l'application
└── README.md
```
 
## Prochaines étapes
 
- [ ] Backend avec **Node.js** + **Express**
- [ ] Base de données **MongoDB**
- [ ] Système d'authentification des utilisateurs
- [ ] Page de détails pour chaque moto
- [ ] Système de favoris
## 📄 Licence
 
Ce projet est sous licence MIT — voir le fichier [LICENSE](./LICENSE) pour plus de détails.
 
## 👤 Auteur
 
Développé avec ❤️ dans le cadre de mon apprentissage en développement web.