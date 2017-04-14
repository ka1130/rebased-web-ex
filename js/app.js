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


    // Team memebers back

    const membersList = Array.from(document.querySelector("main").children[1].children[1].children);
    console.log(membersList);

    membersList.find(member => {
      let figures = member.children[0];
      console.log(figures);
      member.addEventListener("click", function (event) {
        figures.classList.toggle("member-back");
      }, false)

    });








  });
})();