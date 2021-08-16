<?php

$conn = mysqli_connect("localhost", "benas", "password", "ajeskate");

if (!$conn) {
    die("Error connecting to database: " . mysqli_connect_error());
}


if (isset($_POST["contactMessage"], $_POST["contactEmail"], $_POST['contactName'])) {
    $name = filter_var($_POST["contactName"], FILTER_SANITIZE_STRING);
    $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['contactEmail']);
    $message = filter_var($_POST["contactMessage"], FILTER_SANITIZE_STRING);

    $query = "INSERT INTO `messages`(`name`, `email`, `message`) VALUES ($name, $email, $message)";
} if ($query = TRUE) {
    echo 'Your message was sent successfully';
} else {
    echo 'Something went wrong';
}

