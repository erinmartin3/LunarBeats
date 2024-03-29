document.addEventListener('DOMContentLoaded', function () {
    const rotatingImage = document.getElementById('rotating-image');
    const imagePaths = ['assets/img/image5.png', 'assets/img/image3.png', 'assets/img/image6.png','assets/img/image1.png','assets/img/image4.png','assets/img/image7.png','assets/img/image2.png', 'assets/img/image8.png'];
    let currentIndex = 0;

    function rotateImage() {
        rotatingImage.src = imagePaths[currentIndex];
        currentIndex = (currentIndex + 1) % imagePaths.length;
    }

    rotateImage();

    setInterval(rotateImage, 3500);
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('randomartist');
    const styledContent = document.getElementById('artist-info');

    toggleButton.addEventListener('click', function () {
            styledContent.classList.add('show-styles');
            toggleButton.disabled = false; // Disable the button after first click
        }, { once: true });
    });

function calculateCost() {
    var ticketType = document.getElementById('ticket-type').value;
    var quantity = document.getElementById('quantity').value;

    var ticketPrices = {
        'single-day-general': 125,
        'single-day-vip': 250,
        'weekend-general': 225,
        'weekend-vip': 450
    };

    var cost = ticketPrices[ticketType] * quantity;
    document.getElementById('total-cost').textContent = 'Total Cost: $' + cost;
}

function validateForm() {
    var ticketType = document.getElementById('ticket-type').value;
    var quantity = document.getElementById('quantity').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

    if (ticketType === "") {
        alert('Please select a ticket type.');
        return false;
    }

    if (quantity <= 0) {
        alert('Please enter a valid quantity.');
        return false;
    }

    if (name.trim() === "") {
        alert('Please enter your full name.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!paymentMethod) {
        alert('Please select a payment method.');
        return false;
    }

    return true;
}


function validateForm2() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === "") {
        alert('Please enter your full name.');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (message.trim()===""){
       alert('Please enter a message.');
       return false;
    }

    return true;
}

function showThankYouPopup(event) {
    event.preventDefault();
    if (validateForm()) {
        var ticketType = document.getElementById('ticket-type').value;
        var quantity = document.getElementById('quantity').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;

    if (quantity==1){
        alert('Thank you, ' + name + ', for buying ' + quantity + ' ticket. We look forward to seeing you at Lunar Beats. A confirmation email has been sent to ' + email +'.');
    }
    if(quantity>1){
        alert('Thank you, ' + name + ', for buying ' + quantity + ' tickets. We look forward to seeing you at Lunar Beats. A confirmation email has been sent to ' + email +'.');
    }

    window.location.href = 'lunarHomepage.html';

}
}

function showThankYouPopup2(event) {
    event.preventDefault();
    if (validateForm2()) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        alert('Thank you, ' + name + ', for contacting Lunar Beats. We will be in touch with you soon.');
    }

    window.location.href = 'lunarHomepage.html';

}

function getRandomArtist() {
    const getRandomNumber = Math.floor(Math.random() * 11) + 1;

    const apiUrl = 'http://chronos.cs.elon.edu/emartin35/api/artists/'+getRandomNumber;

    fetch(apiUrl)
        .then(response => response.json())
        .then(artist => {
            const artistInfoBox = document.getElementById('artist-info');
            const artistImage = artistInfoBox.querySelector('img');

            if (artist) {

                artistImage.src = `assets/img/${artist.image}`;

                artistInfoBox.innerHTML = `
                    <h2>${artist.name}</h2>
                    <p>${artist.description}</p>
                `;
                artistInfoBox.appendChild(artistImage);
            } else {
                console.error('Empty or unexpected API response:', artist);
            }
        })
        .catch(error => {
            console.error('Error fetching artist data:', error);
        });
}