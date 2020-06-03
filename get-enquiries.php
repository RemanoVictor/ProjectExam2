<?php
    header('Access-Control-Allow-Origin: *'); 
<<<<<<< HEAD
    $enquiriesList = file_get_contents('./client/public/enquiries.json');
=======
    $enquiriesList = file_get_contents('enquiries.json');
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>