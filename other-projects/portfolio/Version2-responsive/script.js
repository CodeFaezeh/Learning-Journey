// h1 animation
const h1 = document.querySelector("h1");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        h1.classList.add("show");
      } else {
        h1.classList.remove("show"); // Optional: remove if you want it only once
      }
    });
  },
  {
    threshold: 0.1, // Adjust this for earlier/later trigger
  }
);

observer.observe(h1);
// projects
const links = document.querySelectorAll(".project-link");
const contents = document.querySelectorAll(".project-content");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    link.classList.add("active");
    const index = link.dataset.project;
    document
      .querySelector(`.project-content[data-id="${index}"]`)
      .classList.add("active");
  });
});
