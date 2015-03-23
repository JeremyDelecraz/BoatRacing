/******************************************
 * Projet : Boat Racing
 * Description : Classe qui gère le jeu
 * Date : 23.03.2015
 * Version : 1.0
 * Auteur : Jeremy Delécraz
 * *****************************************/

/**
 * 
 * @returns {ObjGame}
 */
function ObjGame()
{
    this.cars;
    this.input;
    this.map;
    this.images;
    this.pseudo;

    this.can;
    this.ctx;
}
var self = this;

/**
 * 
 * @param {type} canvas
 * @returns {undefined}
 */
function Game(canvas)
{
    game = new ObjGame();
    //game.cars = new Car();
    //game.input = new Input();
    //game.map = new Map();
    //game.images = new Image();
    //game.pseudo;

    game.can = canvas;
    game.ctx = canvas.getContext("2d");

    state = "";
    setInterval("TimerFct()", 50);
}

/**
 * 
 * @returns {undefined}
 */
function TimerFct()
{
    switch (state) {
        case "LoadMap" :
            StateLoadMap();
            break;
        case "LoadImage" :
            StateLoadImage();
            break;
        case "WaitStart" :
            StateWaitStart();
            break;
        case "Play" :
            StatePlay();
            break;
        case "Finished" :
            StateFinished();
            break;
        default :
            StatePlay();
    }
}

/**
 * 
 * @returns {undefined}
 */
function StateLoadMap()
{
    //game.map.Load;
    //if (game.map.LoadedMap)
    //    state = "LoadImage";

}

/**
 * 
 * @returns {undefined}
 */
function StateLoadImage()
{
    //if (game.images.LoadedImage)
    //   state = "WaitStart";
}

/**
 * 
 * @returns {undefined}
 */
function StateWaitStart()
{

}

/**
 * 
 * @returns {undefined}
 */
function StatePlay()
{
    game.ctx.clearRect(0, 0, game.can.width, game.can.height);
    // cars.ForEachItem(function() {
    //    this.move();
    //});
}

/**
 * 
 * @returns {undefined}
 */
function StateFinished()
{

}