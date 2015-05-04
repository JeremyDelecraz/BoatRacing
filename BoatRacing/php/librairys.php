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
            if ( $value->id == $player )
            {
                $result = TRUE;
                break;
            }
        }
        return $result;
    }