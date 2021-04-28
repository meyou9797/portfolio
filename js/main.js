$(document).ready(function(){
    //mainCon01 이미지 슬릭
   $('.contentImg').slick({
  slidesToShow: 1,
  autoplay:true,
       arrows:false,
   infinite:true,
  autoplaySpeed:3000,
});
    
    $(window).scroll(function(){
        var sc_top=$(this).scrollTop(); 
        var sc_left=$(this).scrollLeft();
        
        $('.top').text(sc_top);        
        if(sc_top>800){
            $('#header').addClass('fixed');
        }else if(sc_top==0){
            $('#header').removeClass('fixed');
        }
    })
    
    
    //sab tab js
    $(".tab_content").hide(); //Hide all content
            $("ul.tabs li:first").addClass("active").show(); //Activate first tab
            $(".tab_content:first").show(); //Show first tab content

            //On Click Event
            $("ul.tabs li").click(function() {

                $("ul.tabs li").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".tab_content").hide(); //Hide all tab content

                var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
                $(activeTab).fadeIn(1500); //Fade in the active ID content
                return false;
            });
    
    
    /* Demo purposes only */
    var snippet = [].slice.call(document.querySelectorAll('.hover'));
    if (snippet.length) {
      snippet.forEach(function (snippet) {
        snippet.addEventListener('mouseout', function (event) {
          if (event.target.parentNode.tagName === 'figure') {
            event.target.parentNode.classList.remove('hover')
          } else {
            event.target.parentNode.classList.remove('hover')
          }
        });
  });
}
    
    //wow 실행문
    new WOW().init();
    

    //해당 영역 이동
    $('.con01Btn').click(function(){
			var offset = $('.mainCon02').offset();
	        $('html').animate({scrollTop : offset.top}, 400);
		});
    $('.move1').click(function(){
			var offset = $('.mainSlider').offset();
	        $('html').animate({scrollTop : offset.top}, 400);
		});
     $('.move2').click(function(){
			var offset = $('.mainCon02').offset();
	        $('html').animate({scrollTop : offset.top}, 400);
		});
    $('.move3').click(function(){
			var offset = $('.mainCon03').offset();
	        $('html').animate({scrollTop : offset.top}, 400);
		});
    $('.move4').click(function(){
			var offset = $('.mainCon04').offset();
	        $('html').animate({scrollTop : offset.top}, 400);
		});
    
    //팝업
    $('.popBg,.popBox').hide();
    $('.popBtn').click(function(){
        $('.popBg,.popBox').fadeIn();
    })
    
    $('.popBg,.closeBtn').click(function(){
        $('.popBg,.popBox').fadeOut();
    })
    

})