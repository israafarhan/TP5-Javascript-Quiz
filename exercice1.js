let nombre1 = prompt("Entrez le premier nombre :");
let nombre2 = prompt("Entrez le deuxième nombre :");
nombre1 = parseFloat(nombre1);
nombre2 = parseFloat(nombre2);


if (isNaN(nombre1) || isNaN(nombre2)) {
    console.log("Erreur : veuillez entrer des nombres valides.");
} else {
    let somme = nombre1 + nombre2;
    let difference = nombre1 - nombre2;
    let produit = nombre1 * nombre2;


    if (nombre2 !== 0) {
        let quotient = nombre1 / nombre2;
        console.log("Somme : " + somme);
        console.log("Différence : " + difference);
        console.log("Produit : " + produit);
        console.log("Quotient : " + quotient);
    } else {
        console.log("Somme : " + somme);
        console.log("Différence : " + difference);
        console.log("Produit : " + produit);
        console.log("Erreur : division par zéro impossible.");
    }
}


const nombreSecret = Math.floor(Math.random() * 10) + 1;


let guess;
let tentatives = 0;
do {
    guess = parseInt(prompt("Devinez un nombre entre 1 et 10:"));
    tentatives++;
    if (guess < nombreSecret) {
        alert("Plus grand !"); 
    } else if (guess > nombreSecret) {
        alert("Plus petit !");
    }
} while (guess !== nombreSecret);
alert("Bravo ! Vous avez trouvé le nombre en " + tentatives + " tentatives.");


function lancerQuiz() {
    let score = 0;


    let q1 = prompt("Quelle est la capitale du Maroc ?\n1) Casablanca\n2) Rabat\n3) Marrake
    if (q1 === "2" || q1.toLowerCase() === "rabat") {
        alert("Bonne réponse !");
        score++;
    } else {
        alert("Mauvaise réponse.");
    }


    let q2 = prompt("Combien de continents y a-t-il sur Terre ?");
    if (q2 === "5" || q2 === "6" || q2 === "7") {
        alert("Bonne réponse !");
        score++;
    } else {
        alert("Mauvaise réponse.");
    }


    alert("Le Quiz est terminé ! Votre score est : " + score + "/2");
}

