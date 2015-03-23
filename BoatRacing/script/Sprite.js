/******************************************
* Projet : Boat Racing
* Description : Classe qui gère le Sprite
* Date : 23/03/2015
* Version : 1.0
* Auteur : Duvernay François
* *****************************************/

function Sprite(ctx, img, x, y, frame, anim, rate) {
   this.x = x; //La position x du sprite (paramètre).
   this.y = y; //La position y du sprite (paramètre).
   this.w; //La largeur du sprite.
   this.h; //La hauteur du sprite.
   this.alpha; //L'angle du sprite.
   this.speed; //La vitesse du sprite.
   this.img = img; //L'image du sprite (paramètre).
   this.sx = frame; //La position en x dans l'image.
   this.sy = anim; //La position en y dans l'image.
   this.rate = rate; //La vitesse de changement de sprite (paramètre).
   this.rayon; //Le rayon du sprite pour calculer une hitbox.
   this.update; //Pour le réseau.
   this.ctx = ctx; //Contexte dans lequel va se trouver l'image (paramètre).
   this.Show = function() { //Fonction pour afficher le sprite.
      this.ctx.drawImage(this.img, this.sx, this.sy, this.w, this.h, (this.x + 120), (this.y + 102), this.w, this.h);
   };
   this.Move = function() { //Fonction qui va faire bouger le vaisseau selon les touches du clavier.

   };
   this.SetAnim = function() { //Fonction qui va gérer quelle partie de l'image va appraître.

   };
   this.Colision = function() {
      
   };
}