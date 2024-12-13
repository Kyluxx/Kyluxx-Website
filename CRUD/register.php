<?php
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
        echo "Passwords do not match!";
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Check if username already exists
    $check_sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($check_sql);

    if ($result->num_rows > 0) {
        echo "Username already taken!";
    } else {
        // Insert user into the database
        $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hashed_password')";
        if ($conn->query($sql) === TRUE) {
            echo "Registration successful! <a href='index.html'>Login here</a>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>