
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .nav').toggleClass('active');
    });
});

$(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('.header_burger, .nav').removeClass('active');
    $('body, html').animate({scrollTop: top}, 1000); // плавно переходим к блоку
});


jQuery(window).scroll(function()
	{
		var scroll_top = jQuery(window).scrollTop();
		
		if(scroll_top >= 300)
		{
			jQuery('[data-btn="toTop"]').addClass('to-top--fixed');
		}
		else
		{
			jQuery('[data-btn="toTop"]').removeClass('to-top--fixed');
		}
	});
	
	jQuery('[data-btn="toTop"]').on('click', function(e)
	{
		e.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, 600);
	});

