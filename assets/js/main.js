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
function setupAnimatedAccordion(details) {
  const summary = details.querySelector("summary");
  const content = details.querySelector(":scope > .accordion-content");

  if (!summary || !content) return;

  let isClosing = false;
  let isExpanding = false;

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (isClosing || !details.open) {
      openAccordion(details, content);
    } else if (isExpanding || details.open) {
      closeAccordion(details, content);
    }
  });
}

function openAccordion(details, content) {
  details.style.overflow = "hidden";
  details.open = true;

  const startHeight = content.offsetHeight;
  content.style.height = "0px";

  requestAnimationFrame(() => {
    const endHeight = content.scrollHeight;
    content.style.transition = "height 220ms ease";
    content.style.height = `${endHeight}px`;

    content.addEventListener(
      "transitionend",
      () => {
        content.style.height = "auto";
        content.style.transition = "";
        details.style.overflow = "";
      },
      { once: true }
    );
  });
}

function closeAccordion(details, content) {
  details.style.overflow = "hidden";

  const startHeight = content.scrollHeight;
  content.style.height = `${startHeight}px`;

  requestAnimationFrame(() => {
    content.style.transition = "height 200ms ease";
    content.style.height = "0px";

    content.addEventListener(
      "transitionend",
      () => {
        details.open = false;
        content.style.transition = "";
        content.style.height = "";
        details.style.overflow = "";
      },
      { once: true }
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-accordion").forEach(setupAnimatedAccordion);
});

document.querySelectorAll(".policy-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    const group = item.closest(".policy-list");
    if (!group) return;

    group.querySelectorAll(".policy-item").forEach((sibling) => {
      if (sibling !== item) sibling.open = false;
    });
  });
});