<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <link rel="stylesheet" href="styleregister.css">
</head>
<body>
    <div class="container">
        <h1>Create an Account</h1>

        <!-- Display success or error message -->
        <?php if (isset($_GET['success'])): ?>
            <div class="message success">
                <?php echo htmlspecialchars($_GET['success']); ?>
            </div>
        <?php elseif (isset($_GET['error'])): ?>
            <div class="message error">
                <?php echo htmlspecialchars($_GET['error']); ?>
            </div>
        <?php endif; ?>

        <form action="registerid.php" method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="password" name="confirm_password" placeholder="Confirm Password" required>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="index.php">Login here</a></p>
    </div>
</body>
</html>