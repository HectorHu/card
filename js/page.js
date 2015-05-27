/* 
* @Author: Hector
* @Date:   2015-05-22 17:15:52
* @Last Modified by:   huhuaquan
* @Last Modified time: 2015-05-27 15:40:04
*/
(function() {
	var first = 9,
		second = 5.5;

    function move(begin, end, interval) {
      var elem = $('#timeline');
      var left = begin;

	  function frame() {
	    
	    left++;  // update parameters 
	    
	    elem.width(left);

	    if (left == end)  // check finish condition
	      clearInterval(id)
	  }

	  var id = setInterval(frame, interval) // draw every 10ms
	}

	var egg = $('#egg');
	egg.one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
		if ($(this).offset().left == 100) {
			var	broegg = $('#broegg');
			$(this).fadeTo('slow', 0);
			broegg.fadeTo('slow', 1);
			setTimeout(function () {growToKid();move(0, 180, first)}, 500);
		};
	});

	function growToKid() {
		var broegg = $("#broegg");
		broegg.css('-webkit-animation-play-state', 'running');
		broegg.one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 280) {
				$(this).fadeTo('slow', 0);
				var kid = $('#kid');
				kid.fadeTo('slow', 1);
				setTimeout(function () {growToPupils();move(181, 360, second);}, 500);
			};
		});
	}

	function growToPupils() {
		var kid = $("#kid");
		kid.css('-webkit-animation-play-state', 'running');
		kid.one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 460) {
				$(this).fadeTo('slow', 0);
				var pupils = $('#pupils');
				pupils.fadeTo('slow', 1);
				setTimeout(function () {growToJunior();move(361, 540, second);}, 500);
			};
		});
	}

	function growToJunior() {
		var pupils = $("#pupils");
		pupils.css('-webkit-animation-play-state', 'running');
		pupils.one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 640) {
				$(this).fadeTo('slow', 0);
				var junior = $('#junior');
				junior.fadeTo('slow', 1);
				setTimeout(function () {growToSenior();move(541, 720, second);}, 500);
			};
		});
	}

	function growToSenior() {
		var junior = $("#junior");
		junior.css('-webkit-animation-play-state', 'running');
		junior.one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 820) {
				$(this).fadeTo('slow', 0);
				var senior = $('#senior');
				senior.fadeTo('slow', 1);
				setTimeout(function () {growToCollege();move(721, 900, second);}, 500);
			};
		});
	}

	function growToCollege() {
		var senior = $("#senior");
		senior.css('-webkit-animation-play-state', 'running');
		senior.one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 1000) {
				$(this).fadeTo('slow', 0);
				var college = $('#college');
				college.fadeTo('slow', 1);
				setTimeout(function () {growToRecent();move(901, 1080, second);}, 500);
			};
		});
	}

	function growToRecent() {
		var college = $("#college");
		college.css('-webkit-animation-play-state', 'running');
		college.one('webkitAnimationStart webkitAnimationEnd webkitAnimationIteration', function(e) {
			if ($(this).offset().left == 1180) {
				$(this).fadeTo('slow', 0);
				var recent = $('#recent');
				recent.fadeTo('slow', 1);
			};
		});
	}
})();