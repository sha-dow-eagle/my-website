document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        document.getElementById("contact-form").reset(); // Clear form after submission
    } else {
        alert("Please fill out both fields.");
    }
});