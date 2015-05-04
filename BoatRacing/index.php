<?php
    
    require_once './php/librairys.php';
    function pseudoExist($p)
    {
        $result = FALSE;
        $file = './php/player.json';
        
        if ( file_exists($file) )
        {
            $handle = fopen($file, 'r');
            $json = fgets($handle);
            fclose($handle);
            
            $obj = json_decode($json);
            
            if (PlayerExist($obj, $p))
            {
                $result = TRUE;
            }
        }
        
        return $result;
    }


    $erreurs = array();
    $pseudo = "";
    
    if ( isset($_POST['submit_pseudo']) )
    {
        if (isset($_POST['input_pseudo'])) { $pseudo = trim(filter_input(INPUT_POST, 'input_pseudo')); }
        
        if ( strlen($pseudo) < 3 )
            array_push ($erreurs, 'Votre pseudo doit faire au moins 3 caractères');
        if ( strlen($pseudo) > 10 )
            array_push ($erreurs, 'Votre pseudo ne peut pas dépasser 10 caractères');
        if (pseudoExist($pseudo) )
            array_push ($erreurs, 'Ce pseudo existe déjà');
        
        if (count($erreurs) == 0)
        {
            $file = './php/player.json';
            $p = new Player();
            $p->id = $pseudo;
            $p->x = 20;
            $p->y = 20;
            $p->alpha = 0;
            $p->speed = 0;
            $p->energy = 100;
            
            $handle = fopen($file, 'r');
            $line = fgets($handle);
            fclose($handle); 
            $obj = json_decode($line);
            
            if ( count($obj->Player) < 4 )
                AddPlayer($obj, $p);
            else
                array_push ($erreurs, '4 joueurs sont déja inscrits');
                
            $handle = fopen($file, 'w');
            fwrite($handle, json_encode($obj));
            fclose($handle);
        }
    }

?>

<!DOCTYPE html>

<html>
    <head>
        <title>BoatRacing</title>
        <meta charset="UTF-8" />
        <style type="text/css">
            #canGame{ border: 2px black solid; }
        </style>
    </head>      
    <body>
        <?php if ( (count($erreurs) == 0) AND (isset($_POST['submit_pseudo'])) ) { ?>
        
        <canvas id="canGame" width=\"640\" height=\"384\"></canvas>
        
        <?php } else { ?>
        
        <form  action="index.php" method="post">
            <input type="text" name="input_pseudo" />
            <input type="submit" name="submit_pseudo" value="Entrer" />
            <?php foreach ( $erreurs as $e ){ ?>
            <span><?php echo $e; ?></span>
            <?php } ?>
        </form>
        
        <?php } ?>
    </body>
    <?php if ( (count($erreurs) == 0) AND (isset($_POST['submit_pseudo'])) ) { ?>
    <script type=\"text/javascript\" src=\"script/Game.js\"></script>
    <script type=\"text/javascript\" src=\"script/Input.js\"></script>
    <script type=\"text/javascript\" src=\"script/Loader.js\"></script>
    <script type=\"text/javascript\" src=\"script/Items.js\"></script>
    <script type=\"text/javascript\" src=\"script/Sprite.js\"></script>
    <script type=\"text/javascript\" src=\"script/Map.js\"></script>
    <?php } ?>
</html>