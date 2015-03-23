<?PHP ?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Boat racing</title>
    </head>
    <body onload='Game(document.getElementById("canGame"));Input();'onkeydown="OnKeyUpDown(event)>
        <canvas id="canGame" width="720" height="720">
            
        </canvas>
        <script>
            
            this.SetOneKey("Up", 87);
            
        </script>
    </body>
</html>
<script type="text/javascript" src="script/Game.js"></script>
<script type="text/javascript" src="script/Input.js"></script>