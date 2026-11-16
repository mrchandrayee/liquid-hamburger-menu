const menuToggle = document.getElementById("menu-open");
const menuItems = document.querySelectorAll(".menu-item");

// Close the radial menu after choosing one of its navigation items.
menuItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    menuToggle.checked = false;
  });
});

// Keep the checkbox-driven CSS animation keyboard accessible.
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    menuToggle.checked = false;
  }
});
