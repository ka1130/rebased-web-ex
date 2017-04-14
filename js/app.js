(function () {
  document.addEventListener("DOMContentLoaded", function (event) {

    // Hamburger Menu

    const nav = document.getElementsByTagName("nav")[0];
    const menuList = nav.firstElementChild;
    const listItems = menuList.getElementsByTagName("a");

    // menuList.classList.add("menu-inactive");

    nav.addEventListener("click", function (event) {
      menuList.classList.toggle("menu-active");
    }, false);


    // Change color of the hamburger on click

    let hamburgerStyle = window.getComputedStyle(nav, ":before");

    console.dir(hamburgerStyle);


    // 




  });
})();