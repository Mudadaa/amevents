
const express = require('express');


const app = express();
// Voici ce que cela signifie en détail :

// 1- express() est une fonction qui est exportée par le module "express". En appelant cette fonction, 
// je crée une nouvelle instance d'une application Express. Une instance est un objet JavaScript qui a été créé à partir d'un constructeur. = un bol sortie de l'usine

// 2- const app = ... déclare une constante appelée app qui va référencer cette instance d'application Express nouvellement créée. 
// je peux choisir n'importe quel nom pour cette constante, mais app est couramment utilisé dans la communauté pour représenter l'application Express.

// 3- En utilisant cette instance d'application Express, je peux configurer des routes, définir des middlewares, écouter des requêtes HTTP, 
// et effectuer d'autres opérations pour gérer les requêtes et les réponses dans votre application web.
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', './app');



app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('home');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
