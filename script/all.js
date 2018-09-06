$(document).ready(function() {
	$(".hamburger_list").click(function(event) {
		/* Act on the event */
		
		$("body").toggleClass("menu-show");
	});
	$(".list .special").on('click',function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$('html,body').animate({
    		scrollTop: 200,
    		},700);
    });
    $(".list .chef").on('click',function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$('html,body').animate({
    		scrollTop: 800,
    		},700);
    });
    $(".list .location").on('click',function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$('html,body').animate({
    		scrollTop: 2000,
    		},700);
    });

    /*Cart*/
    $(".choose-list li").on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$(this).toggleClass('brown-white').siblings().removeClass("brown-white");
    });
});