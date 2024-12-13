<?php
// Start the session
session_start();

// Database connection
$conn = new mysqli('sql312.infinityfree.com', 'if0_37813062', 'Letmetryhost45', 'if0_37813062_crud_system');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $username = $conn->real_escape_string($_POST['username']);
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Check if passwords match
    if ($password !== $confirm_password) {
        $error = "Passwords do not match!";
        header("Location: register.php?error=" . urlencode($error));
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Check if username already exists
    $check_sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($check_sql);

    if ($result->num_rows > 0) {
        $error = "Username already taken!";
        header("Location: register.php?error=" . urlencode($error));
        exit;
    } else {
        // Insert user into the database
        $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
        if ($conn->query($sql) === TRUE) {
            $success = "Registration successful!";
            header("Location: register.php?success=" . urlencode($success));
            exit;
        } else {
            $error = "Error: " . $conn->error;
            header("Location: register.php?error=" . urlencode($error));
            exit;
        }
    }
}

$conn->close();
?>