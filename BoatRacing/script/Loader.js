/******************************************
* Projet : Boat Racing
* Description : Cette class va se charger de les images et de les mettres à disposition.
* Date : 23.03.2015
* Version : 1.0
* Auteur : Sebastian Lopez
* Tests : 
* *****************************************/
var self = this;
function ObjLoader()
{
    this.images = array(id,Url),
    this.total,
    this.error,
    this.count,
    this.message;
}

function Loader(list)
{
    load = new ObjLoader();
    var listOne = list;
    
    var img = new Image();
    
    
    img.onload = function ()
    {
        load.count += 1;
    };
    
    img.onerror = function ()
    {
        load.message = "Erreur de chargement d'image";
    };
    
    img.src = listOne.url;
    
    this.image[listOne.id] = img;
}

function Loaded()
{
    
}

function GetImage(id)
{
    for(i = 0; i<load.total; i++)
    {
        return load.image[id];
    }
}


