/*global $, alert, console*/
$(function () {
	'use static';
	var myHeader = $('.header');
	myHeader.height($(window).height());
	$(window).resize(function () {
		myHeader.height($(window).height());
	});
	 $('.links li').click(function () {
		 $(this).addClass('active').siblings().removeClass('active'); 
	 });
	
	
	 
	
	  $('.bxslider').bxSlider({
        pager:false
		 });
		 
		 
		 
  $('.links li a').click(function() {
	  
	    $('html,body').animate({
			 scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
		
  });
  
    (function autoSlider(){
		  $('.slider .active').each(function () {
			  
			 if(!$(this).is(':last-child')) {
              $(this).delay(3000).fadeOut(1000,function() {
				  $(this).removeClass('active').next().addClass('active').fadeIn();
                autoSlider();			
			});	  
			 } else {
  $(this).delay(3000).fadeOut(1000,function(){
      $(this).removeClass('active');
	  $('.slider div').eq(0).addClass('active').fadeIn();
	   autoSlider();
	  
  });
			 }  
		  });
	}());
	$('html').niceScroll({
		
		cursorcolor:'#ffd9a0',
		cursorborder: "1px solid #ffd9a0"
		
	});
 });
 
 
 