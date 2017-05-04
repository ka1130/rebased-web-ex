document.addEventListener("DOMContentLoaded", function (event) {

  // Hamburger Menu

  document.querySelector("#main-nav").addEventListener("click", function (event) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.querySelector("body").classList.toggle("menu-active");
    }
  }, false);

  // Team load more

  document.getElementById("show-more").addEventListener("click", function (event) {
    event.preventDefault();
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.getElementById("team").classList.toggle("team-active");
    } else {
      document.getElementById("team").classList.toggle("team-active");
    }
  }, false);

  //end

});
