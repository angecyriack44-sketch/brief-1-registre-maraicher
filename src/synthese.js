// Synthèse des dépenses enregistrées.
// Fiche : fiches/5-synthese.md · Vérifier : npm run test:synthese

// Renvoie la somme des coûts, en FCFA. Liste vide : 0.
export function totalCouts(operations) {
  let total = 0;
  for(const operation of operations){
    total = total + operation.coutFCFA;
  }
  return total;
}

// Renvoie un objet : pour chaque parcelle, le nombre d'opérations et le total de leurs coûts.
// Exemple : { P1: { nombre: 4, total: 15500 }, P2: { nombre: 3, total: 9500 } }
// Liste vide : {} (un objet vide).
export function syntheseParParcelle(operations) {
  const resultat = {};
  for (const operation of operations){
    const parcelle = operation.parcelle;
    if(!resultat[parcelle]){
      resultat[parcelle] = {nombre:0 , total:0};
    }
  
  const fiche = resultat[parcelle];
  fiche.nombre = fiche.nombre +1;
  fiche.total = fiche.total + (operation.coutFCFA);
  }
return resultat;
}


// Renvoie { min, max } des coûts, ou null si la liste est vide.
// Exemple : { min: 1500, max: 8000 }
export function coutMinMax(operations) {
  if(operations.length === 0){
    return null;
  }

  let min = operations[0].coutFCFA;
  let max = operations[0].coutFCFA;
for(const operation of operations){
  const cout = operation.coutFCFA;
  if(cout < min){
    min = cout;
  }

  if(cout > max){
    max = cout;
  }
}
  return{
    min : min,
    max : max
  }
}
