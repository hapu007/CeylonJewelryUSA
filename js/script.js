const mainImage = document.querySelector(".main-item-image");
const thumbnails = document.querySelectorAll(".thumbnail-row img");

if (mainImage && thumbnails.length > 0) {

    thumbnails[0].classList.add("active");

    thumbnails.forEach(function(thumbnail) {

        thumbnail.addEventListener("click", function() {

            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;

            thumbnails.forEach(function(image) {
                image.classList.remove("active");
            });

            thumbnail.classList.add("active");

        });

    });

}
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

    });

});


if (lightboxClose) {

    lightboxClose.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

}


if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }

    });

}

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {

    menuButton.addEventListener("click", function() {

        mainNav.classList.toggle("open");

    });

}