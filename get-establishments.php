<?php
header('Access-Control-Allow-Origin: *'); 
<<<<<<< HEAD
$establishmentsList = file_get_contents('./client/public/establishments.json');
=======
$establishmentsList = file_get_contents('establishments.json');
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d


header('Content-Type: application/json');
echo ($establishmentsList);

?>