// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){


	// SVG -> PNG Fallback through Modernizer
	if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
	}
	
	//Full Screen Image
	$(function() {   
		var theWindow        = $(window),
		    $bg              = $("#bg"),
		    aspectRatio      = $bg.width() / $bg.height();
		function resizeBg() {
			if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
			    $bg
			    	.removeClass()
			    	.addClass('bgheight');
			} else {
			    $bg
			    	.removeClass()
			    	.addClass('bgwidth');
			}
		}
		theWindow.resize(function() {
			resizeBg();
		}).trigger("resize");
	});

	
});

/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);