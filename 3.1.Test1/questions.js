
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    let text = texte1 + texte2;
    return text;

}
let afficherCar5 =  (texte) => {
    return texte[4];
}
let afficher9Car =  (texte) => {
    return texte.slice(0, 9);
}
let majusculeString =  (texte) => {
    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();
}
let SupprEspaceString =  (texte) => {
    return texte.trim();
}
let IsString =  (texte) => {
    if (typeof texte === 'string') return true;
}

let AfficherExtensionString =  (texte) => {
    let index = texte.indexOf('.');
    return texte.slice(index + 1);
}
let NombreEspaceString =  (texte) => {
    count = 0;
    for (let i = 0; i < texte.length; i++) {
        if (texte[i] === " ") count++;
    }
    return count;
}
let InverseString =  (texte) => {
 
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {

}
let valeurAbsolueArray =  (array) => {

}
let sufaceCercle =  (rayon) => {

}
let hypothenuse =  (ab, ac) => {

}
let calculIMC =  (poids, taille) => {

}
