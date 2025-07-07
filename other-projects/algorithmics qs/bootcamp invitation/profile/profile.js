/**
 * Utility function to add hover class
 */
function addHoverEvents(element, hoverClass = "hovered") {
  element.addEventListener("mouseenter", () => {
    element.classList.add(hoverClass);
  });
  element.addEventListener("mouseleave", () => {
    element.classList.remove(hoverClass);
  });
}

/**
 * Change image src on hover using data attributes
 */
function addImageHoverSwap(image) {
  const { hover: hoverSrc, original: originalSrc } = image.dataset;
  image.addEventListener("mouseenter", () => {
    image.src = hoverSrc;
  });
  image.addEventListener("mouseleave", () => {
    image.src = originalSrc;
  });
}

// Handle social media icons
document.querySelectorAll(".socialMedias img").forEach(addImageHoverSwap);

// Handle dashboard items
document.querySelectorAll(".dashboard-eachItem").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#1DA1F214";
    item.classList.add("hovered");
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "transparent";
    item.classList.remove("hovered");
  });
});

// Handle "View More Info" button hover
const btnViewMoreInfo = document.querySelector("#btn-moreInfo");
addHoverEvents(btnViewMoreInfo);

// Loading simulation
const spinner = document.querySelector(".btn-spinner");
const btnInfoText = document.querySelector(".btn-moreInfo--text");

btnViewMoreInfo.addEventListener("click", () => {
  btnViewMoreInfo.disabled = true;
  btnViewMoreInfo.setAttribute("aria-disabled", "true");
  spinner.classList.remove("hidden");
  btnInfoText.textContent = "Loading...";

  setTimeout(() => {
    spinner.classList.add("hidden");
    btnInfoText.textContent = "View More";
    btnViewMoreInfo.classList.add("blurred");

    setTimeout(() => {
      btnViewMoreInfo.disabled = false;
      btnViewMoreInfo.setAttribute("aria-disabled", "false");
      btnViewMoreInfo.classList.remove("blurred");
    }, 2000);
  }, 3000);
});
