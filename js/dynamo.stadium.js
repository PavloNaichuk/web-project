function setupStadiumImages() {
  document.querySelectorAll(".stadium__image").forEach((img) => {
    img.addEventListener("click", () => {
      window.open(img.src, "_blank");
    });
  });
}

document.addEventListener("DOMContentLoaded", setupStadiumImages);
document.body.addEventListener("htmx:afterOnLoad", setupStadiumImages);
