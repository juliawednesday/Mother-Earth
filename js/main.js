const swiper1 = document.querySelector('.slider-container'),
      swiper2 = document.querySelector('.swiper-container'),
      burger = document.querySelector('.burger'),
			close = document.querySelector('.menu__close'),
			menu = document.querySelector('.menu'),
			playButton = document.querySelectorAll('.featured-videos__play');

let swiperSlider1 = new Swiper(swiper1, {
centeredSlides: true,
slidesPerView: 'auto',
loop: true,
spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
	effect: 'fade',
	navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },
	});

	swiperSlider1.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.slide-1 video');
	videos.forEach((el) => {
		el.pause();
		el.currntTime = 0;
	});
	playButton.forEach((el) => {
		el.style.display = 'block';
	});
	});

burger.addEventListener('click', () => {
menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
	});

	playButton.forEach((el) => {
   el.addEventListener('click', (e) => {
		 let video = e.currentTarget.closest('.swiper-slide').querySelector('video');
		 video.play();
		 e.currentTarget.style.display = 'none';
		 setTimeout(() => {
			 video.volume = 0.5;
		 }, 1000);
		});
	});
