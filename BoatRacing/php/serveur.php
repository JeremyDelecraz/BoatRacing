<?php
    
    // Objet items
    class Items {
        var $State;
        var $Stamp;
        var $Start;
        var $Player = array();
    }
    
    class Player {
        var $id;
        var $x;
        var $y;
        var $alpha;
        var $speed;
        var $energy;
        var $imageId;
    }
    
    function AddPlayer($item, $player)
    {
        array_push($item->Player, $player);
        $item->Stamp = microtime(TRUE);
        if ( count($item->Player) == 4 )
        {
            $item->Start = microtime(TRUE) + 5;
        }
    }
    
    function SetPlayer($item, $player)
    {
        for ( $i = 0; $i < count($item->Player); $i++ )
        {
            if ( $item->Player[$i]->id == $player->id )
            {
                $item->Player[$i] = $player;
                break;
            }
        }
    }
    
    function PlayerExist($item, $player)
    {
        $result = FALSE;
        foreach ($item->Player as $value)
        {
            if ( $value->id == $player->id )
            {
                $result = TRUE;
                break;
            }
        }
        return $result;
    }
    
    // Initialisation des variables
    $id = $x = $y = $alpha = $speed = $energy = '';
    $erreur = array();
    
    if (isset($_GET['id']))
    {
        // Asignation des variables.
        $id = filter_input(INPUT_GET, 'id', FILTER_DEFAULT);
        $x = filter_input(INPUT_GET, 'x', FILTER_VALIDATE_FLOAT);
        $y = filter_input(INPUT_GET, 'y', FILTER_VALIDATE_FLOAT);
        $alpha = filter_input(INPUT_GET, 'alpha', FILTER_VALIDATE_FLOAT);
        $speed = filter_input(INPUT_GET, 'speed', FILTER_VALIDATE_FLOAT);
        $energy = filter_input(INPUT_GET, 'energy', FILTER_VALIDATE_INT);
        
        // Test des variables
        if (empty($id))
            array_push ($erreur, 'Veuillez entrer le champs id');
        if (empty($x))
            array_push ($erreur, 'Veuillez entrer le champs x');
        if (empty($y))
            array_push ($erreur, 'Veuillez entrer le champs y');
        if (empty($alpha))
            array_push ($erreur, 'Veuillez entrer le champs alpha');
        if (empty($speed))
            array_push ($erreur, 'Veuillez entrer le champs speed');
        if (empty($energy))
            array_push ($erreur, 'Veuillez entrer le champs energy');
        
        
        if (!is_numeric($x))
            array_push ($erreur, 'X doit être une valeur numérique');
        if (!is_numeric($y))
            array_push ($erreur, 'Y doit être une valeur numérique');
        if (!is_numeric($alpha))
            array_push ($erreur, 'Alpha doit être une valeur numérique');
        if (!is_numeric($speed))
            array_push ($erreur, 'Speed doit être une valeur numérique');
        if (!is_numeric($energy))
            array_push ($erreur, 'Energy doit être une valeur numérique');
        
            $file = './player.json';
            $p = new Player();
            $p->id = $id;
            $p->x = $x;
            $p->y = $y;
            $p->alpha = $alpha;
            $p->speed = $speed;
            $p->energy = $energy;
                
            if ( file_exists($file) )
            {
                $handle = fopen($file, 'r');
                $line = fgets($handle);
                fclose($handle);
                
                $obj = json_decode($line);
                
                if ( count($erreur) == 0 )
                {
                    if ( PlayerExist($obj, $p) )
                        SetPlayer($obj, $p);
                    else
                    {
                        if ( count($obj->Player) < 4 )
                            AddPlayer($obj, $p);
                    }

                    $handle = fopen($file, 'w');
                    fwrite($handle, json_encode($obj));
                    fclose($handle);
                }
                
                
                echo json_encode($obj);
            }
            else
            {
                $obj = new Items();
                $obj->State = 'Inscription';
                $obj->Stamp = microtime(TRUE);
                $obj->Start = '';
                AddPlayer($obj, $p);
                
                $handle = fopen($file, 'w');
                fwrite($handle, json_encode($obj));
                fclose($handle);
                
                echo json_encode($obj);
            }
    }