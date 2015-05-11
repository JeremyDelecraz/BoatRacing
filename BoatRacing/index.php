<?php
require_once './php/librairys.php';

function pseudoExist($p) {
    $result = FALSE;
    $file = './php/player.json';

    if (file_exists($file)) {
        $handle = fopen($file, 'r');
        $json = fgets($handle);
        fclose($handle);

        $obj = json_decode($json);

        if (PlayerExist($obj, $p)) {
            $result = TRUE;
        }
    }

    return $result;
}

$erreurs = array();
$pseudo = "";

if (isset($_POST['submit_pseudo'])) {
    if (isset($_POST['input_pseudo'])) {
        $pseudo = trim(filter_input(INPUT_POST, 'input_pseudo'));
    }

    if (strlen($pseudo) < 3)
        array_push($erreurs, 'Votre pseudo doit faire au moins 3 caractères');
    if (strlen($pseudo) > 10)
        array_push($erreurs, 'Votre pseudo ne peut pas dépasser 10 caractères');
    if (pseudoExist($pseudo))
        array_push($erreurs, 'Ce pseudo existe déjà');

    if (count($erreurs) == 0) {
        $file = './php/player.json';
        $p = new Player();
        $p->id = $pseudo;
        $p->x = 20;
        $p->y = 20;
        $p->alpha = 0;
        $p->speed = 0;
        $p->energy = 100;

        if (file_exists($file)) {
            $handle = fopen($file, 'r');
            $line = fgets($handle);
            fclose($handle);
            $obj = json_decode($line);

            if (count($obj->Player) < 4)
                AddPlayer($obj, $p);
            else
                array_push($erreurs, '4 joueurs sont déja inscrits');

            $handle = fopen($file, 'w');
            fwrite($handle, json_encode($obj));
            fclose($handle);
        }
        else {
            $obj = new Items();
            AddPlayer($obj, $p);
            $handle = fopen($file, 'w');
            fwrite($handle, json_encode($obj));
            fclose($handle);
        }
    }
}
?>

<!DOCTYPE html>

<html>
    <head>
        <title>BoatRacing</title>
        <meta charset="UTF-8" />
<?php if ((count($erreurs) == 0) AND (isset($_POST['submit_pseudo']))) { ?>
            <script type="text/javascript" src="script/Game.js"></script>
            <script type="text/javascript" src="script/Input.js"></script>
            <script type="text/javascript" src="script/Loader.js"></script>
            <script type="text/javascript" src="script/Items.js"></script>
            <script type="text/javascript" src="script/Sprite.js"></script>
            <script type="text/javascript" src="script/Map.js"></script>
        <?php } ?>
        <link rel="stylesheet" type="text/css" href="style/style.css">
    </head>      
    <!--<body <?php if ((count($erreurs) == 0) AND (isset($_POST['submit_pseudo']))) { ?> onload="vgGame = new Game( document.getElementById('canGame'));" <?PHP } ?>>-->
    <body>   
<?php if ((count($erreurs) == 0) AND (isset($_POST['submit_pseudo']))) { ?>
            <input type="hidden" id="localid" value="<?php echo $pseudo; ?>"/>
            <div id="Background">
                 <div id="Title">
                <h1 id="BoatRacing">Boat Racing</h1>
                 </div>
                <canvas id="canGame" width="640" height="384">

                </canvas>
            </div>

            <script type="text/javascript">
                vgGame = new Game(document.getElementById('canGame'));
            </script>

<?php } else { ?>

            <form id="form"  action="index.php" method="post">
                <div id="Background">
                    <div id="Title">
                    <h1 id="BoatRacing">Boat Racing</h1>
                    </div>
                    <div id="Inputs">
                        <input type="text" name="input_pseudo" />
                        <br/>
                        <input type="submit" id="valider" name="submit_pseudo" value="Entrer" />
                        <br/>
    <?php foreach ($erreurs as $e) { ?>
                        <span><?php echo $e; ?></span>
    <?php } ?>
                </div>
                </div>

            </form>

                <?php } ?>
    </body>
</html>