document.addEventListener("DOMContentLoaded", function (event) {

  // Hamburger Menu

  document.querySelector("#main-nav").addEventListener("click", function (event) {
    document.querySelector("body").classList.toggle("menu-active");
  }, false);

  // Team load more

  document.getElementById("show-more").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("team").classList.toggle("team-active");
  }, false);

  //end
});
