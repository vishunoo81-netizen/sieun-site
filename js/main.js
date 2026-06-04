// ===== 모바일 메뉴 토글 =====
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("show");
    });
  }

  // ===== FAQ 아코디언 =====
  var items = document.querySelectorAll(".faq-item");
  items.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (q) {
      q.addEventListener("click", function () {
        item.classList.toggle("open");
      });
    }
  });
});
