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
        <script>
            for (i = 1; i < 31; i++)
            {
                listImage[i-1] = "Images/Map/" + i + ".jpg";
            }
            var load = new Loader( listImage );
            this.SetOneKey("Up", 87);
            

            input.SetOneKey("down", 83);
            input.SetOneKey("left", 65);
            input.SetOneKey("right", 68);   // 
            input.SetOneKey("fire1", 16);   // shift
            input.SetOneKey("fire2", 17);   // ctrl
        </script>
        
<h1>Test 1</h1>
    </body>
</html>
<!--<script type="text/javascript" src="script/Game.js"></script>-->
