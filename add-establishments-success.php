<?php
header('Access-Control-Allow-Origin: *'); 
//Creates a class called Contact
class Establishment
{
  //To add more variables create the variable name here and set below
    public $establishmentName;
    public $establishmentEmail;
    public $imageUrl;
    public $price;
    public $maxGuests;
    public $googleLat;
    public $googleLong;
    public $description;
    public $selfCatering;
    public $id;
}

//Creates new establishment and sets properties
$newEstablishment = new Establishment();
$newEstablishment->establishmentName = $_POST["establishmentName"];
$newEstablishment->establishmentEmail = $_POST["establishmentEmail"];
$newEstablishment->imageUrl = $_POST["imageUrl"];
$newEstablishment->price = $_POST["price"];
$newEstablishment->maxGuests = $_POST["maxGuests"];
$newEstablishment->googleLat = $_POST["googleLat"];
$newEstablishment->googleLong = $_POST["googleLong"];
$newEstablishment->description = $_POST["description"];
$newEstablishment->selfCatering = $_POST["selfCatering"];
$newEstablishment->id = $_POST["id"];

//Adds object to array
<<<<<<< HEAD
$establishmentsList = file_get_contents('./client/public/establishments.json');
=======
$establishmentsList = file_get_contents('establishments.json');
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
$jsonInput = json_decode($establishmentsList, true);
array_push($jsonInput, $newEstablishment);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
<<<<<<< HEAD
file_put_contents('./client/public/establishments.json', $jsonData);
=======
file_put_contents('establishments.json', $jsonData);
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
?>
