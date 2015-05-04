<?PHP



if (isset($_POST['submit_pseudo']) && $_POST['input_pseudo'])
{
    if(strlen($_POST['input_pseudo']) > 3)
    {
        if(strlen($_POST['input_pseudo']) < 10)
        {
            $_POST['pseudoOk'] = TRUE;
        }
        else
    {
        echo "Le pseudo est trop grand (maximum 10 caractères)";
    }
    }
    else
    {
        echo "Le pseudo est trop petit (minimum 4 caractères)";
    }
}

?>
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
    <?php 
    
    if(isset($_POST['pseudoOk']) && $_POST['pseudoOk'] == TRUE)
    {
        echo "<body onload=\"vgGame = new Game(document.getElementById('canGame'));\">
        <canvas id=\"canGame\" width=\"640\" height=\"384\">

        </canvas>
    </body>
    <script type=\"text/javascript\" src=\"script/Game.js\"></script>
    <script type=\"text/javascript\" src=\"script/Input.js\"></script>
    <script type=\"text/javascript\" src=\"script/Loader.js\"></script>
    <script type=\"text/javascript\" src=\"script/Items.js\"></script>
    <script type=\"text/javascript\" src=\"script/Sprite.js\"></script>
    <script type=\"text/javascript\" src=\"script/Map.js\"></script>";
    }
 else {
        echo "<form action=\"index.php\" method=\"post\">
        <input type=\"text\" name=\"input_pseudo\"/>
        <input type=\"submit\" name=\"submit_pseudo\" value=\"Entrer\"/>
        </form>";
    }
    
    ?>
</html>
