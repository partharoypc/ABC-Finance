// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 22.845640, lng: 89.540329 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Stikey Manu Background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.8;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scolling  
$('#navbar a, .btn').on('click', function(event) {
    if (this.has !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});