$(document).ready(function(){Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$(window).scroll(function(){var r;r=$(this).scrollTop(),$(document).scrollTop()<=900?($(".header-cover").css({opacity:1-r/600,transform:"translate(0px,"+-(r/2)+"px)"}),$(".header-wrap").css({transform:"translate(0px,"+r/3+"px)"})):($(".header-cover").css({opacity:"1",transform:"translate(0px, 0px)"}),$(".header-wrap").css({transform:"translate(0px, 0px)"}))})});