(function() {
	var start = document.getElementById('start');
	start.onmouseover = function() {
		console.log(start);
		this.style.backgroundColor = '#A4A4A4';
	}

	start.onmouseout = function() {
		this.style.backgroundColor = '#D8D8D8';
	}
})();