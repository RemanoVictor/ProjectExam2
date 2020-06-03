<?php
    header('Access-Control-Allow-Origin: *'); 
    $enquiriesList = file_get_contents('./client/public/enquiries.json');
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>