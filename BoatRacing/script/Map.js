/******************************************
 * Projet : Boat Racing
 * Description : Class qui s'occupe de la map
 * Date : 13.04.2015
 * Version : 1.0
 * Auteur : Alex Perritaz
 * *****************************************/

function initialise()
{
   // Get the canvas element
   canvas = document.getElementById("canvas");
   ctx = canvas.getContext("2d");

   // Create a new map
   mapy = new Map();
}

function Map()
{
   // Tableau à 2 dimensions
   this.map = [
      [4, 4, 2, 4, 4, 8, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 2, 2, 4, 4, 4, 4],
      [2, 4, 4, 4, 2, 8, 1, 1, 1, 1, 1, 9, 4, 4, 2, 4, 4, 2, 2, 4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 2, 4, 4],
      [2, 4, 2, 4, 2, 8, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 2, 2, 4, 4, 2, 2, 2, 4, 2, 2, 4, 2, 4, 4, 2, 2, 4, 4, 4],
      [4, 2, 4, 2, 2, 22, 3, 3, 3, 3, 3, 21, 2, 4, 4, 4, 2, 4, 2, 2, 4, 4, 2, 2, 4, 4, 2, 2, 4, 4, 2, 2, 4, 4, 2, 4, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 2, 8, 1, 1, 1, 1, 1, 5, 17, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4],
      [2, 4, 4, 2, 2, 8, 1, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 2, 4, 2, 2, 4, 2, 2, 2, 2, 4, 4, 4, 2, 2, 4, 4, 4, 4, 2, 4, 2, 2, 14, 5, 5, 5, 17, 2, 2, 2, 2, 4],
      [2, 4, 2, 2, 2, 8, 1, 1, 1, 1, 1, 1, 9, 2, 4, 2, 14, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 17, 4, 4, 14, 5, 5, 5, 5, 11, 12, 7, 13, 10, 5, 5, 5, 11, 2],
      [4, 4, 2, 4, 5, 11, 1, 1, 1, 1, 1, 1, 10, 5, 5, 5, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 8, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 4],
      [4, 4, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4, 8, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 1, 1, 2],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 7, 7, 7, 7, 7, 7, 7, 7, 13, 1, 1, 1, 9, 2, 4, 8, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 24, 5, 5, 5, 19, 5, 5, 5, 25, 8, 1, 1, 1, 9, 4, 4, 8, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 12, 7, 13, 2],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 1, 1, 1, 18, 1, 1, 1, 9, 8, 1, 1, 1, 9, 2, 4, 8, 1, 1, 10, 5, 11, 1, 1, 1, 1, 1, 9, 4, 8, 2],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 8, 1, 12, 7, 18, 7, 13, 1, 9, 8, 1, 1, 1, 9, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 4],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 7, 7, 1, 1, 1, 1, 1, 1, 9, 8, 1, 9, 4, 2, 4, 8, 1, 9, 8, 1, 1, 1, 9, 2, 4, 8, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 7, 4, 4, 7, 1, 1, 1, 1, 1, 9, 22, 3, 21, 2, 4, 2, 22, 3, 21, 8, 1, 1, 1, 10, 5, 5, 11, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 1, 1, 2],
      [2, 4, 8, 1, 1, 1, 1, 1, 7, 4, 2, 4, 4, 7, 13, 1, 1, 1, 9, 8, 1, 9, 4, 2, 4, 8, 1, 9, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 4, 4, 4, 4, 4, 8, 1, 1, 1, 9, 8, 1, 10, 5, 19, 5, 11, 1, 9, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 9, 4, 2, 2, 4, 4, 4, 8, 1, 1, 1, 9, 8, 1, 1, 1, 18, 1, 1, 1, 9, 8, 1, 1, 1, 9, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 4],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 2, 2, 2, 2, 4, 8, 1, 1, 1, 9, 26, 7, 7, 7, 20, 7, 7, 7, 27, 8, 1, 1, 1, 9, 4, 2, 1, 12, 7, 13, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 2],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 4, 2, 2, 2, 4, 8, 1, 1, 1, 10, 5, 5, 5, 5, 5, 5, 5, 5, 5, 11, 1, 1, 1, 9, 2, 4, 1, 9, 4, 8, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 9, 4, 2, 2, 2, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4, 1, 10, 5, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [4, 4, 8, 1, 1, 1, 1, 9, 4, 4, 2, 2, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
      [4, 2, 8, 1, 1, 1, 1, 1, 2, 4, 2, 2, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 15, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 2, 4, 2, 4, 4, 16, 7, 7, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 2],
      [4, 2, 8, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 2, 2, 4, 4, 4, 16, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 15, 2, 2, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 4],
      [4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 2, 2, 4, 4, 4, 4, 2, 4, 4, 2, 19, 5, 5, 19, 4, 2, 4, 2, 4, 4, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 5, 5, 5, 5, 5, 5, 4, 2, 18, 1, 1, 18, 2, 4, 2, 4, 5, 5, 5, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4],
      [4, 4, 16, 7, 13, 1, 1, 1, 1, 1, 1, 2, 2, 4, 4, 1, 1, 1, 1, 1, 1, 2, 4, 18, 1, 1, 18, 4, 2, 4, 5, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 12, 7, 13, 1, 9, 2, 4],
      [4, 4, 2, 19, 8, 1, 1, 1, 1, 12, 7, 2, 4, 4, 2, 1, 1, 1, 1, 1, 1, 4, 2, 20, 7, 7, 20, 2, 14, 5, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 9, 4, 8, 1, 9, 2, 4],
      [4, 4, 2, 18, 8, 1, 1, 1, 1, 9, 2, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 17, 4, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 1, 10, 5, 11, 1, 9, 2, 2],
      [4, 2, 4, 18, 8, 1, 1, 1, 1, 9, 2, 4, 2, 8, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 9, 4, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4],
      [4, 2, 4, 18, 8, 1, 1, 1, 1, 9, 4, 4, 4, 8, 1, 1, 1, 9, 4, 1, 1, 1, 1, 1, 9, 2, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 7, 15, 2, 2],
      [2, 4, 14, 18, 8, 1, 1, 1, 1, 10, 5, 5, 5, 11, 1, 1, 1, 9, 4, 4, 1, 1, 1, 1, 9, 4, 4, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2, 4, 4, 4],
      [4, 2, 18, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2, 4, 1, 1, 1, 9, 4, 2, 4, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4, 2, 2, 2],
      [2, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 4, 1, 1, 1, 9, 4, 4, 2, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 2, 2, 2, 4],
      [4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 2, 4, 1, 1, 1, 9, 4, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 9, 4, 2, 2, 4, 4],
      [2, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2, 4, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 1, 9, 2, 4, 2, 4],
      [4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 1, 12, 7, 13, 9, 2, 2, 2, 4],
      [2, 16, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 9, 2, 4, 4, 4],
      [4, 2, 18, 7, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 9, 2, 2, 2, 4],
      [4, 2, 3, 3, 3, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 15, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 5, 11, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 9, 4, 2, 4],
      [2, 4, 4, 2, 18, 8, 1, 1, 1, 1, 1, 1, 12, 7, 7, 27, 2, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 9, 4, 8, 1, 12, 7, 13, 1, 9, 4, 2, 2],
      [2, 2, 4, 2, 18, 1, 1, 1, 1, 1, 1, 1, 10, 5, 5, 5, 5, 2, 2, 4, 2, 2, 2, 2, 2, 4, 4, 2, 4, 4, 2, 4, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 9, 4, 8, 1, 1, 9, 2, 4],
      [4, 4, 4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 11, 1, 1, 9, 2, 2],
      [4, 2, 4, 8, 18, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 4],
      [2, 4, 4, 2, 20, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 12, 7, 13, 1, 1, 1, 1, 1, 1, 1, 1, 9, 2, 2],
      [4, 4, 4, 2, 2, 2, 24, 25, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 9, 23, 8, 1, 1, 12, 7, 13, 1, 1, 2, 2, 2, 4],
      [4, 2, 4, 4, 4, 2, 26, 27, 8, 1, 1, 1, 1, 1, 1, 1, 1, 23, 2, 23, 4, 4, 2, 2, 4, 4, 23, 4, 4, 4, 4, 23, 1, 12, 7, 13, 10, 5, 11, 1, 1, 9, 4, 8, 1, 1, 4, 4, 4, 4],
      [4, 4, 4, 2, 2, 2, 2, 2, 16, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 4, 4, 2, 4, 23, 4, 2, 4, 2, 4, 4, 4, 1, 9, 4, 8, 1, 1, 1, 1, 1, 10, 2, 11, 1, 1, 4, 2, 2, 2],
      [4, 2, 4, 2, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 4, 4, 4, 2, 4, 4, 4, 23, 4, 4, 2, 4, 4, 2, 4, 4, 4, 4, 2, 4, 2, 2, 4, 2, 2, 4, 2, 4, 2, 2, 4, 2, 4, 4, 4, 4]
   ];

   // Hauteur - Largeur de la carte
   this.w = 1600; // Int
   this.h = 1600; // Int
   // Indique les coordonnées du point supérieur-gauche
   //this.px = x - (20 / 2); // Int
   //this.py = y - (12 / 2); // Int
   // Tableau indexé - Image à afficher - Progression freinée - Perte d'energie
   this.tiles = [];
   // Objet contenant des données reçues du serveur - Carte - Nom images tuiles / items
   var mapjson;
}


/*
 * Télécharger la carte de jeu
 * @param url = nom du fichier contenant la carte de jeu
 */
Map.prototype.Load = function()
{
   var url = "nom du fichier";
}

/*
 * Indique si le téléchargement de la carte est termnié.
 * @return true quand fini, false si le téléchargement est en
 * cours.
 */
Map.prototype.Loaded = function()
{

}

/*
 * Affiche la carte en tenant compte de la position du joueur local
 * @param x, y = position du joueur local dans la grille.
 */
Map.prototype.Draw = function(ctx,images,x, y)
{
   var posx = 0;
   var posy = 0;
   
   var top = y - (12 / 2);
   var left = x - (20 / 2);
   var bottom = y + (12 / 2);
   var right = x + (20 / 2);
   
   // Si le bateau est trop proche de la bordure de la map
   // Empêcher la map de sortir hors zone
   if(left < 0)
   {
      left = 0;
      right = 20;
   }
   if(right > 50)
   {
      right = 50;
      left = 50-20;
   }
   if(top < 0)
   {
      top = 0;
      bottom = 12;
   }
   if(bottom > 50)
   {
      bottom = 50;
      top = 50-12;
   }
   
   for (var height = top; height < bottom; height++)
   {
      for (var width = left; width < right; width++)
      {
         var img = images[this.map[height][width]];
         //var img = document.getElementById(this.map[height][width]);
         ctx.drawImage(img, 0, 0, 32, 32, posx * 32,  posy * 32, 32, 32);
         posx++;
      }
      posx = 0;
      posy++;
   }
}

/*
 * Retourne un objet contenant les information sur la case actuelle.
 * @param x, y = position de la case à lire
 * @return { slow : Number, energy : Number 
 */
Map.prototype.GetTile = function(x, y)
{
   
}