let CreationTableauLangages =  () => {
  let array = ['Html', 'CSS', 'Java', 'PHP'];
  return array;
}

let CreationTableauNombres =  () => {
  let nombres = [];
  for (let i = 0; i < 6; i++) {
    nombres[i] = i;
  }
  return nombres;
}

let RemplacementElement =  (langages) => {
  langages[2] = 'Javascript';
  return langages;
}

let AjoutElementLangages =  (langages) => {
  langages.push('Ruby', 'Python');
  return langages;
}

let AjoutElementNombres =  (nombres) => {
  nombres.unshift(-2, -1);
  return nombres;
}

let SuppressionPremierElement =  (langages) => {
  langages.splice(0, 1);
  return langages;
}

let SuppressionDernierElement =  (langages) => {
  langages.pop();
  return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
  // sting -> array 
    let reseaux_sociaux = [];
    reseaux_sociaux = reseaux_sociaux_chaine.split(',');
    return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
  // Array -> string
    return langages.join(',');
}

let TriTableau =  (reseaux_sociaux) => {
  return reseaux_sociaux.sort();
}

let InversionTableau =  (langages) =>{
  return langages.reverse();
}
