/******************************************
 * Projet : Boat Racing
 * Description : Cette class va se charger de les images et de les mettres à disposition.
 * Date : 23.03.2015
 * Version : 1.0
 * Auteur : Sebastian Lopez
 * Tests : 
 * *****************************************/


function Loader(imgList)
{
   var self = this;

   this.images = {};
   this.total = 0;
   this.error = 0;
   this.count = 0;
   this.message = "";


   // Constructeur ------------------------------------------------------------

   for (var item in imgList)
   {
      var img = new Image();

      img.src = imgList[item];
      self.images[item] = img;
      self.count++;

      img.onload = function()
      {
         self.total += 1;
         if (self.total == self.count)
         {
            alert("C'est bon");
         }
         //alert("Ca charge");
      }

      img.onerror = function()
      {
         self.error += 1;
         self.message = "Erreur lors du chargement de l'image ";
         //alert(imgList);
         //alert("C'est nul");

         if (self.total != self.count)
         {
            alert("Toutes les images n'ont pas chargé");
         }
      }
      //console.log( "id = " + listOne + "url = " + imgList[listOne] );
   }

   function Loaded()
   {
      if (load.count === load.Total)
      {
         return true;
      }
      else
      {
         return false;
      }
   }

   function GetImage(id)
   {
      if (image[id] == null)
      {
         return null;
      }
      else
      {
         return image[id];
      }
   }

}


/*
 function Loader(list)
 {
 
 return 0;
 
 
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
 if(load.count === load.Total)
 {
 return true;
 }
 else
 {
 return false;
 }
 }
 
 function GetImage(id)
 {
 return load.image[id];
 }
 
 */