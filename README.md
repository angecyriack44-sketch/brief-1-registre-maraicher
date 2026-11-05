# Registre des opérations maraîchères

> Projet individuel du SAS DFS, brief 1 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

La responsable d’une exploitation maraîchère pédagogique utilise cet outil pour enregistrer et suivre les activités réalisées sur ses parcelles. Son geste professionnel consiste à observer les parcelles, identifier les cultures et les interventions effectuées (semis, arrosage, désherbage). Elle saisit le nom de la parcelle, la culture, le type d’opération, la date et le coût. Le programme enregistre les informations, permet de rechercher une intervention, de consulter la liste des opérations et de calculer les dépenses par parcelle. Il affiche ainsi un résumé clair du suivi agricole. Cependant, il ne réalise pas les travaux agricoles et ne remplace pas l'observation humaine : il sert uniquement à gérer les informations.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-1-registre-maraicher.git
cd brief-1-registre-maraicher
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/operations.json`
- [x] Ajouter une opération, saisies invalides refusées sans arrêter le programme
- [x] Lister les opérations, message si le registre est vide
- [x] Rechercher par identifiant ou par parcelle ; filtrer par culture
- [x] Trier par coût ou par date
- [x] Synthèse : total, nombre et total par parcelle, coût minimum et maximum
- [x] Bonus : supprimer et modifier une opération (choix 6 et 7)
- [x] Bonus : tri par coût décroissant, parcelle la plus coûteuse

## Données

✏️ *Le fichier, le nombre d'opérations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), les unités. Rappelez qu'elles sont fictives.*

## Limites

la sécurité  est limitée : il n'y a pas de système de connexion ni de protection avancée des données.
l'absence de fonctionnalitées assez importante : l'application permet de suivre les opérations et les dépenses, mais ne calcule pas encore les bénéfices, les rendements ou la rentabilité des cultures.
la sauvegarde  : il n'existe pas encore de système automatique de sauvegarde des données.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
