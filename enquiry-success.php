<?php
header('Access-Control-Allow-Origin: *'); 
//Creates a class called Enquiry
class Enquiry
{
    public $establishment;
    public $clientName;
    public $email;
    public $checkin;
    public $checkout;
}

//Creates new enquiry and sets properties
$newEnquiry = new Enquiry();
$newEnquiry->establishment = $_POST["establishment"];
$newEnquiry->clientName = $_POST["clientName"];
$newEnquiry->email = $_POST["email"];
$newEnquiry->checkin = $_POST["checkin"];
$newEnquiry->checkout = $_POST["checkout"];
$newEnquiry->adults = $_POST["adults"];
$newEnquiry->children = $_POST["children"];
$newEnquiry->notes = $_POST["notes"];

//Adds object to array
<<<<<<< HEAD
$enquiriesList = file_get_contents('./client/public/enquiries.json');
=======
$enquiriesList = file_get_contents('enquiries.json');
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
$jsonInput = json_decode($enquiriesList, true);
array_push($jsonInput, $newEnquiry);

//Writes array to JSON file
$jsonData = json_encode($jsonInput);
<<<<<<< HEAD
file_put_contents('./client/public/enquiries.json', $jsonData);
=======
file_put_contents('enquiries.json', $jsonData);
>>>>>>> 28ccfc8fd056e733599c02bcc039f1b73b1b940d
?>
