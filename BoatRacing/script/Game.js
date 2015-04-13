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
function Game(canvas)
{
   var self = this;

   this.cars = {};
   this.input = {};
   this.map = {};
   this.images = {};
   this.pseudo = "";
   this.timeStart = 3;

   this.can = canvas;
   this.ctx = canvas.getContext("2d");

   this.state = "";
   setInterval(function() {
      self.TimerFct();
   }, 1000);

}

/** 
 * Le timer
 */
Game.prototype.TimerFct = function()
{
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
Game.prototype.StateLoadMap = function()
{
   //this.map.Load;
   //if (this.map.LoadedMap)
   this.state = "LoadImage";

};
/**
 * Chargement des sprites
 */
Game.prototype.StateLoadImage = function()
{
   //if (this.images.LoadedImage)
   this.state = "WaitStart";
};

/**
 * Verification si tout les joueurs sont la
 */
Game.prototype.StateWaitStart = function()
{

   this.ctx.font = "29pt Calibri,Geneva,Arial";
   this.ctx.fillStyle = "rgb(0,0,0)";
   //if (this.cars.sprites.Length() >= 4)
   //{
      if (this.timeStart !== 0) {
         this.ctx.fillText(this.timeStart, this.can.width / 2, this.can.height / 2);
         this.timeStart--;
      }
      else {
         this.ctx.fillText("GO !!!", this.can.width / 2 - 45, this.can.height / 2);
         this.timeStart = 3;
         this.state = "Play";
      }
   //}
   //else
   //{
      this.ctx.fillText("Il manque encore des joueurs", this.can.width / 2 - 225, this.can.height / 2);
   //}
};

/**
 * Le moment de jeu
 */
Game.prototype.StatePlay = function()
{
   
   // this.cars.ForEachItem(function() {
   //    this.move();
   //    self.map.draw(this.x,this.y);
   //    this.Show(self.map.px,self.map.py);
   //});
   this.state = "Finished";
};

/**
 * Lorsque la course est finie
 */
Game.prototype.StateFinished = function()
{

};