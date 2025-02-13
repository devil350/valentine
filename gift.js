// Function to update the clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

// Check if the user navigated back
if (document.referrer.includes("previous_page_url")) {
    document.getElementById("dynamic-message").textContent = "Welcome back! We missed you!";
}

// Set interval to update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
