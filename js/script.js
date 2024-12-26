$(document).ready(function () {
  /* ----submenu---- */
  $(".nav li").mouseover(function () {
    $(this).children(".submenu").stop().slideDown();
  });
  $(".nav li").mouseleave(function () {
    $(this).children(".submenu").stop().slideUp();
  });

  /* offcanvas */
  $(".ham").click(function () {
    $(".offcanvas").show();
    return false;
  });

  $(".off_close").click(function () {
    $(".offcanvas").hide();
  });

  $(".off_nav li a").click(function () {
    $(this).siblings(".off_nav li .submenu").slideToggle();
    return false;
  });

  /*result*/
  $(".result_btn").click(function () {
    $(this).siblings(".modal").show();
    return false;
  });
  $(".result_close").click(function () {
    $(this).parent().parent(".modal").hide();
    return false;
  });

  /*confetti*/
  $('.result_btn').on('click', function() {
    // 시작점으로 설정할 요소 가져오기
    const canvas = $('.result_btn')[0];
    
    // Canvas 요소의 위치 정보를 가져오기
    const canvasRect = canvas.getBoundingClientRect();
    
    // Canvas Confetti 라이브러리를 사용하여 효과 적용
    confetti({
        particleCount: 100,
        spread: 180,
        origin: {
          y: 0.6 
        },
        zIndex: 9999,
    });
});

});
