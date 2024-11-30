<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kyluxx's Personal Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">Kyluxx</div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Hi, I'm <span class="highlight">Kyluxx!</span></h1>
            <p>A beginner developer who wants to reach his dream, one line of code at a time.</p>
            <a href="#projects" class="btn">View his Progress!</a>
        </div>
    </section>

    <section id="about" class="about">
        <h2>About Kyluxx</h2>
        <p>
            Kyluxx is a beginner developer, he is currently learning more about Javascript, PHP, APIs, etc. Stay tuned to see his progress!
        </p>
    </section>

    <section id="projects" class="projects">
        <h2>Kyluxx's Projects</h2>
        <div class="project-grid">
             <a href="./calc/index.php">
              <div class="project-card">
                
                <h3>Calculator</h3>
                <p>A simple Calculator!</p>
            </div>
            <div class="project-card">
             </a>
                
                <h3>N/A</h3>
                <p>Coming soon!</p>
            </div>
            <div class="project-card">
                
                <h3>N/A</h3>
                <p>Stay tuned!</p>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <h2>Left a message for Kyluxx!</h2>
        <form id="my-form" action="https://formspree.io/f/meoqpleq" method="post">
            <input type="text" name="name" placeholder="Your Name" required>
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" class="btn">Send Message</button>
        </form>
    </section>

    <footer>
        <p>© 2024 Kyluxx | All Rights Reserved</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
