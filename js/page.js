/* 
* @Author: Hector
* @Date:   2015-05-22 17:15:52
* @Last Modified by:   huhuaquan
* @Last Modified time: 2015-05-27 18:53:07
*/
(function() {

	var card = (function() {
		var first = 9,
			second = 5.5,
			animationProperty = 'webkitAnimationStart webkitAnimationEnd webkitAnimationIteration',
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

		return {
			init : function() {
				var _this = this;
				$('#egg').one(animationProperty, function(e) {
					if ($(this).offset().left == 100) {
						$(this).fadeTo('slow', 0);
						$('#broegg').fadeTo('slow', 1);
						setTimeout(function () {
							_this.growToKid();
							move(0, 180, first)
						}, 500);
					};
				});
			},

			growToKid : function() {
				var _this = this;
				$("#broegg").css(animateState, 'running').one(animationProperty, function(e) {
					if ($(this).offset().left == 280) {
						$(this).fadeTo('slow', 0);
						$('#kid').fadeTo('slow', 1);
						setTimeout(function () {
							_this.growToPupils();
							move(181, 360, second);
						}, 500);
					};
				});		
			},
			growToPupils : function() {
				var _this = this;
				$("#kid").css(animateState, 'running').one(animationProperty, function(e) {
					if ($(this).offset().left == 460) {
						$(this).fadeTo('slow', 0);
						$('#pupils').fadeTo('slow', 1);
						setTimeout(function () {
							_this.growToJunior();
							move(361, 540, second);
						}, 500);
					};
				});
			},
			growToJunior : function() {
				var _this = this;
				$("#pupils").css(animateState, 'running').one(animationProperty, function(e) {
					if ($(this).offset().left == 640) {
						$(this).fadeTo('slow', 0);
						$('#junior').fadeTo('slow', 1);
						setTimeout(function () {
							_this.growToSenior();
							move(541, 720, second);
						}, 500);
					};
				});
			},
			growToSenior : function() {
				var _this = this;
				$("#junior").css(animateState, 'running').one(animationProperty, function(e) {
					if ($(this).offset().left == 820) {
						$(this).fadeTo('slow', 0);
						$('#senior').fadeTo('slow', 1);
						setTimeout(function () {
							_this.growToCollege();
							move(721, 900, second);
						}, 500);
					};
				});
			},
			growToCollege : function() {
				var _this = this;
				$("#senior").css(animateState, 'running').one(animationProperty, function(e) {
					if ($(this).offset().left == 1000) {
						$(this).fadeTo('slow', 0);
						$('#college').fadeTo('slow', 1);
						setTimeout(function () {
							_this.growToRecent();
							move(901, 1080, second);
						}, 500);
					};
				});
			},
			growToRecent : function() {
				$("#college").css(animateState, 'running').one(animationProperty, function(e) {
					if ($(this).offset().left == 1180) {
						$(this).fadeTo('slow', 0);
						$('#recent').fadeTo('slow', 1);
					};
				});
			}

		}
	})();

	card.init();
})();