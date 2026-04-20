window.addEventListener("load", () => {
  const swBusiness = new Swiper(".sw-business", {
    slidesPerView: 1,
    // slide 간의 간격 (gap)
    // spaceBetween: 20,
    breakpoints: {
      //   480px
      480: {
        slidesPerView: 1,
      },
      // 640px ~ 1023px
      640: {
        slidesPerView: 2,
      },

      //   1024px ~
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // business-modal
  const businessModal = document.querySelector(".business-modal")
  businessModal.addEventListener("click", ()=>{
    businessModal.style.display = "none"
  })
});
