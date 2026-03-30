document.addEventListener("DOMContentLoaded", () => {
  const sectionDetails = Array.from(document.querySelectorAll(".section-details"));

  sectionDetails.forEach((detail) => {
    detail.addEventListener("toggle", () => {
      if (!detail.open) return;
      sectionDetails.forEach((other) => {
        if (other !== detail) other.open = false;
      });
    });
  });

  const hash = window.location.hash.replace("#", "");
  if (!hash) return;

  const target = document.getElementById(hash);
  if (!target) return;

  const details = target.querySelector(".section-details");
  if (details) details.open = true;
});
