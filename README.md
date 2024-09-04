# Compte rendu - Angular

Angular est un framework puissant et complet développé par Google. Il permet le développement d'applications web modernes, robuste et maintenables.
Celui-ci est extrêmement populaire et possède une grande communauté 
Ce compte rendu à pour but de montrer des différents et nombreux avantages de ce framework moderne et puissant.

## Une architecture robuste et maintenable 

Angular est construit autour de l'architecture Model-View-Controller (MVC)
Cette architecture rend les applications plus faciles à maintenir et à évoluer, surtout dans des projets à grande échelle.

L'architecture d'angular encourage la réutilisation du code et favorise également un découplage clair des responsabilités de chaque composants 

Angular utilise TYPESCRIPT qui est un langage de programmation strict qui permet de structurer correctement le code et à prévenir les erreurs
Angular encourage et facilite également les tests unitaires et les tests d'intégrations ce qui est très pratique pour les développeurs dans le cadre du développement et du déploiement de l'application.

## Routage et gestion des vues

L'une des fonctionnalités les plus puissantes d'Angular est son système de routage intégré. 
Le routage Angular prend en charge :

- Routes dynamiques : définies en fonction de l'URL pour afficher différentes vues.
- Lazy loading : permet de charger certains modules ou composants uniquement lorsqu'ils sont nécessaires, optimisant ainsi la performance.
- Protection des routes (Guarding) : protège certaines routes pour empêcher l'accès à des utilisateurs non autorisés.
- Gestion des URL : fournit des options puissantes pour manipuler les URL et l'historique du navigateur.

Angular permet une bonne gestion des formulaires réactifs qui permet de crée des formulaires puissant et modulable comme le développeur veut.

## Performance et optimisation avancée

Angular à été concu pour avoir la meilleure performance et la meilleure optimisation.

### Server-Side Rendering (SSR) et Prerendering

Avec Angular Universal, Angular permet de rendre les applications côté serveur (SSR). 
Cela signifie que la page HTML est générée sur le serveur et renvoyée au navigateur, ce qui améliore considérablement le temps de chargement initial et l'expérience utilisateur.

Le prerendering permet de pré-rendre certaines parties de l'application en fonction des routes avant même qu'elles ne soient demandées par l'utilisateur.

### Optimisation de la taille des bundles

Angular utilise plusieurs stratégies pour minimiser la taille des bundles JavaScript, notamment :

- Tree-shaking : supprime automatiquement le code inutilisé lors de la compilation, réduisant ainsi la taille finale du bundle.
- Ahead-of-Time (AOT) Compilation : Angular compile l'application au moment de la construction, générant ainsi du code optimisé pour l'exécution dans le navigateur, ce qui améliore les performances au runtime.

## Conclusion

Angular offre un écosystème complet et performant pour le développement web. Pour les projets nécessitant une architecture solide, une maintenabilité à long terme et des performances optimisées, Angular est sans conteste l'un des meilleurs frameworks disponibles aujourd'hui.

