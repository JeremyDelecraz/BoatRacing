/******************************************
 * Projet : Boat Racing
 * Description : Class qui gère le jeu
 * Date : 23.03.2015
 * Version : 1.0
 * Auteur : Jeremy Delécraz
 * *****************************************/

var vgGame = null;


/** 
 * Constructeur pour l'objet Game
 * @param    canvas = Le canvas de sortie
 */
function Game(canvas) {
   var self = this;

   this.pseudo = "toto";
   this.cars = new Items(localid.value);
   this.input = new Input();
   this.input.SetOneKey("up", 87);     // W
   this.input.SetOneKey("left", 65);   // A
   this.input.SetOneKey("down", 83);   // S
   this.input.SetOneKey("right", 68);  // D

   this.map = new Map();

   var listImage = {};
   for (i = 1; i < 31; i++)
   {
      listImage[i] = "Images/Map/" + i + ".jpg";
   }
   this.images = new Loader(listImage);

   this.timeStart = 3;
   this.nbTime = 0;

   this.can = canvas;
   this.ctx = canvas.getContext("2d");

   this.state = "LoadImage";
   setInterval(function() {
      self.TimerFct();
   }, 50);

}

/** 
 * Le timer
 */
Game.prototype.TimerFct = function() {
   this.ctx.clearRect(0, 0, this.can.width, this.can.height);
   switch (this.state) {
      case "LoadMap" :
         this.StateLoadMap();
         break;
      case "LoadImage" :
         this.StateLoadImage();
         break;
      case "WaitStart" :
         this.StateWaitStart();
         break;
      case "Play" :
         this.StatePlay();
         break;
      case "Finished" :
         this.StateFinished();
         break;
      default :
         this.StateLoadMap();
   }
};

/**
 * Chargement de la map
 */
Game.prototype.StateLoadMap = function() {
   if (this.map.Loaded)
      this.state = "LoadImage";

};

/**
 * Chargement des sprites
 */
Game.prototype.StateLoadImage = function() {
   if (this.images.Loaded)
      this.state = "WaitStart";
};

/**
 * Verification si tout les joueurs sont la
 */
Game.prototype.StateWaitStart = function() {
   this.map.Draw(this.ctx, this.images.images, 0, 0);
   
   // Créer les sprites s’ils n’existent pas déjà
   var nbCars = 0;
   for( id in this.cars.sprites ) {
      // Pas tenir compte des ID vide
      if ( id === undefined ) continue;

      // Compter les voitures inscrites
      nbCars += 1;

      if ( typeof(this.cars.sprites[id]) == "string" ) {
         this.cars.sprites[id] = new Sprite(this.ctx, "Images/Map/1.jpg", 10, 10, 0, 0, 0);
      }
   }

   this.ctx.font = "29pt Calibri,Geneva,Arial";
   this.ctx.fillStyle = "rgb(0,0,0)";

   if (nbCars >= 4)
   {
      if (this.timeStart !== 0) {
         this.ctx.fillText(this.timeStart, this.can.width / 2, this.can.height / 2);
         if (this.nbTime === 500)
         {
            this.timeStart--;
            this.nbTime = 0;
         } else
            this.nbTime += 50;

      }
      else {
         this.ctx.fillText("GO !!!", this.can.width / 2 - 45, this.can.height / 2);
         this.timeStart = 3;
         this.state = "Play";
      }
   }
   else
   {
      var nbPlayer = 4 - nbCars;
      this.ctx.fillText("Il manque encore " + nbPlayer + " joueurs", this.can.width / 2 - 225, this.can.height / 2);
   }
   
};

/**
 * Le moment de jeu
 */
Game.prototype.StatePlay = function() {

   this.map.Draw(this.ctx, this.images.images, 0, 0);
//   this.map.Draw(ctx,this.images,0,0);
   //this.cars.ForEachItem( function(cars, id, sprite) {
   //   sprite.Move();
   //   sprite.Show();
   //this.sprites[id].Move();
   //self.map.draw(this.sprites[id].x, this.sprites[id].y);
   //this.sprites[id].Show(self.map.px, self.map.py);
   //});
   //this.cars.SendData();
   //this.state = "Finished";
};

/**
 * Lorsque la course est finie
 */
Game.prototype.StateFinished = function() {

};