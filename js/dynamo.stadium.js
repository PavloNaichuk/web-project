function setupStadiumImages() {
  document.querySelectorAll(".stadium__image").forEach((img) => {
    img.addEventListener("click", () => {
      window.open(img.src, "_blank");
    });
  });
}
document.body.addEventListener("htmx:afterSwap", setupStadiumImages);
setupStadiumImages();

