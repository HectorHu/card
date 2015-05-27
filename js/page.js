/* 
* @Author: Hector
* @Date:   2015-05-22 17:15:52
* @Last Modified by:   huhuaquan
* @Last Modified time: 2015-05-27 15:53:17
*/
(function() {
	var first = 9,
		second = 5.5;

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

	$('#egg').one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
		if ($(this).offset().left == 100) {
			$(this).fadeTo('slow', 0);
			$('#broegg').fadeTo('slow', 1);
			setTimeout(function () {
				growToKid();
				move(0, 180, first)
			}, 500);
		};
	});

	function growToKid() {
		$("#broegg").css('-webkit-animation-play-state', 'running').one(
			'webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 280) {
				$(this).fadeTo('slow', 0);
				$('#kid').fadeTo('slow', 1);
				setTimeout(function () {
					growToPupils();
					move(181, 360, second);
				}, 500);
			};
		});
	}

	function growToPupils() {
		$("#kid").css('-webkit-animation-play-state', 'running').one(
			'webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 460) {
				$(this).fadeTo('slow', 0);
				$('#pupils').fadeTo('slow', 1);
				setTimeout(function () {
					growToJunior();
					move(361, 540, second);
				}, 500);
			};
		});
	}

	function growToJunior() {
		$("#pupils").css('-webkit-animation-play-state', 'running').one(
			'webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 640) {
				$(this).fadeTo('slow', 0);
				$('#junior').fadeTo('slow', 1);
				setTimeout(function () {
					growToSenior();
					move(541, 720, second);
				}, 500);
			};
		});
	}

	function growToSenior() {
		$("#junior").css('-webkit-animation-play-state', 'running').one(
			'webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 820) {
				$(this).fadeTo('slow', 0);
				$('#senior').fadeTo('slow', 1);
				setTimeout(function () {
					growToCollege();
					move(721, 900, second);
				}, 500);
			};
		});
	}

	function growToCollege() {
		$("#senior").css('-webkit-animation-play-state', 'running').one(
			'webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 1000) {
				$(this).fadeTo('slow', 0);
				$('#college').fadeTo('slow', 1);
				setTimeout(function () {
					growToRecent();
					move(901, 1080, second);
				}, 500);
			};
		});
	}

	function growToRecent() {
		$("#college").css('-webkit-animation-play-state', 'running').one(
			'webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 1180) {
				$(this).fadeTo('slow', 0);
				$('#recent').fadeTo('slow', 1);
			};
		});
	}
})();