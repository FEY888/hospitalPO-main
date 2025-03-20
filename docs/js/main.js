console.clear();

// 스크롤 탑 및 애니메이션
function ScrollTopBtn() {
  let timer;
  $(window).scroll(function () {
    let $this = $(this);
    const scrollTop = $this.scrollTop();
    let wHeight = $this.height();
    let dHeight = $(document).height();

    clearTimeout(timer);
    timer = setTimeout(function () {
      if (scrollTop > dHeight * 0.22 - wHeight) {
        $('.scroll-menu-box').addClass('active');
      } else {
        $('.scroll-menu-box').removeClass('active');
      }
    });

    $('.scroll-top-btn').click(function () {
      $('html, body').stop().animate({ scrollTop: 0 }, 300);
    });

    $('.scroll-top-btn').click(function (e) {
      e.preventDefault();
    });
  });
}

ScrollTopBtn();

// 메인섹션
function swiper1__init() {
  const $swiperCon = $('.swiper-con-1');

  const swiper = new Swiper('.swiper-con-1', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    speed: 1100,
    allowTouchMove: true,
    centerMode: true,
    draggable: false,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // 슬라이드에 마우스 올렸을 때 스와이퍼 일시 정지
    },

    navigation: {
      nextEl: '.section-1 .swiper-btn-next',
      prevEl: '.section-1 .swiper-btn-prev',
    },
    pagination: {
      el: '.section-1 .swiper-pagination',
      clickable: true,
    },

    a11y: {
      // 웹접근성
      enabled: true,
      prevSlideMessage: '이전 슬라이드',
      nextSlideMessage: '다음 슬라이드',
      slideLabelMessage:
        '총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
    },
  });
}
swiper1__init();

//사이트맵

function siteMap() {
  $('.right-menu').click(function () {
    $('.site-map-wrap').addClass('active');
  });

  $('.map__close-btn').click(function () {
    $('.site-map-wrap').removeClass('active');
  });
}
siteMap();

//pc 진료과목 스와이퍼
$(document).ready(function () {
  initSwiper();

  $(window).resize(function () {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function () {
      initSwiper();
    }, 300);
  });
});
let swiperInstance;

function initSwiper() {
  const windowWidth = $(window).width();

  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }

  if (windowWidth <= 768) {
    // ✅ 모바일 Swiper 설정
    swiperInstance = new Swiper('.mo-swiper-con-2', {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      effect: 'flip',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: '.mo-swiper-page-2',
        clickable: true,
      },
    });
  } else {
    // ✅ PC Swiper 설정
    swiperInstance = new Swiper('.swiper-con-2', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-btn-3',
        prevEl: '.swiper-btn-2',
      },
      pagination: {
        el: '.swiper-page-2',
        clickable: true,
      },
    });
  }
}

// function swiper2__init() {
//   const $swiperCon = $('.swiper-con-2');

//   const swiper = new Swiper('.swiper-con-2', {
//     slidesPerView: 3,

//     spaceBetween: 20,
//     loop: true,
//     loopAdditionalSlides: 1,
//     speed: 500,
//     allowTouchMove: true,
//     touchRatio: 1, // 슬라이드 드래그 감도
//     mousewheel: true,
//     draggable: false,
//     CenterMode: true,
//     grabCursor: true,
//     centerSlides: true,
//     // effect: "coverflow",
//     // coverflowEffect: {
//     // 	rotate: 0,
//     // 	strech: 0,
//     // 	//depth: 100,
//     // 	modifier: 5,
//     // 	slideShadows: false
//     // },

//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },

//     navigation: {
//       nextEl: '.section-2-swiper .swiper-btn-next',
//       prevEl: '.section-2-swiper .swiper-btn-prev',
//     },
//     pagination: {
//       el: '.section-2-swiper .swiper-pagination',
//       clickable: true,
//     },
//   });
// }
// swiper2__init();

//의료진소개
function doctorPopup() {
  // 각 의사의 "진료분야" 버튼 클릭 시
  $('.simple-view').on('click', function (e) {
    e.preventDefault();

    const parentContainer = $(this).closest('.doc-txt-3');

    const targetContent = parentContainer.find('.view-content');

    $('.view-content').not(targetContent).removeClass('active');

    targetContent.toggleClass('active');
  });

  $('.close-btn').on('click', function (e) {
    e.preventDefault();

    $(this).closest('.view-content').removeClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.doc-txt-3').length) {
      $('.view-content').removeClass('active');
    }
  });
}

doctorPopup();

//클리닉섹션

// document.addEventListener("DOMContentLoaded", function () {
// 	var swiper = new Swiper(".swiper-container", {
// 		initialSlide: 0,
// 		speed: 400,
// 		spaceBetween: 0,
// 		observer: true,
// 		observeParents: true,
// 		resistance: true,
// 		resistanceRatio: 0,
// 		threshold: 10,
// 		allowTouchMove: false // 스와이프 제스처 비활성화 (필요시 활성화)
// 	});

// 	const tabMenuItems = document.querySelectorAll(".tab-menu li");

// 	tabMenuItems.forEach(function (item) {
// 		item.addEventListener("click", function () {
// 			const activeTab = document.querySelector(".tab-menu li.active");

// 			if (this === activeTab) return;

// 			activeTab.classList.remove("active");

// 			this.classList.add("active");

// 			swiper.slideTo(parseInt(this.dataset.index), 300);
// 		});
// 	});
// });

// 클리닉섹션
function clinicSwiper() {
  const swiper = new Swiper('.swiper-container', {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    resistance: true,
    resistanceRatio: 0,
    threshold: 10,
    allowTouchMove: false,
  });

  $('.tab-menu li').click(function () {
    let $this = $(this);
    let thisIndex = $this.index();

    $('.tab-menu li.active').removeClass('active');
    $this.addClass('active');

    swiper.slideTo(thisIndex, 300);
  });
}
clinicSwiper();

// 모바일 JS

//모바일 사이드바

function MobileSideBar() {
  $('.mo-top__right-menu').click(function () {
    $('.mobile-side-menu-box').addClass('active');
    $('html').addClass('overflow-hidden');
  });

  $('.mobile-side-bar__close-btn, .mobile-side-menu-box').click(function () {
    $('.mobile-side-menu-box').removeClass('active');
    $('html').removeClass('overflow-hidden');

    $('.mobile-side-menu-box ul > li').removeClass('active');
    $('.mobile-side-menu-box  ul ul').slideUp(300);
  });

  $('.mobile-side-bar').click(function (e) {
    // e.stopPropagation();
    return false;
  });
}

MobileSideBar();

function MobileSideMenu__init() {
  $('.mobile-side-menu-box ul > li').click(function () {
    let $this = $(this);
    let has = $this.hasClass('active');

    $this.siblings('.active').find('> ul').slideUp(300);

    $this.siblings('.active').find('.active').removeClass('active');

    $this.siblings('.active').removeClass('active');

    if (has) {
      $this.find('> ul').slideUp(300);
      $this.removeClass('active');
    } else {
      $this.find('> ul').slideDown(300);
      $this.addClass('active');
    }
  });

  $('.mobile-side-menu ul').click(function (e) {
    return false;
  });
}

MobileSideMenu__init();

// 모바일 메인스와이퍼
function moMainSwiper() {
  const $moSwiperCon = $('.mo-swiper-con-1');

  const swiper = new Swiper('.mo-swiper-con-1', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    speed: 2000,
    allowTouchMove: true,
    centerMode: true,
    draggable: false,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // 슬라이드에 마우스 올렸을 때 스와이퍼 일시 정지
    },
    navigation: {
      nextEl: '.mo-swiper-con-1 .swiper-btn-next',
      prevEl: '.mo-swiper-con-1 .swiper-btn-prev',
    },
    pagination: {
      el: '.mo-section-1 .swiper-pagination',
      clickable: true,
    },
  });
}
moMainSwiper();

//모바일 진료과목 스와이퍼
// function moSwiper2__init() {
//   const $swiperCon = $('.mo-swiper-con-2');

//   const swiper = new Swiper('.mo-swiper-con-2', {
//     slidesPerView: 3,

//     spaceBetween: 15,

//     loop: false,
//     loopAdditionalSlides: 1,
//     speed: 500,
//     allowTouchMove: true,
//     touchRatio: 1, // 슬라이드 드래그 감도

//     draggable: false,
//     CenterMode: true,
//     centeredSlides: true,
//     grabCursor: true,
//     centerSlides: true,

//     effect: 'flip',
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },

//     navigation: {
//       nextEl: '.mo-section-2-swiper .swiper-btn-next',
//       prevEl: '.mo-section-2-swiper .swiper-btn-prev',
//     },
//     pagination: {
//       el: '.mo-section-2-swiper .swiper-pagination',
//       clickable: true,
//     },
//   });
// }
// moSwiper2__init();

//모바일 클리닉 탭 스와이퍼
// 클리닉섹션
function moClinicSwiper() {
  const swiper = new Swiper('.mo-swiper-container', {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    resistance: true,
    resistanceRatio: 0,
    threshold: 10,
    allowTouchMove: false,
  });

  $('.mo-tab-menu li').click(function () {
    let $this = $(this);
    let thisIndex = $this.index();

    $('.mo-tab-menu li.active').removeClass('active');
    $this.addClass('active');

    swiper.slideTo(thisIndex, 300);
  });
}
moClinicSwiper();

// 모바일 퀵메뉴및 탑 스크롤
function moScrollTop() {
  let timer;
  $(window).scroll(function () {
    let $this = $(this);
    const scrollTop = $this.scrollTop();
    let wHeight = $this.height();
    let dHeight = $(document).height();

    clearTimeout(timer);
    timer = setTimeout(function () {
      if (scrollTop > dHeight * 0.21 - wHeight) {
        $('.mo-real-scroll-box').addClass('active');
      } else {
        $('.mo-real-scroll-box').removeClass('active');
      }
    });

    // $("#mo-wrap").click(function () {
    // 	$(".mo-quick-btn, .mo-youtube-btn, .mo-blog-btn").removeClass("active");
    // });
  });
  $('.mo-side-top-quick-menu').click(function () {
    $('.mo-quick-btn, .mo-youtube-btn, .mo-blog-btn').toggleClass('active');
  });

  $('.mo-scroll-top-btn').click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 300);
  });

  $('.mo-scroll-top-btn, .mo-side-top-quick-menu').click(function (e) {
    e.preventDefault();
  });
}

moScrollTop();
