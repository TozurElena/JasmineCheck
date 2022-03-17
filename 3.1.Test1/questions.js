
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
    // sting -> array => invers array => InvArray -> string
    return texte.split('').reverse().join('')
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
    let arrayNew = [];
    for (let elem of array) {
        arrayNew.push(Math.abs(elem));
    }
    return arrayNew;
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon, 2));
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt(ab * ab + ac * ac);
}
let calculIMC =  (poids, taille) => {
    return +(poids/Math.pow(taille, 2)).toFixed(2);
}
