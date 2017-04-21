(function () {
  document.addEventListener("DOMContentLoaded", function (event) {

    // Hamburger Menu

    const nav = document.getElementsByTagName("nav")[0];
    const menuList = nav.firstElementChild;
    const listItems = menuList.getElementsByTagName("a");

    nav.addEventListener("click", function (event) {
      menuList.classList.toggle("menu-active");
      nav.classList.toggle("hamburger-active");
    }, false);


    // Team load more

    const arrowBtn = document.getElementById("team").children[1].nextElementSibling.nextElementSibling.children[0];
    const teamImages = document.getElementById("team").children[1].children;

    for (var i = 0; i < teamImages.length; i++) {
      console.log(teamImages[i]);
      if (i > 5) {
        teamImages[i].style.display = "none";
      }
    }

    console.log(teamImages);

    function loadMore(event) {
      event.preventDefault();
      console.log("ok");
      for (var i = 0; i < teamImages.length; i++) {
        console.log(teamImages[i]);
        if (i > 5) {
          teamImages[i].style.display = "block";
        }
      }
    }

    arrowBtn.addEventListener("click", loadMore, false);










  });
})();