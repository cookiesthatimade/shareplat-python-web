// 클릭 이벤트 핸들러 대체
function GetClick(event) {
    const currentClick = event.target.id;
    const prevClick = document.querySelector(".active");
    const currentElement = document.getElementById(currentClick);
  
    if (prevClick) {
      prevClick.classList.remove("active");
    }
  
    currentElement.classList.add("active");
  }
  
  // 문의하기 버튼 클릭 이벤트 핸들러
  document.querySelector(".btn-10").addEventListener("click", function () {
    location.href = "/contact";
  });
  
  // 페이지 로딩 완료 시 초기화 작업 수행 (예: 클래스 추가 등)
  window.addEventListener("load", function () {
    // 초기화 작업 수행
  });
  