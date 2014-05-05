


/* trigger when page is ready */
$(document).ready(function (){


	// SVG -> PNG Fallback through Modernizer
	if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
	}
	
	// Header Slide
	
	if (document.body.clientWidth > 768) {
        
	$(window).scroll(function() {
	
		var UserScroll;
	    	UserScroll = $(this).scrollTop();
	
		if ( $(document).scrollTop() <= 900 ) {
			
			$('.header-cover').css({
	    		'opacity' :  1-(UserScroll/600),
	    		'transform' : 'translate(0px,' + -(UserScroll/2)+"px)"
	    	});
	    	
			$('.header-wrap').css({
	    		'transform' : 'translate(0px,' + (UserScroll/3)+"px)"
	    	});

	    }
	    
	    else  {
		    $('.header-cover').css({
	    		'opacity' :  '1',
	    		'transform' : 'translate(0px, 0px)'
	    	});
	    	
			$('.header-wrap').css({
	    		'transform' : 'translate(0px, 0px)'
	    	});
	    }
		
		
	});
	
	};
	    

});
	
if (document.body.clientWidth < 768) {
        console.log('mobile');
    }