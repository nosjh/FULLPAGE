// full page js
// $(function() {
//     $('#fullpage').fullpage({
// 		//options here
// 		autoScrolling:true,
// 		scrollHorizontally: true,
// 		sectionsColor: ['#121212', 'whitesmoke', '#121212', '#121212']
// 	});
// });



$(document).ready(function() {
	// fullpage
	$('#fullpage').fullpage({		      
	  sectionsColor: ['#121212', '#121212', '#121212', '#121212', '#F2E9D8'],
	//   anchors: ['sec1', 'sec2', 'sec3'],
	//   menu: '#menu',
	  scrollingSpeed: 1000,
	  // scrollBar: true,
	  onLeave: function(origin, destination, direction) {
		// 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
		$('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
		  event.preventDefault();
		  event.stopPropagation();
		  return false;
		});
		swiper.mousewheel.disable();
	  },
	  afterLoad: function(anchorLink, index) {      
		// 전환이 끝난후 이벤트풀기                               
		$('#fullpage').off('scroll touchmove mousewheel'); 
		if(swiper) swiper.mousewheel.enable();
  
		// if(index == 4) $.fn.fullpage.setAllowScrolling(false); // 마지막센션에서 올라올때 자동방지
	  }
	});           
  
	// swiper
	var swiper = new Swiper('.swiper-container', {
	  slidesPerView: 1,
	  spaceBetween: 0,
	  freeMode: false,
	  speed: 1000,
	  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
	  mousewheel: false,                                         
	  on: {
		slideChange: function(){
		  var idx = this.activeIndex;
		  // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
		  if(this.activeIndex != 0 && idx != 2) $.fn.fullpage.setAllowScrolling(false);
		  // console.log('즉시 : ' + idx);
		},  
		slideChangeTransitionEnd: function(){
		  var idx = this.activeIndex;
		  // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
		  if(idx == 0 || idx == 2) $.fn.fullpage.setAllowScrolling(true);
		  // console.log('전환후 : ' + idx);
		}                 
	  }, 
	});            
  });