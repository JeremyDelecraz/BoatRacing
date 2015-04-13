/*      ****************************************************************      */
/*      *                          BOATRACING                          *      */
/*      ****************************************************************      */
/*      *   Nom                 :   NETUSCHIL                          *      */
/*      *   Prénom              :   Dylan                              *      */
/*      *   Classe              :   I.FA-P3B                           *      */
/*      *   Date de création    :   30 mars 2015                       *      */
/*      *   Version             :   1.0                                *      */
/*      *   Description         :   Class de l'objet Items             *      */
/*      ****************************************************************      */

function Items(vaId)
{
   // Parametre de la classe ItemsSet
   this.data = new Array();
   this.localId = vaId;
   this.loadTime = Date.now();
   // Variables de secours de this
   var self = this;

   /**
    * Envoie les informations concernant l’utilisateur local au serveur et 
    * attend en retour un tableau des nouvelles position de tous les joueurs. 
    * Met a jour les sprites avec le informations reçues
    */
   this.SendData = function()
   {
      // Création de l'objet de requette
      xHtml = window.XMLHttpRequest ? new XMLHttpRequest()
              : new ActiveXObject("Microsoft.XMLHTTP");

      // Création de la lecture automatique des réponse
      xHtml.onreadystatechange = function()
      {
         if (xHtml.readyState == 4 && (xHtml.status == 200 || xHtml.status == 0))
         {
            // Si une réponse en reçu, faire LoadData avec 
            self.LoadData(xHtml.responseText);
         }
      };

      // Envoyer la requette en GET au serveur
      url = "../php/serveur.php?id=" + this.localId + "&x=" + this.data[this.localId].x + "&y=" + this.data[this.localId].y + "&alpha=" + this.data[this.localId].alpha + "&speed=" + this.data[this.localId].speed + "&energy=" + this.data[this.localId].energy;
      xHtml.open("GET", url, true);
      xHtml.send(null);
   };

   /** 
    * Est appelé quand les données sur l’ensemble des joueurs sont chargées.
    * 
    * @param {json string} vaData
    */
   this.LoadData = function(vaData)
   {
      // Convertion du string json en objet
      vaData = JSON.parse(vaData);

      //alert(vaData);
      for (i = 0; i < vaData.Player.length; i++)
      {
         id = vaData.Player[i].id;
         if (this.data[id] === undefined)
         {
            s = new Sprite(vaData.Player[i].x, vaData.Player[i].y, vaData.Player[i].alpha, vaData.Player[i].speed, vaData.Player[i].energy, 0, 0, 0, 0, 0);
            this.data[id] = s;
         }
         else
         {
            this.data[id].x = vaData.Player[i].x;
            this.data[id].y = vaData.Player[i].y;
            this.data[id].alpha = vaData.Player[i].alpha;
            this.data[id].speed = vaData.Player[i].speed;
            this.data[id].energy = vaData.Player[i].energy;
         }
      }
      this.loadTime = vaData.Stamp;
   };

   /** 
    * Appelle la fonction vaFct pour chaque sprite dans le tableau 
    * (Move, Show, ...). La fonction vaFct reçoit quand à elle deux 
    * paramètres le sprite ainsi que l’objet Items (pour les collisions).
    * 
    * @param {string} vaFct
    */
   this.ForEachItem = function(vaFct)
   {
      for (i = 0; i < vaData.Player.length; i++)
      {
         id = vaData.Player[i].id;
         this.data[id].vaFct;
      }
   };
}