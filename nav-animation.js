const navbarButtons = document.querySelectorAll(".navbar .nav-link, .navbar .btn");

navbarButtons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.classList.add("navbar-button-hover");
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("navbar-button-hover");
  });
});
