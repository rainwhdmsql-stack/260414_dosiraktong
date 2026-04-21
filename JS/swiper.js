window.addEventListener("load", () => {
  // 비주얼 슬라이드
  // 1. 슬라이드 갯수만큼 li를 생성하기
  const swSlideCount = document.querySelectorAll(
    ".sw-visual .swiper-slide",
  ).length;
  console.log(swSlideCount);
  // 2. li 태그 출력 장소 (ul) 저장
  const swSlide = document.querySelector(".sw-visual-pg-list");
  // 3. li에 html로 작성할 글자를 생성한다.
  let sWvisualhtml = ``;
  for (let i = 0; i < swSlideCount; i++) {
    sWvisualhtml = sWvisualhtml + `<li>${i + 1}</li>`;
  }
  // 4. sWvisualhtml을 ul에 추가
  swSlide.innerHTML = sWvisualhtml;

  // 5. 페이지네이션 관련(코딩으로 생성한 li 태그를 저장)
  const sWvisualPgLi = document.querySelectorAll(".sw-visual-pg-list li");
  console.log(sWvisualPgLi);

  const sWvisual = new Swiper(".sw-visual", {
    effect: "fade",
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".sw-visual-next",
      prevEl: ".sw-visual-prev",
    },
    // 페이지네이션
    // pagination: {
    //   el: ".sw-visual-pg-list",
    // },
  });
  // 1. li의 흰색 라인이 늘어나는 모션을 실행

  sWvisualPgLi[0].classList.add("active");

  // 2. swiper 가 바뀔 때 마다 실행
  //  슬라이더가 바뀌는 상태를 찾아서
  //우리가 해결하고자하는 처리를 한다
  sWvisual.on("slideChange", () => {
    sWvisualPgLi.forEach((item, index) => {
      console.log(item, index);
      if (sWvisual.realIndex === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
  // li 태그를 클릭 하면 슬라이드 기능
  sWvisualPgLi.forEach((item, index) => {
    item.addEventListener("click", function () {
      // slideToLoop() 를 이용하면 원하는 페이지로 보낼 수 있음.! 
      // sWvisual.slideToLoop(해당 번호 , 속도 , ㅇㅇ)
      sWvisual.slideToLoop(index , 500 , false)
    });
  });
});
