// document.addEventListener("DOMContentLoaded", function () {
//   const sidebar = document.getElementById("sidebar");
//   const toggleBtn = document.getElementById("toggleBtn");
//   const navItems = document.querySelectorAll(".nav-item");

//   toggleBtn.addEventListener("click", function () {
//     sidebar.classList.toggle("collapsed");

//         const icon = toggleBtn.querySelector("i");
//     if (sidebar.classList.contains("collapsed")) {
//       icon.className = "fas fa-bars";
//     } else {
//       icon.className = "fas fa-times";
//     }
//   });

//     navItems.forEach((item) => {
//     item.addEventListener("click", function (e) {
//       e.preventDefault();

      
//       navItems.forEach((nav) => nav.classList.remove("active"));

      
//       this.classList.add("active");
//     });
//   });

//     function handleResize() {
//     if (window.innerWidth <= 768) {
//       sidebar.classList.add("collapsed");
//       toggleBtn.querySelector("i").className = "fas fa-bars";
//     }
//   }

//     handleResize();
//   window.addEventListener("resize", handleResize);
// });









document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  const navItems = document.querySelectorAll(".nav-item");
  const icon = toggleBtn.querySelector("i");

  // فتح/قفل السايدبار
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    icon.className = sidebar.classList.contains("collapsed")
      ? "fas fa-bars"
      : "fas fa-times";
  });

  // تغيير الـ active في القايمة
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
    });
  });

  // إغلاق السايدبار على الموبايل
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.add("collapsed");
      icon.className = "fas fa-bars";
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
});

