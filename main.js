function searchEvents() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let events = document.querySelectorAll(".event-card");
    let found = false;

    events.forEach(event => {
        let eventText = event.innerText.toLowerCase();
        if (eventText.includes(input)) {
            event.style.display = "block";
            found = true;
        } else {
            event.style.display = "none";
        }
    });

    // Display a "No results found" message
    let noResultMsg = document.getElementById("no-results");
    if (!found) {
        if (!noResultMsg) {
            noResultMsg = document.createElement("p");
            noResultMsg.id = "no-results";
            noResultMsg.textContent = "No results found.";
            noResultMsg.style.color = "red";
            noResultMsg.style.textAlign = "center";
            document.getElementById("events").appendChild(noResultMsg);
        }
    } else if (noResultMsg) {
        noResultMsg.remove();
    }
}

// Function to filter events based on category
function filterEvents(category) {
    const eventCards = document.querySelectorAll('.event-card');

    // Loop through each event card and check the category
    eventCards.forEach(card => {
        const eventCategory = card.getAttribute('data-category');

        // If category is 'all', show all events, otherwise filter by category
        if (category === 'all' || eventCategory === category) {
            card.style.display = 'block';  // Show card
        } else {
            card.style.display = 'none';  // Hide card
        }
    });
}

// Add event listeners to category filter links
document.querySelectorAll('#cat-filtering a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');  // Get category from link

        filterEvents(category);  // Call function to filter events
    });
});

// Optionally, show all events initially when the page loads
window.onload = () => {
    filterEvents('all');
};


