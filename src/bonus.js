// BONUS — Pour aller plus loin. Facultatif : commencez seulement quand le socle est complet.
// Fiche : fiches/7-bonus.md · Vérifier : npm run test:bonus
// Pas de modèle pour ce fichier : à vous de combiner ce que vous avez appris.
import { versNombre } from './outils.js';
import { trouverParId, verifierOperation } from './registre.js';
import { syntheseParParcelle } from './synthese.js';

// Les champs qu'on a le droit de modifier. L'identifiant n'en fait pas partie.
export const CHAMPS_MODIFIABLES = ['date', 'parcelle', 'culture', 'operation', 'coutFCFA'];

// Supprime du registre l'opération qui a cet identifiant.
// Renvoie l'opération supprimée, ou undefined si elle n'existe pas (le registre ne change pas).
export function supprimerOperation(operations, id) {
  const position = operations.findIndex(function(operation){
    return operation.id === id;
  });
if(position === -1){
  return undefined;
}
const operationSupprime = operations.splice(position, 1);
return operationSupprime[0];
}

// Modifie UN champ d'une opération. La nouvelle valeur arrive sous forme de TEXTE et suit
// les mêmes règles qu'à l'ajout. Renvoie les erreurs : [] si la modification est faite ;
// sinon les messages, et l'opération ne change pas.
// Erreurs : identifiant introuvable · champ 'id' (non modifiable) · champ absent de CHAMPS_MODIFIABLES
//           · valeur refusée par les règles de l'ajout.
export function modifierOperation(operations, id, champ, valeur) {
  const operation = trouverParId(operations, id);
  if(operation === undefined){
    return["Identifiant introuvable"];
  }
  if(champ === "id"){
    return["L'identifiant ne peut pas être modifié"];
  }
  if(!CHAMPS_MODIFIABLES.includes(champ)){
    return["Champ non modifiable"];
  }
  const saisie ={
    id: operation.id,
    date: operation.date,
    parcelle: operation.parcelle,
    culture: operation.culture,
    operation: operation.operation,
  coutFCFA: String(operation.coutFCFA)
  }
  saisie[champ] = valeur;
  const autresOperations = [];
  for (const autreOperation of operations){
    if(autreOperation.id !== id){
    
  autresOperations.push(autreOperation);}
    }
  
  const erreurs = verifierOperation(saisie, autresOperations);
  if(erreurs.length > 0){
    return erreurs;
  }
  if( champ === "coutFCFA"){
    operation[champ] = versNombre(valeur);
  }
  else{
    operation[champ] = valeur;
  }
  return [];
}
  

// Renvoie une COPIE triée par coût décroissant : la plus chère d'abord.
export function trierParCoutDecroissant(operations) {
  const resultat = [];
  for(const operation of operations){
    resultat.push(operation);
  }
  resultat.sort(function(a, b){
    return b.coutFCFA - a.coutFCFA;
  });
  return resultat;
}

// Renvoie la parcelle dont le total des coûts est le plus élevé : { parcelle, total },
// ou null si le registre est vide. En cas d'égalité : la première parcelle rencontrée.
export function parcelleLaPlusCouteuse(operations) {
  if(operations.length === 0){
    return null;
  }
  const synthese = syntheseParParcelle(operations);
  let parcelleMax ="";
  let totalMax = 0;
  let premiereParcelle = true;
  for(const parcelle in synthese){
    const fiche = synthese[parcelle];
  
  if(premiereParcelle || fiche.total > totalMax){
    totalMax = fiche.total;
    parcelleMax = parcelle;
    premiereParcelle = false;
  }
}
return{
  parcelle : parcelleMax,
  total : totalMax
};
}

