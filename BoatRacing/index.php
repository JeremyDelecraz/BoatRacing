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
    <body onload="vgGame = new Game( document.getElementById('canGame'));">
        <canvas id="canGame" width="720" height="720">
            
        </canvas>
    </body>
</html>
<script type="text/javascript" src="script/Game.js"></script>
<script type="text/javascript" src="script/Input.js"></script>