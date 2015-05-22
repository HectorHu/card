(function() {
	var start_header = document.getElementById('start-header');
	var start_header_li = start_header.getElementsByTagName("li");
	var i = 0;
	var s = setInterval( function() {
		start_header_li[i].style.display = 'inline-block';
		if (++i == start_header_li.length) {
			clearInterval(s);
		}
	}, 1000);

	var start = document.getElementById('start');
	start.onmouseover = function() {
		this.style.backgroundColor = '#333';
	}

	start.onmouseout = function() {
		this.style.backgroundColor = '#fff';
	}
})();