# 🗡️ Warhammer Collection Tracker

Application React + TypeScript pour gérer ta collection Warhammer Age of Sigmar.

## Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- lucide-react (icônes)
- localStorage pour la persistance

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
# → http://localhost:5173
```

## Build production

```bash
npm run build
# génère le dossier dist/
```

## Déploiement sur GitHub Pages (gratuit)

1. Crée un repo GitHub `warhammer-collection`
2. Push ce projet dedans
3. Dans `vite.config.ts`, ajoute `base: '/warhammer-collection/'`
4. Installe gh-pages : `npm install -D gh-pages`
5. Ajoute dans `package.json` :
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
6. Lance : `npm run deploy`
7. Active GitHub Pages depuis Settings → Pages → `gh-pages` branch

## Export / Import des données

- **Exporter** : bouton "Exporter" → télécharge un fichier `.json` avec toute ta collection
- **Importer** : bouton "Importer" → charge un fichier `.json` précédemment exporté

⚠️ Les données sont stockées dans le `localStorage` du navigateur.
Exporte régulièrement pour ne pas les perdre !

## Structure du projet

```
src/
├── types/index.ts          # Types TypeScript (CollectionItem, Status...)
├── data/initialData.ts     # Données initiales de ta collection
├── hooks/useCollection.ts  # Hook React — logique métier + localStorage
├── components/
│   ├── Badge.tsx           # Badge statut coloré
│   ├── ItemCard.tsx        # Carte figurine avec actions
│   └── ItemModal.tsx       # Modal ajout / modification
├── App.tsx                 # Composant principal
├── main.tsx                # Entry point
└── index.css               # Tailwind + classes custom
```
