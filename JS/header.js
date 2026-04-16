window.addEventListener("load", () => {
  // 스크롤 될 때
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  const navMb = document.querySelector(".nav-mb");
  let scy = 0;

  //   스크롤 시
  window.addEventListener("scroll", () => {
    // 1. 스크롤바의 픽셀 위치값을 파악 => 현재 스크롤 위치
    scy = window.document.documentElement.scrollTop;
    // 2.class 적용 여부 결정
    if (scy > 0) {
      header.classList.add("active");
      mbt.classList.add("active");
    } else {
      header.classList.remove("active");
      mbt.classList.remove("active");
    }
  });

  // 모바일 메뉴 클릭시
  const htmlRoot = document.querySelector("html");
  mbt.addEventListener("click", () => {
    // console.log(this)  // this => window 전체

    // contain() 현재 ani 클래스가 있는지 없는지 파악
    const state = mbt.classList.contains("ani");
    if (state) {
      mbt.classList.remove("ani");
      navMb.classList.remove("active");
      // 윈도우 스크롤바가 나타남.
      htmlRoot.classList.remove("active");
      // 헤더 배경(흰) 나타남
      header.classList.remove("active");
      // x 색상
      mbt.classList.remove("active");
    } else {
      mbt.classList.add("ani");
      navMb.classList.add("active");
      // 윈도우 스크롤바가 사라짐
      htmlRoot.classList.add("active");
      // 헤더 배경(흰) 사라짐
      header.classList.add("active");
      // x 색상
      mbt.classList.add("active");
    }
  });
  // 반응형 처리
  // 모바일 메뉴 초기화
  let winW = window.innerWidth;
  window.addEventListener("resize", () => {
    // 모바일 ===> pc 화면 전환
    if (winW > 1024) {
      mbt.classList.remove("ani")
      navMb.classList.remove("active");
      htmlRoot.classList.remove("active")
      if(scy > 0){
        // 스크롤이 된 상태에서 화면 리사이징
        header.classList.add("active")
        mbt.classList.add("active")
      }else{
        header.classList.remove("active")
        mbt.classList.remove("active")
      }
    }else{
      navMb.classList.add("active")
    }
  });
});
