(function () {
  document.addEventListener("DOMContentLoaded", function (event) {

    // Hamburger Menu

    const nav = document.getElementsByTagName("nav")[0];
    const menuList = nav.firstElementChild;
    const listItems = menuList.getElementsByTagName("a");

    let hamburgerStyle = window.getComputedStyle(nav, ":before");

    console.dir(hamburgerStyle);

    function openCloseNav(event) {

      if (menuList.style.height == "0px") {
        menuList.style.height = "calc(100vh - 5rem)";
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].style.visibility = "visible";
        }

      } else {
        menuList.style.height = "0px";
        for (let i = 0; i < listItems.length; i++) {
          listItems[i].style.visibility = "hidden";
        }
      }
    }

    nav.addEventListener("click", openCloseNav, false);


    // 




  });
})();