var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function() {
	$(".mask").mask("+7(999) 999-9999");


	new WOW().init();

	$('.title_page').addClass('wow fadeIn');
	$('.desc_ppp').addClass('wow fadeIn');
	$('.desc_icon').addClass('wow fadeIn');

	$('.ocarousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	$('.ocarousel_s').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
	$('.ocarousels').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});


	// Modal
	   $('.open_modal').click(function() {

	       var popupid = $(this).attr('rel');

	       $('#' + popupid).fadeIn();

	       $('body').append('<div id="fade"></div>');
	       $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();

	       var popuptopmargin = ($('#' + popupid).height() + 10) / 2;
	       var popupleftmargin = ($('#' + popupid).width() + 10) / 2;

	       $('#' + popupid).css({
	           'margin-top' : -popuptopmargin,
	           'margin-left' : -popupleftmargin
	       });
	   });

	   $('#close, #close2, #close3, #close4').click(function() {

	       $('#fade , #popuprel , #popuprel2 , #popuprel3, #popuprel4, #popuprel5 , #popuprel6 , #popuprel7, #popuprel8 , #popuprel9 , #popuprel10, #popuprel11, #popuprel12').fadeOut()
	       return false;
	   });

	  //E-mail Ajax Send
	   $(".zakaz_z").submit(function() { //Change
	       var th = $(this);
	       $.ajax({
	           type: "POST",
	           url: "/wp-content/themes/tatu/send.php", //Change
	           data: th.serialize()
	       }).done(function() {
	           $('.popupbox #close').click();
	           $('.popup-thanks').fadeIn();
	           setTimeout(function() {
	               // Done Functions
	               th.trigger("reset");
	               $('.popup-thanks').fadeOut();
	           }, 4000);
	       });
	       return false;
	   });

	  //E-mail Ajax Send
	   $(".frms").submit(function() { //Change
	       var th = $(this);
	       $.ajax({
	           type: "POST",
	           url: "/wp-content/themes/tatu/send.php", //Change
	           data: th.serialize()
	       }).done(function() {
	           $('.popup-thanks').fadeIn();
	           setTimeout(function() {
	               // Done Functions
	               th.trigger("reset");
	               $('.popup-thanks').fadeOut();
	           }, 4000);
	       });
	       return false;
	   });


	   var $menu = $(".top_line");

	   $(window).scroll(function(){
	       if ( $(this).scrollTop() > 100 && $menu.hasClass("top_line") ){
	           $menu.fadeOut('fast',function(){
	               $(this).removeClass("top_line")
	                      .addClass("fixed_menu")
	                      .fadeIn('fast');
	           });
	       } else if($(this).scrollTop() <= 10 && $menu.hasClass("fixed_menu")) {
	           $menu.fadeOut('fast',function(){
	               $(this).removeClass("fixed_menu")
	                      .addClass("top_line")
	                      .fadeIn('fast');
	           });
	       }
	   });
	   
	   // $("[data-fancybox]").fancybox({
	   // 		loop: true
	   // 	});
});

}
/*
     FILE ARCHIVED ON 22:12:16 May 18, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:49:51 Apr 11, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 98.105
  exclusion.robots: 0.259
  exclusion.robots.policy: 0.247
  RedisCDXSource: 0.656
  esindex: 0.014
  LoadShardBlock: 76.002 (3)
  PetaboxLoader3.datanode: 85.276 (4)
  CDXLines.iter: 18.62 (3)
  load_resource: 50.776
  PetaboxLoader3.resolve: 24.037
*/