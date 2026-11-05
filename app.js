// Registre des opérations maraîchères — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { OPERATIONS, ajouterOperation, formaterOperation, listerOperations, trouverParId } from './src/registre.js';
import { filtrerParCulture, filtrerParParcelle, trierParCout, trierParDate } from './src/recherche.js';
import { coutMinMax, syntheseParParcelle, totalCouts } from './src/synthese.js';
import { supprimerOperation, modifierOperation} from './src/bonus.js';

const FICHIER_DONNEES = 'donnees/operations.json';
 
  function afficherAccueil(){
  console.log("==================================================");
  console.log("       REGISTRE DES OPERATIONS MARAICHERES");
  console.log("       Exploitation Maraîchère pédagogique");
  console.log("==================================================");
  }
  /*
function afficherMenu() {
  console.log("--------------------- MENU ---------------------");
  console.log("1. Ajouter une opération");
  console.log("2. Lister les opérations");
  console.log("3. Rechercher une opération");
  console.log("4. Trier les opérations"); 
  console.log("5. Synthèse des dépenses");
  console.log("6. Supprimer opération");
  console.log("7. Modifier opération");
  console.log("0. Quitter");
}
async function chargerRegistre() {
  try {
    const operations = await chargerJson(FICHIER_DONNEES);
    console.log("Les opérations ont été chargées."); 
    return operations;
  } catch (error) {
    console.log("Erreur : impossible de charger les données.");
    return [];
  }
}

async function sauvegarderRegistre(operations) {
  await enregistrerJson(FICHIER_DONNEES, operations);
  console.log("Les données ont été enregistrées.");
}

async function main() {
  ouvrirSaisie();
  try {
    afficherAccueil();
    const operations = await chargerRegistre();
  
let continuer = true;

while (continuer) {
  afficherMenu();

  const choix = await demander("Votre choix : ");

  if (choix === null || choix === "0") {
    console.log("Au revoir !");
    continuer = false;
    continue;
  }

  switch (choix) {
    case "1": {
      const saisie = {
        id: await demander("Identifiant : "),
        date: await demander("Date (AAAA-MM-JJ) : "),
        parcelle: await demander("Parcelle : "),
        culture: await demander("Culture : "),
        operation: await demander(`Opération (${OPERATIONS.join(", ")}) : `),
        coutFCFA: await demander("Coût en FCFA : "),
      };
      
      const erreurs = ajouterOperation(operations, saisie);
      if(erreurs.length > 0){
        for(const erreur of erreurs){
        console.log(erreur);
      }
    }
    else{
        await sauvegarderRegistre(operations);
      }
      break;
    
  }

    case "2":{
      const resultat = listerOperations(operations);
        console.log(resultat);
      break;
    }
    

    case "3":{
      const id = await demander ("Identifiant à rechercher:", );
      const operation = trouverParId (operations, id);
      if (operation === undefined){
        console.log("Aucune opération avec cet identifiant.");
      } 
      else {
        console.log(formaterOperation(operation));
      }
      break;
    }


      case "4" :{
        console.log("--- Trier les opérations ---");
        console.log("1. Trier par coût" );
        console.log("2. Trier par date" );
        const choixtri = await demander ("Votre choix : ");
        let resultat = [];
        if(choixtri ==="1"){
          resultat = trierParCout(operations);
        }
        else if (choixtri ==="2"){
          resultat = trierParDate(operations);
        
        }
        else{
          console.log(" Le choix saisi est invalide.");
        }
        if(resultat.length === 0){
          console.log(" Aucune opération enregistrée");
        }
    
      for(const operation of resultat){
        console.log(formaterOperation(operation));
      }
      break;
    }



      case "5":{
        console.log("---Synthèse des dépenses enregistrées---");
        console.log("Nombre d'opérations : " + operations.length);
        console.log("Total des coûts: " +totalCouts(operations) + "FCFA");
        console.log("Par parcelle :");

        const synthese = syntheseParParcelle(operations);
        for(const parcelle in synthese){
          const fiche = synthese[parcelle];
          console.log(`${parcelle}: ${fiche.nombre} opération(s), ${fiche.total}FCFA`);
        }
          const couts = coutMinMax(operations);
          if(couts === null){
            console.log("Coût minimum et maximum : aucune donnée");
          }
           else {
            console.log(`Coût minimum : ${couts.min}FCFA , Coût maximum :${couts.max}FCFA`);
            }
          
        console.log("Rappel : ce sont des dépenses, elle ne mesurent pas la rentabilité");
        break;
      }

      case "6": {
        const id = await demander("Identifiant :");
        const operation = supprimerOperation(operations, id.toUpperCase());
        if(operation === undefined){
          console.log(`Opération ${id} introuvable`);
        }
        else{
          await sauvegarderRegistre(operations);
          console.log(`Opération ${id} supprimée. Le registre compte ${operations.length} opération(s).`);

        }
        break;
      }
      case "7":{
        const id = (await demander("Identifiant:")).toUpperCase();
        const champ = await demander("Champ à modifier(date, parcelle, culture,operation, coutFCFA)");
        const valeur = await demander("Nouvelle valeur : ");
        const erreur = modifierOperation(operations, id, champ, valeur);
        if (erreurs.length > 0){
          console.log("Modification refusée :");
          for(const erreur of erreurs){
            console.log(` -${erreur}`);
          }
        }
        else{
          await sauvegarderRegistre(operations);
          console.log(`Opération ${id} modifiée.`);
        }
        break;
      }

        default:
      console.log("Choix invalide. Réessayez.");
     }
    }
  }
finally{
  fermerSaisie();
 }
}

main();
*/