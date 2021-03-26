$(function(){

$(document).on("click", ".go_to_top", function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 1500);
});

$(["data-scroll"]).on("click", function(event){
    event.preventDefault();
    
    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    
    console.log(elementOffset);
    
    $("html, body").animate({
        scrollTop: elementOffset
    });
});
    
    
});