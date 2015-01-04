$(document).ready(function(){

/* Used to disable execution of multiple quick clicks on the testimonials */
var testimonialDisabled = false;
/* Used to disable execution of multiple quick clicks on the hamburger icon */
var navbarToggleDisabled = false;
/* Get window width */
var windowWidth = window.innerWidth;

/* Toggle testimonials on right side */
$(".col-sm-6 .fw-testimonial-single").click(function(){
    if (testimonialDisabled) {
        return;
    }
    else {
        $("body").toggleClass("fw-testimonial-clicked");
        $(this).toggleClass("fw-testimonial-single-clicked");
        $("img, p:nth-of-type(2)", this).toggle(400);
        testimonialDisabled = true;
        setTimeout (function(){
            testimonialDisabled = false;
        }, 400);
    }
});

/* Toggle testimonial on left side */
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
        }, 400);
    }
});

/* Remove overlay by pressing esc */
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        if ($("body").hasClass("fw-testimonial-clicked")) {
            deselectTestimonial();
        }
        else if ($("body").hasClass("fw-navbar-clicked")) {
            $("body").removeClass("fw-navbar-clicked");
            $('.navbar-collapse').collapse('hide');
        }
    } 
});

/* Remove overlay and dropdown nav by clicking the overlay itself */
$(".fw-overlay").click(function() {
    deselectTestimonial();
    if ($("body").hasClass("fw-navbar-clicked")) {
        $("body").removeClass("fw-navbar-clicked");
        $('.navbar-collapse').collapse('hide');
    }
});


/* Show overlay when dropdown menu is visible */
$(".navbar-toggle").click(function(){
    if (navbarToggleDisabled) {
        return;
    }
    else {
        //$(this).toggleClass("fw-testimonal-single-clicked");
        $("body").toggleClass("fw-navbar-clicked");
        navbarToggleDisabled = true;
        setTimeout (function(){
            navbarToggleDisabled = false;
        }, 400);
    }
});

/* Remove overlay and collapse dropdown nav when resizing window while dropdown nav is displayed */
window.onresize=function() {
    console.log(windowWidth);
    if ((windowWidth > 766) && ($("body").hasClass("fw-navbar-clicked"))) {
        $('.navbar-collapse').collapse('hide');
        $("body").removeClass("fw-navbar-clicked");
    }
    windowWidth = window.innerWidth;
}

/* Add class to body when not at top of page */
$(function(){
    //Keep track of last scroll
    var lastScroll = 0;
    $(window).scroll(function(event){
        /*Sets the current scroll position. Add -100 or similar to value to
        let nav stay at top of page for a little while when scrolling*/
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st > lastScroll){
            //Replace this with your function call for downward-scrolling
            // For some reason, this executes on page load when site is scrolled down
            $( "body" ).addClass("fw-scrolled-down");
        }
        else {
            //Replace this with your function call for upward-scrolling
            $( "body" ).removeClass("fw-scrolled-down");
        }
        //Updates scroll position
        lastScroll = st;
        console.log( $( window ).scrollTop());
        console.log("lastScroll: " + lastScroll + ". st: " + st);
    });
});































/*------------------------------ FUNCTIONS -----------------------------------*/
function deselectTestimonial() {
    $("body").removeClass("fw-testimonial-clicked");
    $(".fw-testimonial-single-clicked img, .fw-testimonial-single-clicked p:nth-of-type(2)").hide(400);
    $("*").removeClass("fw-testimonial-single-clicked");
}
   
   
   
   
   
   
   
    
    
});