<html>
    <head>
        <meta charset="UTF-8">
        <title>Boat racing</title>
         <link rel="stylesheet" type="text/css" href="style/style.css">
    </head>
    <body onload="vgGame = new Game(document.getElementById('canGame'));">
        <input type="hidden" id="localid" value="toto"/>
        <div id="Background">
                    <h1 id="BoatRacing">Boat Racing</h1>
          <canvas id="canGame" width="640" height="384">

        </canvas>
        </div>
    </body>
    <script type="text/javascript" src="script/Game.js"></script>
    <script type="text/javascript" src="script/Input.js"></script>
    <script type="text/javascript" src="script/Loader.js"></script>
    <script type="text/javascript" src="script/Items.js"></script>
    <script type="text/javascript" src="script/Sprite.js"></script>
    <script type="text/javascript" src="script/Map.js"></script>
</html>