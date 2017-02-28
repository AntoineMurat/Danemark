function updateURL(hash){
	
	hash = hash.replace( /^#/, '' )
	var node = $( '#' + hash )
	node.attr( 'id', '' )
	document.location.hash = hash
	node.attr( 'id', hash )

	setTimeout(function(){
		$(window).scroll()
	}, 25)
}

$(function(){
	//$(".button-collapse").sideNav();

	$("[data-dest]").click(function() {
		window.location.hash = $(this).data('dest')
		$('ul.tabs').tabs('select_tab', $(this).data('dest'))
		updateURL($(this).data('dest'))
	})

	$('ul.tabs').on('click', 'a', function(e) {
		updateURL($(this).attr('href'))
	})

	$('.parallax').parallax()

})