<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Login</h1>
    <!-- Display error message if it exists -->
    <?php if (isset($_GET['error']) && !empty($_GET['error'])): ?>
      <p class="error-message"><?php echo htmlspecialchars($_GET['error']); ?></p>
    <?php endif; ?>

    <form action="auth.php" method="post">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" required>
      </div>
      <button type="submit" class="btn">Login</button>
      <p class="register-link">Don't have an account? <a href="register.html">Register</a></p>
    </form>
  </div>
</body>
</html>