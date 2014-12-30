$(document).ready(function(){
    
var testimonialDisabled = false;
   
$(".col-sm-6 .fw-testimonial-single").click(function(){
    if (testimonialDisabled) {
        return;
    }
    else {
        //$(this).toggleClass("fw-testimonal-single-clicked");
        $("img, p:nth-of-type(2)", this).toggle(400);
        testimonialDisabled = true;
        setTimeout (function(){
            testimonialDisabled = false;
        }, 500);
    }
});

$(".col-sm-6.fw-testimonial-single").click(function(){
    if (testimonialDisabled) {
        return;
    }
    else {
        //$(this).toggleClass("fw-testimonal-single-clicked");
        $("img, p:nth-of-type(2)", this).toggle(400);
        testimonialDisabled = true;
        setTimeout (function(){
            testimonialDisabled = false;
        }, 500);
    }
});
   
   
   
   
   
   
   /*if (genreListClickDisabled) {
        return;
    }
    else {
        $( "ul#fw-genres" ).toggle(500);
        $( "#fw-genre-heading .fa" ).toggleClass( "fw-rotate-z-90" );
        genreListClickDisabled = true;
        setTimeout(function(){
            genreListClickDisabled = false;
        }, 500);
    }*/
   
   
   
   
   
   
   
   
   
   
   
   
    
    
});