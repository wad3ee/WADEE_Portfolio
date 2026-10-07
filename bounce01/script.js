"use strict";

/* =========================================
   BOUNCE 01 — PROFILE PHOTO SWITCHER
   ========================================= */

const profilePhoto = document.querySelector("#profile-photo");
const switchButton = document.querySelector("#switch-photo");

const photos = [
    {
        src: "assets/photo-1.png",
        alt: "Professional profile photo"
    },
    {
        src: "assets/photo-2.png",
        alt: "Alternate profile photo"
    }
];

let currentPhoto = 0;


/* =========================================
   PHOTO SWITCH
   ========================================= */

switchButton.addEventListener("click", function () {

    currentPhoto = currentPhoto === 0 ? 1 : 0;

    profilePhoto.style.opacity = "0";

    setTimeout(function () {

        profilePhoto.src = photos[currentPhoto].src;
        profilePhoto.alt = photos[currentPhoto].alt;

        profilePhoto.style.opacity = "1";

    }, 200);

});
