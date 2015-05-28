/* 
* @Author: Hector
* @Date:   2015-05-22 17:15:52
* @Last Modified by:   huhuaquan
* @Last Modified time: 2015-05-28 16:10:31
*/
(function() {

	var card = (function() {
		var first = 9,
			second = 5.5,
			animationProperty = 'webkitAnimationEnd',
			animateState = '-webkit-animation-play-state';

		function move(begin, end, interval) {
	    	var elem = $('#timeline'),
	    		left = begin;

			function frame() {
				left++;
			    elem.width(left);
			    if (left == end) {
			    	clearInterval(id)
			    }
			}

			var id = setInterval(frame, interval);
		}

		function drawTime(elemName) {
			var elem = $('#' + elemName + '_time'),
				top = 0,
				height = 20;
			function frame() {
				++top;
				elem.height(top);
				if (top == height) {
					$('#' + elemName + '_desc').fadeTo('slow', 1);
					clearInterval(id);
				}
			}

			var id = setInterval(frame, 10);
		}

		return {
			init : function() {
				var _this = this;
				$('#broegg').addClass('animated bounceInDown').one(animationProperty, function(e) {
					$(this).removeClass('bounceInDown');
					$(this).css('background-image', "url(./images/egg_broke.jpg)");
					drawTime('broegg');
					setTimeout(function () {
						_this.growToKid();
						move(0, 180, first);
					}, 500);
				});
			},
			growToKid : function() {
				var _this = this;
				$("#kid").addClass('animated fadeInLeftBig').one(animationProperty, function(e) {
					$(this).removeClass('fadeInLeftBig');
					$(this).fadeTo('slow', 1);
					drawTime('kid');
					setTimeout(function () {
						_this.growToPupils();
						move(181, 360, second);
					}, 500);
				});
			},
			growToPupils : function() {
				var _this = this;
				$("#pupils").addClass('animated zoomInUp').one(animationProperty, function(e) {
					$(this).removeClass('zoomInUp');
					$(this).fadeTo('slow', 1);
					drawTime('pupils');
					setTimeout(function () {
						_this.growToJunior();
						move(361, 540, second);
					}, 500);
				});
			},
			growToJunior : function() {
				var _this = this;
				$("#junior").addClass('animated rollIn').one(animationProperty, function(e) {
					$(this).removeClass('rollIn');
					$(this).fadeTo('slow', 1);
					drawTime('junior');
					setTimeout(function () {
						_this.growToSenior();
						move(541, 720, second);
					}, 500);
				});
			},
			growToSenior : function() {
				var _this = this;
				$("#senior").addClass('animated lightSpeedIn').one(animationProperty, function(e) {
					$(this).removeClass('lightSpeedIn');
					$(this).fadeTo('slow', 1);
					drawTime('senior');
					setTimeout(function () {
						_this.growToCollege();
						move(721, 900, second);
					}, 500);
				});
			},
			growToCollege : function() {
				var _this = this;
				$("#college").addClass('animated fadeInDownBig').one(animationProperty, function(e) {
					$(this).removeClass('fadeInDownBig');
					$(this).fadeTo('slow', 1);
					drawTime('college');
					setTimeout(function () {
						_this.growToRecent();
						move(901, 1080, second);
					}, 500);
				});
			},
			growToRecent : function() {
				$("#recent").addClass('animated rotateIn').one(animationProperty, function(e) {
					$(this).removeClass('rotateIn');
					$(this).fadeTo('slow', 1);
					drawTime('recent');
				});
			}

		}
	})();
	card.init();
})();