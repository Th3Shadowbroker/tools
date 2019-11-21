<?php
    header('Content-Type: text/plain');

    $collectionId = isset($_GET['collectionId']) ? $_GET['collectionId'] : null;
    $url = 'https://steamcommunity.com/sharedfiles/filedetails/?id='.$collectionId;

    if (!is_null($collectionId)) {
        echo file_get_contents($url);
        exit(200);
    } else {
        exit(500);
    }
