const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("bar_icon");

toggleBtn.addEventListener("click", () => {
  console.log("clicked");
  sidebar.classList.toggle("show_sidebar");
  sidebar.classList.toggle("hide_sidebar");
});