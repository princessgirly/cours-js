var stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// Constructeur MonObjet
function MonObjet() {
    // Initialisation de l'objet

}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleur']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic"

var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);
var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo

console.log("Il coûte " + stylo.prix + " euros");
