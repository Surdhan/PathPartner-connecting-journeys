<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if carpool exists in database
$pickupLocation = $_POST['pickup-location'];
$dropoffLocation = $_POST['dropoff-location'];
$date = $_POST['date'];
$time = $_POST['time'];

$query = "SELECT * FROM carpools WHERE pickup_location = '$pickupLocation' AND dropoff_location = '$dropoffLocation' AND date = '$date' AND time = '$time'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    // Carpool exists, display carpool details
    while ($row = mysqli_fetch_assoc($result)) {
        echo "Pickup Location: " . $row['pickup_location'] . "<br>";
        echo "Dropoff Location: " . $row['dropoff_location'] . "<br>";
        echo "Date: " . $row['date'] . "<br>";
        echo "Time: " . $row['time'] . "<br>";
        echo "Driver: " . $row['driver'] . "<br>";
        echo "Passengers: " . $row['passengers'] . "<br>";
    }
} else {
    // Carpool does not exist, display error message
    echo "No carpools found";
}

// Close connection
mysqli_close($conn);
?>