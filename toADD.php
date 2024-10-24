<?php
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Load the XML file
$xml = simplexml_load_file('users.xml');

// Create a new user element
$user = $xml->addChild('user');
$user->addChild('name', $name);
$user->addChild('email', $email);
$user->addChild('password', $password);

// Save the XML file
$xml->asXML('users.xml');
?>
