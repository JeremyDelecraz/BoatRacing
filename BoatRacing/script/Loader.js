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
   this.total = 33;
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
         //alert("Ca charge");
      }

      img.onerror = function()
      {
         self.error += 1;
         self.message = "Erreur lors du chargement de l'image ";
         //alert(imgList);
         //alert("C'est nul");

         if (self.total < self.count)
         {
            alert("Toutes les images n'ont pas chargé");
         }
      }
      //console.log( "id = " + listOne + "url = " + imgList[listOne] );
   }

   this.Loaded = function()
   {
      if (self.count === self.total)
      {
         return true;
      }
      else
      {
         return false;
      }
   }

   this.GetImage = function (id)
   {
      if (self.images[id] == null)
      {
         return null;
      }
      else
      {
         return self.images[id];
      }
   }

}