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
   this.w = 32; //La largeur du sprite.
   this.h = 32; //La hauteur du sprite.
   this.alpha = 0; //L'angle du sprite.
   this.speed = 1; //La vitesse du sprite.
   this.img = img; //L'image du sprite (paramètre).
   this.sx = frame; //La position en x dans l'image.
   this.sy = anim; //La position en y dans l'image.
   this.rate = rate; //La vitesse de changement de sprite (paramètre).
   this.radius = this.w / 2; //Le rayon du sprite pour calculer une hitbox.
   this.energy = 100; //Vie du sprite
   this.update; //Pour le réseau.
   this.hurt = false; //Définni si le bateau c'est fait touché ou non.
   this.shield = 0; //Bouclier pour quand deux bateau se rentre dedans.
   this.ctx = ctx; //Contexte dans lequel va se trouver l'image (paramètre).
   this.Show = function() { //Fonction pour afficher le sprite.
      //Si l'intervalle est égale à 100, on change la position dans le sprite.
      if (this.rate === 100)
      {
         if (this.sx < 96)
         {
            this.sx += this.w;
         }
         else
         {
            this.sx = 0;
         }
         //On remet l'intervalle à 0.
         this.rate = 0;
      }
      //On baise le numéro du bouclier.
      this.shield--;
      //Sauvegarde du contex te.
      this.ctx.save();
      this.ctx.translate(this.x, this.y);

      //On fais tourner le sprite.
      this.ctx.rotate(this.alpha);
      this.ctx.drawImage(this.img, this.sx, this.sy, this.w, this.h, (this.w / -2), (this.h / -2), this.w, this.h);

      //Restauration du contexte.
      this.ctx.restore();

      //On ajoute 1 à l'intervalle.
      this.rate++;
   };
   this.Move = function() { //Fonction qui va faire bouger le vaisseau selon les touches du clavier.
      //On change la position en x et en y en ajoutant la vitesse * l'angle à la position d'avant.
      this.x += this.speed * Math.cos(this.alpha);
      this.y += this.speed * Math.sin(this.alpha);
   };
   this.SetAnim = function(num) { //Fonction qui va gérer quelle partie de l'image va appraître.
      //On prend le numéro * la hauteur et - la hauteur pour avoir par exemple la position 0 quand on donne 1 en paramètre.
      this.sy = (num * this.h) - this.h;
      this.sx = 0;
   };
   this.Colision = function(opponentBoat) { //Fonction qui va gérer la collision, prend en paramètre un bateau adversaire.
      //On fait pythagore pour savoir si le rayon de l'un va dans l'autre.
      var pythagore = Math.sqrt(Math.pow((this.x - opponentBoat.x), 2) + Math.pow((this.y - opponentBoat.y), 2));

      if (pythagore <= (this.radius + opponentBoat.radius))
      {
         return true;
      }
   };
   this.IsDead = function() //Cette fonction va permettre de vérifier si le bateau est mort ou non selon l'énergie
   {
      if (this.energy <= 0)
      {
         return true;
      }
      else
      {
         return false;
      }
   };
   this.EndAnim = function() //Cette fonction va vérifier si on arrive à la fin de l'animation ou non.
   {
      if (this.sx === 96)
      {
         return true;
      }
      else
      {
         return false;
      }
   };
}