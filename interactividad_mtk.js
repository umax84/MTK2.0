document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".btn");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.boxShadow = "none";
    });
  });
});