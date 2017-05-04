document.addEventListener("DOMContentLoaded", function (event) {

  // Hamburger Menu

  document.querySelector("#main-nav").addEventListener("click", function (event) {
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.querySelector("body").classList.toggle("menu-active");
    }
  }, false);

  // Team load more

  const arrowBtn = document.getElementById("team").children[1].nextElementSibling.nextElementSibling.children[0];
  const teamImages = document.getElementById("team").children[1].children;

  if (window.matchMedia("(max-width: 768px)").matches) {
    for (var i = 0; i < teamImages.length; i++) {
      if (i > 1) {
        teamImages[i].style.display = "none";
      }
    }
  } else {
    for (var i = 0; i < teamImages.length; i++) {
      if (i > 5) {
        teamImages[i].style.display = "none";
      }
    }
  }

  document.getElementById("show-more").addEventListener("click", function (event) {
    event.preventDefault();
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.getElementById("team").classList.toggle("team-active");
    } else {
      for (let i = 0; i < teamImages.length; i++) {
        if (i > 5) {
          if (teamImages[i].style.display === "none") {
            teamImages[i].style.display = "list-item";
            event.target.classList.add("btnRotated");
          } else {
            teamImages[i].style.display = "none";
            event.target.classList.remove("btnRotated");
          }
        }
      }
    }
  }, false);

  //end

});
