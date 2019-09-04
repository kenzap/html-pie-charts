(function ($) {
 "use strict";
	
	$('.circle').circleProgress({
		fill: "#000",
		size: 176,
		thickness: 3,
		emptyFill: "#f7f7f7",
		startAngle: 4.7
		})
	.on('circle-animation-progress', function(event, progress, stepValue ) {
		$(this).find('strong').html(Math.round(stepValue * 100) + '<span>%</span>');
	});
	
	
})(jQuery);