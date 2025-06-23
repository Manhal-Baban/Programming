// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-btn");

// Show modal when any gallery image is clicked
document.querySelectorAll(".gallery-grid img").forEach((img) => {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
  });
});

// Hide modal on close
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Hide modal when clicking outside the image
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
