/******************************************
 * Projet : Boat Racing
 * Description : Class qui s'occupe de la map
 * Date : 13.04.2015
 * Version : 1.0
 * Auteur : Alex Perritaz
 * *****************************************/

function Map()
{
   // Tableau à 2 dimensions
   this.map = new Array([], []); // Int
   // Hauteur - Largeur de la carte
   this.w = 1600; // Int
   this.h = 1600; // Int
   // Indique les coordonnées du point supérieur-gauche
   this.px = posXBateau - 20 / 2; // Int
   this.py = posYBateau - 20 / 2; // Int
   // Tableau indexé - Image à afficher - Progression freinée - Perte d'energie
   this.tiles = ""; // Images
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
Map.prototype.Draw = function(x, y)
{

}

/*
 * Retourne un objet contenant les information sur la case actuelle.
 * @param x, y = position de la case à lire
 * @return { slow : Number, energy : Number 
 */
Map.prototype.GetTile = function(x, y)
{

}