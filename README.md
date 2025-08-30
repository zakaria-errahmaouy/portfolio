# Portfolio de Zakaria Errahmaouy

Portfolio professionnel développé avec Bootstrap 5 et optimisé pour les performances.

## 🚀 Fonctionnalités

- **Design responsive** : S'adapte parfaitement à tous les écrans
- **Navigation latérale** : Menu de navigation fixe avec image de profil
- **Sections complètes** : Profil, expérience, formation, compétences, centres d'intérêt et certifications
- **Performance optimisée** : Images compressées et CSS minifié
- **SEO friendly** : Métadonnées optimisées

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3/SCSS** : Styles avec variables et mixins
- **Bootstrap 5** : Framework CSS responsive
- **JavaScript** : Interactions et animations
- **Node.js** : Build tools et optimisation

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── scss/           # Styles SCSS source
│   ├── pug/            # Templates Pug
│   └── js/             # JavaScript source
├── dist/               # Fichiers de production
├── css/               # CSS compilé
├── assets/            # Images et ressources
└── scripts/           # Scripts de build
```

## 🚀 Installation et utilisation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm

### Installation
```bash
# Cloner le repository
git clone [url-du-repo]

# Installer les dépendances
npm install
```

### Développement
```bash
# Lancer le serveur de développement
npm start

# Ou en mode debug
npm run start:debug
```

### Production
```bash
# Build complet avec optimisation
npm run build
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `src/scss/variables/_colors.scss`

### Typographie
Les polices sont configurées dans `src/scss/variables/_typography.scss`

### Espacement
Les variables d'espacement sont dans `src/scss/variables/_spacing.scss`

## 📸 Optimisation des images

Le projet inclut un système d'optimisation automatique des images :

- **Compression automatique** : Les images sont automatiquement redimensionnées et compressées
- **Format optimisé** : Conversion en JPEG avec qualité optimale
- **Taille réduite** : Réduction de 98% de la taille des images

### Script d'optimisation
```bash
# Optimiser manuellement les images
npm run optimize:images
```

## 🔧 Scripts disponibles

- `npm run build` : Build complet avec optimisation
- `npm run clean` : Nettoyer les fichiers de build
- `npm run build:scss` : Compiler les styles SCSS
- `npm run build:pug` : Compiler les templates Pug
- `npm run optimize:images` : Optimiser les images
- `npm start` : Lancer le serveur de développement

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :
- **Mobile First** : Optimisé pour les petits écrans
- **Tablette** : Adaptation pour les écrans moyens
- **Desktop** : Navigation latérale fixe pour les grands écrans

## 🎯 Sections du portfolio

1. **Profil** : Présentation personnelle et coordonnées
2. **Expérience** : Parcours professionnel détaillé
3. **Formation** : Diplômes et certifications
4. **Compétences** : Technologies et outils maîtrisés
5. **Centres d'intérêt** : Passions et hobbies
6. **Certifications** : Diplômes et accréditations

## 📈 Performance

- **Images optimisées** : Réduction de 98% de la taille
- **CSS minifié** : Fichiers de production optimisés
- **Chargement rapide** : Structure HTML optimisée
- **SEO optimisé** : Métadonnées complètes

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**Zakaria Errahmaouy**
- Email : zakaria.rahmaouy@gmail.com
- LinkedIn : [Zakaria Errahmaouy](https://www.linkedin.com/in/er-rahmaouy/)
- GitHub : [zakaria-errahmaouy](https://github.com/zakaria-errahmaouy)

---

*Développé avec ❤️ et Bootstrap 5*
