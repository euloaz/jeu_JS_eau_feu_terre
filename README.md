# Jeu FET

Ce projet est un petit jeu en JavaScript dans lequel le joueur affronte l’ordinateur en utilisant trois pouvoirs : Feu, Eau et Terre.  
Les règles sont simples : le feu bat la terre, l’eau bat le feu, et la terre bat l’eau.  
Le premier à atteindre 10 points remporte la partie.

---

## Technologies utilisées

- **HTML** : pour créer la structure de la page, les boutons de choix et les éléments affichant les scores et résultats.  
- **CSS** : pour styliser le jeu, organiser les sections (joueur, ordinateur, boutons) et améliorer l’expérience utilisateur.  
- **JavaScript** : pour la logique du jeu, la gestion des scores, la détection des clics sur les boutons et l’affichage dynamique des résultats.

---

## Choix techniques

Le projet est organisé en trois fichiers principaux (`index.html`, `style.css`, `script.js`) afin de séparer clairement la structure, le style et le comportement.  
J’ai utilisé des fonctions distinctes pour :  
- générer aléatoirement le choix de l’ordinateur,  
- récupérer le choix du joueur,  
- comparer les deux choix et déterminer le résultat,  
- mettre à jour le score et afficher les messages.  

Cette organisation permet de rendre le code lisible et facile à maintenir.  
Le choix d’afficher les résultats directement sur la page permet à l’utilisateur de suivre immédiatement l’évolution du jeu et de rendre l’expérience interactive et intuitive.
