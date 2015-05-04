<?PHP ?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Boat racing</title>
    </head>
    <style>
        #canGame{
            border: 2px black solid;
        }
    </style>
    <body onload="vgGame = new Game(document.getElementById('canGame'));">
        <input type="hidden" id="localid"  value="">
        <canvas id="canGame" width="640" height="384">

        </canvas>
    </body>
    <script type="text/javascript" src="script/Game.js"></script>
    <script type="text/javascript" src="script/Input.js"></script>
    <script type="text/javascript" src="script/Loader.js"></script>
    <script type="text/javascript" src="script/Items.js"></script>
    <script type="text/javascript" src="script/Sprite.js"></script>
    <script type="text/javascript" src="script/Map.js"></script>
</html>
