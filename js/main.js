(function() {
	var start_header = document.getElementById('start-header'),
		start_header_li = start_header.getElementsByTagName("li"),
		i = 0;
	var s = setInterval( function() {
		start_header_li[i].style.display = 'inline-block';
		if (++i == start_header_li.length) {
			clearInterval(s);
		}
	}, 700);

	var start_btn = document.getElementById('start-btn');
})();