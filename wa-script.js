document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp numbers
    const indianNumber = '918667842296';
    const internationalNumber = '601127728901';

    // Elements
    const whatsappLabel = document.getElementById('whatsapp-label');
    const whatsappOptions = document.getElementById('whatsapp-options');
    const indiaButton = document.getElementById('india-button');
    const outsideIndiaButton = document.getElementById('outside-india-button');
    const whatsappButton = document.getElementById('whatsapp-button');

    // Toggle visibility of options
    // whatsappLabel.addEventListener('click', () => {
    //     whatsappOptions.classList.toggle('visible');
    // });

        // Handle button clicks
        whatsappButton.addEventListener('click', () => {
            window.open(`https://api.whatsapp.com/send?phone=${indianNumber}&text=Hey%20Hi5Technet,%20%0A%20I%20have%20a%20question!`, '_blank');
        });

    // Handle button clicks
    indiaButton.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?phone=${indianNumber}&text=Hey%20Hi5Technet,%20%0A%20I%20have%20a%20question!`, '_blank');
    });

    outsideIndiaButton.addEventListener('click', () => {
        window.open(`https://api.whatsapp.com/send?phone=${internationalNumber}&text=Hey%20Hi5Technet,%20%0A%20I%20have%20a%20question!`, '_blank');
    });
});


// Create the circle element
const circle = document.createElement('div');
circle.classList.add('circle');
document.body.appendChild(circle);

// Update circle position and change color on mousemove
document.addEventListener('mousemove', (e) => {
  circle.style.left = `${e.clientX}px`;
  circle.style.top = `${e.clientY}px`;

  // Generate a random color for visibility
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
  circle.style.borderColor = randomColor;
});

// Optional: Add click effect
document.addEventListener('mousedown', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(0.9)';
});

document.addEventListener('mouseup', () => {
  circle.style.transform = 'translate(-50%, -50%) scale(1)';
});

