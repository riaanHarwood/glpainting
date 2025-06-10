function scrollToServices() {
    // Scroll to the services section smoothly
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    });
}


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body


function sendEmail() {
    window.location.href = "mailto:glpainting@gmail.com"; // Opens the default email client
}

function makeCall() {
    window.location.href = "tel:+6421915072"; // Initiates a call using the phone number
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}


//Language selector



function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
}

// Close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");

    button.addEventListener("mousedown", function () {
        this.style.backgroundColor = "rgb(255, 255, 255); ";// Click color
    });

    button.addEventListener("mouseup", function () {
        setTimeout(() => {
            this.style.backgroundColor = "rgb(255, 255, 255);"; // Reset to original color
        }, 150); // Delay to allow click effect
    });

    button.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "rgb(255, 255, 255); "; // Reset if mouse leaves
    });
});



// Service's

// Select all the service cards
const serviceCards = document.querySelectorAll('.service');

serviceCards.forEach(card => {
    // Add a click event listener to each card
    card.addEventListener('click', () => {
        // Find the content-hide element within the clicked card
        const content = card.querySelector('.content-hide');
        
        // Toggle the visibility of the content
        content.classList.toggle('hidden');
    });
});

document.querySelectorAll('.service').forEach(card => {
    const viewMore = card.querySelector('.view-more');
    const content = card.querySelector('.content-hide');
  
    viewMore.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent card click from triggering
      content.style.display = 'block';
      viewMore.style.display = 'none';
      card.classList.add('open');
    });
  
    card.addEventListener('click', () => {
      if (card.classList.contains('open')) {
        content.style.display = 'none';
        viewMore.style.display = 'flex';
        card.classList.remove('open');
      }
    });
});


