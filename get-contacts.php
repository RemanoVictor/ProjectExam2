<?php
    header('Access-Control-Allow-Origin: *'); 
<<<<<<< HEAD
    $contactList = file_get_contents('./client/public/contact.json');
=======
    $contactList = file_get_contents('contact.json');
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
    header('Content-Type: application/json');
    echo ($contactList);
?>