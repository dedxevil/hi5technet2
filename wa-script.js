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
