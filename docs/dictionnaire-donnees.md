# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | O03 |
| date| date à laquelle l'opération sera éffectuée|date |AAAA-MM-JJ |— |2026-10-20 |
| parcelle |identifiant dédié à la parcelle |texte | non vide|—|P10|
| culture|culture concernée par l'opération|texte|non vide|— |tomate|
| opération|activité agricole réalisée|texte|non vide et appartenant aux opération autorisées|répiquage|
|coutFCFA |dépenses lors de l'exécution de l'opération|entier|un nombre nul ou positif|FCFA|10000|

**Listes de valeurs autorisées** : 
   - Opérations:
        . semis,
        .arrosage,
        .désherbage,
        .repiquage,
        .récolte

    - Cultures
        .Gombo,
        .Aubergine,
        .Tomate

    - Parcelles
        .P1,
        .P2,
        .P3

**Sources** : 
- Sujet de l'examen: SUJET.md
- Données initiales: 
    . donnees/operations.json
