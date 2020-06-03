<?php
header('Access-Control-Allow-Origin: *'); 
//Creates a class called Message
class Message
{
    public $clientName;
    public $email;
    public $message;
}

//Creates new message and sets properties
$newMessage = new Message();
$newMessage->clientName = $_POST["clientName"];
$newMessage->email = $_POST["email"];
$newMessage->message = $_POST["message"];

//Adds object to array
<<<<<<< HEAD
$messagesList = file_get_contents('./client/public/contact.json');
=======
$messagesList = file_get_contents('contact.json');
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
$jsonInput = json_decode($messagesList, true);
array_push($jsonInput, $newMessage);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
<<<<<<< HEAD
file_put_contents('./client/public/contact.json', $jsonData);
=======
file_put_contents('contact.json', $jsonData);
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
?>
