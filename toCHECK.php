<?php
$email = $_POST['email'];
$password = $_POST['password'];

// Load the XML file
$xml = simplexml_load_file('users.xml');

// Check for a matching email and password
$matched_user = null;
foreach ($xml->user as $user) {
    if ($user->email == $email && $user->password == $password) {
        $matched_user = $user;
        break;
    }
}

// If a match is found, log the user in and redirect to the gym site
if ($matched_user != null) {
    session_start();
    $_SESSION['name'] = (string)$matched_user->name;
    header('Location: C:\Users\Siddhant\OneDrive\Desktop\GYM SITE\GymWeb.html');
    exit();
}

// If no match is found, display an error message
else {
    echo "Invalid email or password. Please try again or sign up if you do not have an account.";
}
?>
