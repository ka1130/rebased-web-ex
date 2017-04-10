(function () {
  document.addEventListener("DOMContentLoaded", function (event) {

    const hamburger = document.getElementsByTagName("nav")[0];
    const menuList = hamburger.firstElementChild;

    function openNav(event) {
      menuList.style.height = "calc(100vh - 7.9rem)";
    }

    hamburger.addEventListener("click", openNav, false);

  });
})();