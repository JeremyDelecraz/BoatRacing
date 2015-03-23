/******************************************
* Projet : BoatRacing
* Description : Classe Input du projet
* Date : 23.03.2015
* Version : 1.0
* Auteur : Boccard Nicolas
* Tests : Acun test effectués
* *****************************************/

function Input()
{
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    this.fire1 = false;
    this.fire2 = false;
    this.keysCode[''];
    
    this.onKeyUpDown = OnKeyUpDown(event);
    
    this.onKeyUpDown.this.up;
    
    this.ctor = function()
    {
        
    };
    
    ctor();
}

function OnKeyUpDown(event)
{
    if (event.type === "keydown")
    {
        var bool = true;
    } else
    {
        var bool = false;
    }
    switch (evt.keyCode)
    {
        case 38:
            this.up = bool;

            break;
        case 83:
            this.down = bool;
            break;
        case 68:
            this.right = bool;
            break;
        case 65:
            this.left = bool;
            break;
        default:
    }
}

function SetOneKey(direction, keyCode)
{
    
}