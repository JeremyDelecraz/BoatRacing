/******************************************
 * Projet : BoatRacing
 * Description : Classe Input du projet
 * Date : 23.03.2015
 * Version : 1.0
 * Auteur : Boccard Nicolas
 * *****************************************/
function Input()
{
    var self = this;
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    this.fire1 = false;
    this.fire2 = false;
    this.keysCode = {};
    /*------------------------------------------------------------------------*/
    //Enclenche cette fonction quand on relâche une touche
    document.onkeyup = function( event ) {
        self.OnKeyUpDown(event);
    };

    /*------------------------------------------------------------------------*/
    //Enclenche cette fonction quand on appuie sur une touche
    document.onkeydown = function( event ) {
        self.OnKeyUpDown(event);
    };
    
    /*------------------------------------------------------------------------*/
    //Définie le tableau associatif selon les valeurs misent en paramètres
    this.SetOneKey = function(direction, keyCode)
    {
        self.keysCode[direction] = keyCode;
    };
    
    /*------------------------------------------------------------------------*/
    //Vérifie sur quelle touche on a appuyer
    this.OnKeyUpDown = function(event)
    {
        console.log("dans event");
        if (event.type === "keydown")
        {
            var bool = true;
        } else
        {
            var bool = false;
        }
        
        if      ( event.keyCode == this.keysCode["up"] ) {
                this.up = bool;
        }
        else if ( event.keyCode == this.keysCode["down"] ) {
                this.down = bool;
        }
        else if ( event.keyCode == this.keysCode["right"] ) {
                this.right = bool;
        }
        else if ( event.keyCode == this.keysCode["left"] ) {
                this.left = bool;
        }
    };
    /*
    // Afficher l'état du clavier
    this.getState = function() {
        return ((this.left)  ? 'left ' : ' ') + 
               ((this.up)    ? 'up'    : ' ') + 
               ((this.down)  ? 'down'  : ' ') + 
               ((this.right) ? 'right' : ' ') + 
               '';
    };*/
}