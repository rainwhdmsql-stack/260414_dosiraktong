window.addEventListener("load", () => {
  AOS.init();

  const footer = document.querySelector(".footer");
  const gotop = document.querySelector(".gotop");
  // gotop
  gotop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 첫 번째 Waypoint: footer
  new Waypoint({
    element: footer,
    handler: function (direction) {
      if (direction === "down") {
        gotop.classList.add("active-footer");
      } else {
        gotop.classList.remove("active-footer");
      }
    },
    offset: "95%",
  });

  // 두 번째 Waypoint: service
  new Waypoint({
    element: document.querySelector(".service"),
    handler: function (direction) {
      if (direction === "down") {
        gotop.classList.add("active");
      } else {
        gotop.classList.remove("active");
      }
    },
    offset: "88%",
  });
});
