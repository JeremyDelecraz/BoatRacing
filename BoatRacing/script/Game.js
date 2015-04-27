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

   this.cars = new Items();
   this.input = {};
   input.SetOneKey("up", 87);
   input.SetOneKey("down", 83);
   input.SetOneKey("left", 65);
   input.SetOneKey("right", 68);   // 
   input.SetOneKey("fire1", 16);   // shift
   input.SetOneKey("fire2", 17);   // ctrl
   
   this.map = new Map();

   var listImage = {};
   for (i = 1; i < 31; i++)
   {
      listImage[i - 1] = "Images/Map/" + i + ".jpg";
   }
   this.images = new Loader(listImage);

   this.pseudo = "toto";
   this.timeStart = 3;
   this.nbTime = 0;

   this.can = canvas;
   this.ctx = canvas.getContext("2d");

   this.state = "";
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
   //console.log(this.state);
};

/**
 * Chargement de la map
 */
Game.prototype.StateLoadMap = function() {
   this.map.Load();
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
   this.cars.ForEachItem(function() {

   });

   this.ctx.font = "29pt Calibri,Geneva,Arial";
   this.ctx.fillStyle = "rgb(0,0,0)";
   //if (this.cars.sprites.Length() >= 4)
   //{
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
   //}
   //else
   //{
   //var nbPlayer = 4 - this.cars.sprites.Length();
   //this.ctx.fillText("Il manque encore " + nbPlayer + " joueurs", this.can.width / 2 - 225, this.can.height / 2);
   //}
};

/**
 * Le moment de jeu
 */
Game.prototype.StatePlay = function() {

   this.cars.ForEachItem(function() {
      this.move();
      self.map.draw(this.x, this.y);
      this.Show(self.map.px, self.map.py);
   });
   this.cars.SendData();
   this.state = "Finished";
};

/**
 * Lorsque la course est finie
 */
Game.prototype.StateFinished = function() {

};