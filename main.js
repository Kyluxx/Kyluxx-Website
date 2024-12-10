document.addEventListener("DOMContentLoaded", function() {
  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const p3 = document.getElementById('p3');
  const navbar = document.querySelector(".navbar");
  const form = document.querySelector(".contact form");
  const sections = document.querySelectorAll("section"); // All sections
  const navLinks = document.querySelectorAll(".nav-links li a"); // Navbar links
  const aboutSection = document.getElementById('about'); // The About section
  const projectSection = document.getElementById('projects');
  const scrollElement = document.getElementById('scrollElement'); // The element to animate
  let cardisLoaded = false;
  // Form Submission Alert
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Message Sent! Thank you for reaching out.");
      form.reset(); // Clear the form fields
    });
  }

  // Highlight navbar links based on visible section and trigger animation for About
  const observerOptions = {
    root: null, // Observe relative to the viewport
    threshold: 0.6, // 60% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(
        `.nav-links li a[href="#${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        // Highlight the current section link
        navLinks.forEach((navLink) => {
          navLink.style.color = "#e0e0e0";
          //navLink.style.borderBottom = "0px solid #00e5ff"; // Remove custom underline
        }); // Reset others to white
        if (link) {
          link.style.color = "#00e5ff";
        } // Highlight current section
        
        // Trigger animation when the About section enters the viewport
        if (entry.target === aboutSection) {
          console.log('activated')
          scrollElement.classList.add('animate'); // Add class to trigger animation
          setTimeout(() => animateProgressBar(80, 60, 0), 1000);
        }

        if (entry.target === projectSection && cardisLoaded === false) {
          console.log('activated');
          let i = 0;
          const animId = setInterval(() => {
            i += 1;
            if (i === 1) p1.classList.add('anim');
            if (i === 2) p2.classList.add('anim');
            if (i === 3) p3.classList.add('anim');
            console.log(i);
            if (i === 3) {
              clearInterval(animId);
              cardisLoaded = true;
            };
          }, 500); // Add class to trigger animation
        }
      }
    });
  }, observerOptions);

  // Attach observer to each section
  sections.forEach((section) => observer.observe(section));
});



let heroText = document.getElementById('heroText');

const hText = [
  "Student",
  "Junior Developer",
  "Chill Guy"
];

let arrI = 0;

// Function to update text with fade effect
function updateHero() {
  // Create a new span element for animation
  const newText = document.createElement("span");
  newText.textContent = hText[arrI];
  newText.classList.add("fade");

  // Replace the text in the hero element
  heroText.innerHTML = "I'm a "; // Clear previous content
  heroText.appendChild(newText); // Add new animated text

  // Update index for the next text
  arrI = (arrI + 1) % hText.length;

  // Trigger the function again after animation duration
  setTimeout(updateHero, 2500); // Matches animation duration (2.5s)
}

// Start the text updates
updateHero();

// Call the updateHero function every 3 seconds to change the text and animate

const offcanvas = document.getElementById('offcanvas');
const overlay = document.getElementById('overlay');
const closebtn = document.getElementById('close-btn');
const openBtn = document.getElementById('open-btn');

document.getElementById('open-btn').onclick = toggleOffcanvas;

function toggleOffcanvas() {

  offcanvas.style.left = '0';
  overlay.style.display = 'block';

  // Close offcanvas when clicking outside
  overlay.addEventListener('click', () => {
    offcanvas.style.left = '-100%';
    overlay.style.display = 'none';
  });
}

const audioPlayer = document.getElementById("audioPlayer");
const currentSongText = document.getElementById("current-song");

// Playlist of songs
const playlist = [
  { title: "Mice on Venus", src: "/music/C418 - Mice on Venus - Minecraft Volume Alpha.mp3" },
  { title: "Minecraft", src: "/music/C418 - Minecraft - Minecraft Volume Alpha.mp3" },
  { title: "Moog City", src: "/music/C418 - Moog City - Minecraft Volume Alpha.mp3" },
  { title: "Sweden", src: "/music/C418 - Sweden - Minecraft Volume Alpha.mp3" },
];

let currentSongIndex;
// Function to load and play the current song
// Load a random song
let switchOn = document.getElementById('username');
let songIsOn = false;

function songOn() {
  console.log(songIsOn)
  currentSongIndex = Math.floor(Math.random() * playlist.length);
  const song = playlist[currentSongIndex];
  audioPlayer.src = song.src; // Set the source

  if (songIsOn === false) {
    currentSongText.textContent = `C148  -  ${song.title}`; // Update the song title
    //console.log(songIsOn)
    currentSongText.classList.add('color');
    songIsOn = true;
    // Play the song with error handling
    audioPlayer.play().catch((error) => {
      if (error.name !== "AbortError") {
        console.error("Error playing audio:", error);
      }
    });
  }
  else {
    currentSongText.classList.remove('color');
    currentSongText.textContent = `C148`;
    songIsOn = false;
    console.log(songIsOn);
    console.log(currentSongText.classList);
  }
}

function songOff() {
  currentSongText.textContent = '';
  audioPlayer.pause(); // Pause the audio
  audioPlayer.currentTime = 0; // Reset playback position
  audioPlayer.src = ''; // Clear the source (do not use null)
}

function animateProgressBar(...p) {
  const progressBar = document.getElementById('progress-bar');
  const progressBar2 = document.getElementById('progress-bar2');
  const progressBar3 = document.getElementById('progress-bar3');
  // Set the width to the given percentage
  progressBar.style.width = `${p[0]}%`;
  progressBar2.style.width = `${p[1]}%`;
  progressBar3.style.width = `${p[2]}%`;
}
