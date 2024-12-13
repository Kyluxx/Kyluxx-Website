<?php
// Start the session
session_start();

// Redirect to login page if not logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: index.html");
    exit;
}

// Database connection
 $conn = new mysqli('sql312.infinityfree.com', 'if0_37813062', 'Letmetryhost45', 'if0_37813062_crud_system');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Logged-in user's ID
$user_id = $_SESSION['user_id'];

// Handle form submissions for Add/Edit/Delete
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['task_name'])) {
    $task_name = $conn->real_escape_string($_POST['task_name']);

    if (isset($_POST['task_id']) && !empty($_POST['task_id'])) {
        // Edit task
        $task_id = (int)$_POST['task_id'];
        $conn->query("UPDATE tasks SET task_name = '$task_name' WHERE id = $task_id AND user_id = $user_id");
    } else {
        // Add task
        $conn->query("INSERT INTO tasks (task_name, user_id) VALUES ('$task_name', $user_id)");
    }

    header("Location: crud.php");
    exit;
}

// Handle delete request
if (isset($_GET['delete'])) {
    $task_id = (int)$_GET['delete'];
    $conn->query("DELETE FROM tasks WHERE id = $task_id AND user_id = $user_id");

    header("Location: crud.php");
    exit;
}

// Fetch tasks for the logged-in user
$result = $conn->query("SELECT * FROM tasks WHERE user_id = $user_id ORDER BY created_at DESC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRUD Dashboard</title>
    <link rel="stylesheet" href="stylecrud.css">
</head>
<body>
    <div class="container">
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>

        <!-- Add/Edit Task Form -->
        <form method="POST" action="crud.php">
            <input type="text" name="task_name" placeholder="Enter task name" required>
            <input type="hidden" name="task_id" value="<?php echo $_GET['edit'] ?? ''; ?>">
            <button type="submit" class="submit-btn">
                <?php echo isset($_GET['edit']) ? 'Update Task' : 'Add Task'; ?>
            </button>
        </form>

        <!-- Task Table -->
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Task Name</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if ($result->num_rows > 0): ?>
                    <?php while ($row = $result->fetch_assoc()): ?>
                        <tr>
                            <td><?php echo $row['id']; ?></td>
                            <td><?php echo htmlspecialchars($row['task_name']); ?></td>
                            <td><?php echo $row['created_at']; ?></td>
                            <td>
                                <a class="edit-btn" href="crud.php?edit=<?php echo $row['id']; ?>">Edit</a>
                                <a class="delete-btn" href="crud.php?delete=<?php echo $row['id']; ?>">Delete</a>
                            </td>
                        </tr>
                    <?php endwhile; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="4">No tasks found!</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
        <a class="logout-btn" href="logout.php">Logout</a>
    </div>
</body>
</html>

<?php $conn->close(); ?>