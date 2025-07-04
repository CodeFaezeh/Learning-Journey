// Hovering
//change social medias icon
const socialMediasIcons = document.querySelectorAll(".socialMedias img");
socialMediasIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.src = icon.dataset.hover;
  });
  icon.addEventListener("mouseleave", () => {
    icon.src = icon.dataset.original;
  });
});
const dashboardItems = document.querySelectorAll(".dashboard-eachItem");
dashboardItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#1DA1F214";
    item.classList.add("hoverd");
  });
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "transparent";
    item.classList.remove("hoverd");
  });
});
