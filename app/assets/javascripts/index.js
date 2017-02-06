//main nav slider
$(function() {

$('#menu').on('click', function() {
	$('.secondary_nav').slideToggle("slow","linear");
});

$('#close').on('click', function() {
	$('.secondary_nav').slideToggle("slow","linear");
});

});

//sign in slider
$(function() {
	$('#login').on('click', function() {
		$('.sign_in').slideToggle("slow","linear");
	});

	/*$('#close').on('click', function() {
		$('.sign_in').slideToggle("slow","linear");
	});*/
});

//new user pop up
$(function() {
	$('.new_user').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.register').fadeToggle("600","linear");
		$('.sign_in').slideToggle("slow","linear");
	});
	$('.close_tab3').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.register').fadeToggle("400","linear");
	});
	
	$('.submit_user').on('click', function() {
		$('.hello').fadeToggle("600","linear");
		$('.overlay').fadeToggle("600","linear");
		$('.register').fadeToggle("400","linear");
	});
	
	$('.submit_form1').on('click', function() {
		$('.hello').fadeToggle("600","linear");
		$('.sign_in').slideToggle("slow","linear");
	});
});

//email list pop up
$(function() {
	$('#email_list').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.email_list').fadeToggle("600","linear");
	});
	$('.close_tab4').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.email_list').fadeToggle("400","linear");
	});
	
	$('.submit_user2').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.email_list').fadeToggle("400","linear");
	});
});


//smooth anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//added to cart
$(function() {
	$('.submit').on('click', function() {
		$('.added').fadeToggle("600","linear");
		setTimeout(function(){ $('.added').fadeOut() }, 3000);
});
	});
	
//game toggles
$(function() {
	$('#all').on('click', function() {		
 		$('#customizable, #visual_l, #auditory_l, #kinesthetic_l, #action, #picture, #word, #story').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( ".all" ).show();
	}); 
	
	$('#customizable').on('click', function() {
		$('#visual_l, #auditory_l, #kinesthetic_l, #action, #picture, #word, #story, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( ".customizable, .vis_cust, .vis_aud_cust, .aud_cust, .kin_cust, .vis_kin_cust, .aud_kin_cust" ).show();
		$( ".visual_l, .auditory_l, .kinesthetic_l, .vis_aud, .vis_kin, .aud_kin" ).hide();
	});  
	
	$('#visual_l').on('click', function() {		
 		$('#customizable, #auditory_l, #kinesthetic_l, #action, #picture, #word, #story, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( ".visual_l, .vis_cust, .vis_aud_cust, .vis_aud, .vis_kin, .vis_kin_cust " ).show();
		$( ".customizable, .aud_cust, .kin_cust, .auditory_l, .kinesthetic_l,  .aud_kin, .aud_kin_cust" ).hide();			
	});  
	
	$('#auditory_l').on('click', function() {		
 		$('#customizable, #visual_l, #kinesthetic_l, #action, #picture, #word, #story, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( " .vis_aud_cust, .vis_aud, .aud_cust, .auditory_l, .aud_kin, .aud_kin_cust " ).show();
		$( ".visual_l, .vis_cust, .vis_kin, .vis_kin_cust, .customizable, .kin_cust, .kinesthetic_l" ).hide();	
	}); 
	
	$('#kinesthetic_l').on('click', function() {		
 		$('#customizable, #visual_l, #auditory_l, #action, #picture, #word, #story, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
			
		$( ".aud_kin, .aud_kin_cust, .vis_kin, .vis_kin_cust, .kin_cust, .kinesthetic_l" ).show();
		$( ".vis_aud_cust, .vis_aud, .aud_cust, .auditory_l, .visual_l, .vis_cust, .customizable" ).hide();		
	}); 
	
	$('#action').on('click', function() {		
 		$('#customizable, #visual_l, #auditory_l, #kinesthetic_l, #picture, #word, #story, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( ".action, .pic_ac" ).show();
		$( ".picture, .story, .word, .pic_st, .pic_wo, .pic_st_wo" ).hide();			
	});

	$('#picture').on('click', function() {		
 		$('#customizable, #visual_l, #auditory_l, #kinesthetic_l, #action, #word, #story, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( ".picture, .pic_st, .pic_wo, .pic_st_wo, .pic_ac" ).show();
		$( ".action, .story, .word" ).hide();				
	});

	$('#word').on('click', function() {		
 		$('#customizable, #visual_l, #auditory_l, #kinesthetic_l, #action, #picture, #story, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( ".word, .pic_wo, .pic_st_wo" ).show();
		$( ".action, .pic_ac, .picture, .story, .pic_st" ).hide();				
	});

  	$('#story').on('click', function() {			
 		$('#customizable, #visual_l, #auditory_l, #kinesthetic_l, #action, #picture, #word, #all').removeClass('current_two');		
		$(this).addClass('current_two');		
		
		$( ".story, .pic_st, .pic_st_wo" ).show();
		$( ".word, .pic_wo, .action, .pic_ac, .picture" ).hide();					
	});
});  





/*$(document).ready(function(){
  $('.bxslider').bxSlider();
	
});*/

//home slider
$(document).ready(function(){
    $('.bxslider').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pause: 5500,
        responsive: true,
        auto: true,
        speed: 1000,
        infiniteLoop: true,
        captions: true,
        randomStart: false,
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.bxslider li' ).first().find( 'img' ).height() );
                $( 'ul.bxslider li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 50 ); 
        } 
    });
});

//game one slider
$(document).ready(function(){
    $('.pop-slider').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game two slider
$(document).ready(function(){
    $('.pop-slider2').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager2',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider2 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider2 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game three slider
$(document).ready(function(){
    $('.pop-slider3').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager3',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider3 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider3 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game four slider
$(document).ready(function(){
    $('.pop-slider4').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager4',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider4 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider4 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game five slider
$(document).ready(function(){
    $('.pop-slider5').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager5',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider5 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider5 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game six slider
$(document).ready(function(){
    $('.pop-slider6').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager6',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider6 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider6 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game seven slider
$(document).ready(function(){
    $('.pop-slider7').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager7',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider7 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider7 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game eight slider
$(document).ready(function(){
    $('.pop-slider8').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager8',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider8 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider8 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});

//game nine slider
$(document).ready(function(){
    $('.pop-slider9').bxSlider({ 
    	mode: 'horizontal',
        controls: true,
        pager: true,
        pagerType: true,
        pause: 5500,
        responsive: true,
        auto: false,
        speed: 1000,
        infiniteLoop: true,
        captions: false,
        randomStart: false,
        pagerCustom: '#bx-pager9',
        onSliderLoad: function(){
            setTimeout( function(){ 
                $( '.bx-viewport' ).css( 'height', $( 'ul.pop-slider9 li' ).first().find( 'img' ).height() );
                $( 'ul.pop-slider9 li' ).each( function(){
                    $( this ).css( 'opacity', '' );
                    $( this ).find( 'img' ).attr( 'src',
                    $( this ).attr( 'full' ) );
                });
                $( this ).bxSlider();
            }, 100 ); 
        } 
    });
});




//game pop ups
$(function() {
	$('.game_one_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up1').fadeToggle("600","linear");
	});
	$('.close_tab1').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up1').fadeToggle("400","linear");
	});
	
	$('.game_two_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up2').fadeToggle("600","linear");
	});
	$('.close_tab2').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up2').fadeToggle("400","linear");
	});
	
	$('.game_three_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up3').fadeToggle("600","linear");
	});
	$('.close_tab5').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up3').fadeToggle("400","linear");
	});
	
	$('.game_four_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up4').fadeToggle("600","linear");
	});
	$('.close_tab6').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up4').fadeToggle("400","linear");
	});
	
		$('.game_five_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up5').fadeToggle("600","linear");
	});
	$('.close_tab7').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up5').fadeToggle("400","linear");
	});
	
	$('.game_six_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up6').fadeToggle("600","linear");
	});
	$('.close_tab8').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up6').fadeToggle("400","linear");
	});
	
	$('.game_seven_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up7').fadeToggle("600","linear");
	});
	$('.close_tab9').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up7').fadeToggle("400","linear");
	});
	
	$('.game_eight_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up8').fadeToggle("600","linear");
	});
	$('.close_tab10').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up8').fadeToggle("400","linear");
	});
	
		$('.game_nine_open').on('click', function() {
		$('.overlay').fadeToggle("400","linear");
		$('.pop-up9').fadeToggle("600","linear");
	});
	$('.close_tab11').on('click', function() {
		$('.overlay').fadeToggle("600","linear");
		$('.pop-up9').fadeToggle("400","linear");
	});
	
});



//customized games pop up
$(function() {
	$('.order_custom').on('click', function() {
		$('.custom_pop').fadeToggle("600","linear");
		setTimeout(function(){ $('.custom_pop').fadeOut() }, 3000);
	});
});
	




