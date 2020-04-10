$(document).ready(function(){
    $('.head-wrap').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dotsClass: 'header-slider_dots'
    });
    //E-mail Ajax Send
	$('form').submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка получена");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$('.burger-nav').on('click', function(){
		$('.header-top_navigation').addClass('active-navigation');
	});
	$('.header-top_navi-link').on('click', function(){
		$('.header-top_navigation').remove('active-navigation');
	})
});
