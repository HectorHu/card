(function() {
	var $_id = function (id) {
		return typeof id === "string" ? document.getElementById(id) : id;
	};
	
	var start_link = $_id('start-link'),
		start_header = $_id('start-header'),
		start_header_li = start_header.getElementsByTagName("li"),
		i = 0;
	var s = setInterval( function() {
		start_header_li[i].style.display = 'inline-block';
		if (++i == start_header_li.length) {
			clearInterval(s);
			start_link.href = './page.html';
		}
	}, 700);
})();