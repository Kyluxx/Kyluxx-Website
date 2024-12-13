<?php
// Start the session
session_start();

// Database connection
$conn = new mysqli('127.0.0.1', 'root', 'rizky', 'crud_system');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Escape user inputs to prevent SQL injection
    $username = $conn->real_escape_string($_POST['username']);
    $password = $_POST['password']; // Plaintext input

    // Query to fetch user data
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Fetch user data
        $row = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $row['password'])) {
            // Set session variables
            $_SESSION['loggedin'] = true;
            $_SESSION['username'] = $row['username'];
            $_SESSION['user_id'] = $row['id']; // Unique user ID for this session

            // Redirect to CRUD page
            header("Location: crud.php");
            exit;
        } else {
            header("Location: index.php?error=Incorrect password");
            exit;
        }
    } else {
        header("Location: index.php?error=Username not Found");
        exit;
    }
}

$conn->close();
?>