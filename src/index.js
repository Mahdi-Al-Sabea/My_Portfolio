import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const projectImages = {
  "Docugov+": [
    new URL('./assets/Docugov+/Docugov+.jpg', import.meta.url).href,
    new URL('./assets/Docugov+/d (1).png', import.meta.url).href,
    new URL('./assets/Docugov+/d (2).png', import.meta.url).href,
    new URL('./assets/Docugov+/d (3).png', import.meta.url).href,
    new URL('./assets/Docugov+/d (4).png', import.meta.url).href,
    new URL('./assets/Docugov+/d (5).png', import.meta.url).href,
    new URL('./assets/Docugov+/d (6).png', import.meta.url).href,
    new URL('./assets/Docugov+/d1 (1).png', import.meta.url).href,
    new URL('./assets/Docugov+/d1 (2).png', import.meta.url).href,
    new URL('./assets/Docugov+/d1 (3).png', import.meta.url).href,
    new URL('./assets/Docugov+/d1 (4).png', import.meta.url).href,
    new URL('./assets/Docugov+/d1 (5).png', import.meta.url).href,




  ],
  "Beep Beep": [
    new URL('./assets/Beep/Beep 2.png', import.meta.url).href,

  ],
  "Meeting Room Booking & Minutes Management System": [
    new URL('./assets/Room Management/room management 2.png', import.meta.url).href,
    new URL('./assets/Room Management/r4.png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (1).png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (2).png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (3).png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (4).png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (5).png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (6).png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (7).png', import.meta.url).href,
    new URL('./assets/Room Management/r4 (8).png', import.meta.url).href,




  ],
  "Task Management Full Stack Website": [
    new URL('./assets/Task Management System/Task Management.png', import.meta.url).href
  ],
  "Rental listing (web and mobile)": [
    new URL('./assets/Rental Listing/Rental Listing.png', import.meta.url).href
  ],
  "E-commerce Full Stack Website": [
    new URL('./assets/Ecommerce/Ecommerce.png', import.meta.url).href
  ],
  "Store Management System": [
    new URL('./assets/Store Management System/Store Management System.png', import.meta.url).href
  ]
  // Add other projects here with their respective images
};

let currentImageIndex = 0;
let currentProjectName = '';
let currentProjectImages = [];

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.getElementsByClassName("prev")[0];
const nextBtn = document.getElementsByClassName("next")[0];

document.querySelectorAll('.project-wrapper__image a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const row = this.closest('.row');
    const projectTitle = row.querySelector('.project-wrapper__text-title').innerText.trim();
    currentProjectName = projectTitle;
    currentProjectImages = projectImages[projectTitle] || [];
    currentImageIndex = 0;

    const clickedImg = row.querySelector('img.project-image');

    if (currentProjectImages.length > 0) {
      openModal(currentProjectImages[currentImageIndex]);
    } else if (clickedImg && clickedImg.src) {
      currentProjectImages = [clickedImg.src];
      openModal(clickedImg.src);
    }
  });
});

function openModal(imageSrc) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
  captionText.innerHTML = currentProjectName;
  updateNavButtons();
}

closeBtn.onclick = function() {
  modal.style.display = "none";
};

prevBtn.onclick = function() {
  currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
  modalImage.src = currentProjectImages[currentImageIndex];
  updateNavButtons();
};

nextBtn.onclick = function() {
  currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
  modalImage.src = currentProjectImages[currentImageIndex];
  updateNavButtons();
};

function updateNavButtons() {
  if (currentProjectImages.length > 1) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}