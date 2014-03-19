function createsly(effectId){
	'use strict';

	console.log(effectId);
	// -------------------------------------------------------------
	//   Effects
	// -------------------------------------------------------------
	(function () {
		var $frame = $('#'+ effectId);
		var $wrap  = $frame.parent();

		// Call Sly on frame
		$frame.sly({
			horizontal: 1,
			itemNav: 'forceCentered',
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			easing: 'swing',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,

			// Buttons
			prev: $wrap.find('.prev'),
			next: $wrap.find('.next')
		});
		
		// Add item
		$wrap.find('.add').on('click', function () {
			$frame.sly('add', '<li>' + '<img src="http://www.himagemaking.com/data/cheditor4/1311/4eee615c7250e636168c2e9f6b797e0a_tv36IcSE.jpg"' + '</li>');
		});

		// Remove item
		$wrap.find('.remove').on('click', function () {
			$frame.sly('remove', -1);
		});
		
	}());
}