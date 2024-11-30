// Simple alert for form submission (replace with a backend logic if needed)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact form");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Message Sent! Thank you for reaching out.");
            form.reset(); // Clear the form fields
        });
    }
});