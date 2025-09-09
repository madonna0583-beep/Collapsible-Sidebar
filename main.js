document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const navItems = document.querySelectorAll(".nav-item");
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    icon.className = sidebar.classList.contains("collapsed")
      ? "fas fa-bars"
      : "fas fa-times";
  });

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.add("collapsed");
      icon.className = "fas fa-bars";
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
});