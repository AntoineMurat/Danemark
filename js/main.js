$(function(){
	//$(".button-collapse").sideNav();

	$(".card-action a, .brand-logo, ul li a").click(function() {
		$('ul.tabs').tabs('select_tab', $(this).data('dest'))
		setTimeout(function(){
			$(window).scroll()
		}, 25);
	})

	$('.parallax').parallax()

})