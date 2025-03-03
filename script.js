function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  // Hide tab contents
        tabcontent[i].classList.remove("active"); // Remove active class
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");  // Remove active class from buttons
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    const activeTab = document.getElementById(tabName);
    activeTab.style.display = "block"; // Show the active tab content
    activeTab.classList.add("active"); // Add active class for animation

    evt.currentTarget.classList.add("active"); // Add active class to the clicked button
}

// By default, open the "home" tab (this ensures the first tab shows when the page loads)
document.getElementsByClassName("tablinks")[0].click();
function toggleInfo(leaderId) {
    const info = document.getElementById(leaderId);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        info.style.animation = "slideDown 0.5s ease-out"; // Trigger the slide-down animation
    } else {
        info.style.display = "none"; // Hide the info again
    }
}
let index = 0;
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;

function showNextImage() {
    index = (index + 1) % totalImages;
    document.querySelector(".carousel").style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextImage, 3000); // Change every 3 seconds
