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
        <script type="text/javascript" src="script/Loader.js"></script>
        <script type="text/javascript">
            var listImage = {};
            for (i = 1; i < 31; i++)
            {
                listImage[i-1] = "Images/Map/" + i + ".jpg";
            }
            var load = new Loader( listImage );
        </script>
        
<h1>Test 1</h1>
    </body>
</html>
<script type="text/javascript" src="script/Game.js"></script>
<script type="text/javascript" src="script/Input.js"></script>