window.addEventListener("load", function () {
  // 모달창 닫기
  const modalWrap = document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector(".modalClose");
  modalClose.addEventListener("click", function () {
    modalWrap.style.display = "none";
    console.log(modalClose)
  });
});
