<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if user exists in database
$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    // User exists, redirect to carpool form
    header('Location: carpool.html');
} else {
    // User does not exist, display error message
    echo "Invalid email or password";
}

// Close connection
mysqli_close($conn);
?>