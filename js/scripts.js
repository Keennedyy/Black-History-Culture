/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 
function updateVoteResults() {
    var resultsList = document.getElementById("voteResults");
    resultsList.innerHTML = "";

    for (var person in voteCounts) {
        if (voteCounts[person] > 0) {
            var listItem = document.createElement("li");
            listItem.className = "list-group-item d-flex justify-content-between align-items-center";
            listItem.textContent = person;

            var badge = document.createElement("span");
            badge.className = "badge bg-primary rounded-pill";
            badge.textContent = voteCounts[person];

            listItem.appendChild(badge);
            resultsList.appendChild(listItem);
        }
    }
}

function scrollToAccordion() {
    var accordionElement = document.getElementById("get-involved");
    if (accordionElement) {
        accordionElement.scrollIntoView({ behavior: "smooth" });
        accordionElement.classList.add("show");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const animatedImages = document.querySelectorAll(".animated-img");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85;

        animatedImages.forEach(img => {
            const imgTop = img.getBoundingClientRect().top;
            if (imgTop < triggerBottom) {
                img.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); 
});
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

