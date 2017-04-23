(function () {
  document.addEventListener("DOMContentLoaded", function (event) {

    // Hamburger Menu

    const nav = document.getElementsByTagName("nav")[0];
    const menuList = nav.firstElementChild;
    const listItems = menuList.getElementsByTagName("a");
    const body = document.getElementsByTagName("body")[0];

    const mq = window.matchMedia("(max-width: 991px)");

    nav.addEventListener("click", function (event) {
      if (mq.matches) {
        menuList.classList.toggle("menu-active");
        nav.classList.toggle("hamburger-active");
        body.classList.toggle("noScroll");
      }

    }, false);


    // Team load more

    const arrowBtn = document.getElementById("team").children[1].nextElementSibling.nextElementSibling.children[0];
    const teamImages = document.getElementById("team").children[1].children;

    if (mq.matches) {
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

    function loadMore(event) {
      event.preventDefault();

      if (mq.matches) {
        for (var i = 0; i < teamImages.length; i++) {
          if (i > 1) {
            if (teamImages[i].style.display === "none") {
              teamImages[i].style.display = "list-item";
              event.target.classList.add("btnRotated");
            } else {
              teamImages[i].style.display = "none";
              event.target.classList.remove("btnRotated");
            }
          }
        }
      } else {
        for (var i = 0; i < teamImages.length; i++) {
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


    }

    arrowBtn.addEventListener("click", loadMore, false);

    //Scroll animation
    const menuLinks = $("nav li").not(":first-child, :nth-child(3)").children();

    menuLinks.on("click", function (event) {
      event.preventDefault();

      let myId = $(event.target).attr("href");

      $("html, body").animate({
        scrollTop: $(myId).offset().top - 100
      }, 500);


    });




    //end

  });
})();