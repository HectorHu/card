/* 
* @Author: Hector
* @Date:   2015-05-22 17:15:52
* @Last Modified by:   huhuaquan
* @Last Modified time: 2015-05-22 19:20:22
*/
(function() {
	var egg = document.getElementById('egg');
	egg.addEventListener('webkitAnimationStart', listener, false);
	egg.addEventListener('webkitAnimationEnd', listener, false);
	egg.addEventListener('webkitAnimationIteration', listener, false);

	function listener(e) {
		if (this.offsetLeft == 100) {
			this.style.backgroundImage = "url(./images/egg_broke.jpg)";
			growToKid();
		}
	}

	function growToKid() {
		egg.setAttribute('id', 'kid');
		var kid = document.getElementById('kid');
		kid.addEventListener('webkitAnimationStart', listenerKid, false);
		kid.addEventListener('webkitAnimationEnd', listenerKid, false);
		kid.addEventListener('webkitAnimationIteration', listenerKid, false);
	}

	function listenerKid(e) {
		if (this.offsetLeft == 260) {
			this.style.width = "72px";
			this.style.height = "107px";
			this.style.backgroundImage = "url(./images/kid.png)";
			growToPupils();
		}
	}

	function growToPupils() {
		var kid = document.getElementById('kid');
		kid.setAttribute('id', 'pupils');
		var pupils = document.getElementById('pupils');
		pupils.addEventListener('webkitAnimationStart', listenerPupils, false);
		pupils.addEventListener('webkitAnimationEnd', listenerPupils, false);
		pupils.addEventListener('webkitAnimationIteration', listenerPupils, false);
	}

	function listenerPupils(e) {
		if (this.offsetLeft == 400) {
			this.style.width = "102px";
			this.style.height = "133px";
			this.style.backgroundImage = "url(./images/pupils.png)";
			growToPupilsGra();
		}
	}

	function growToPupilsGra() {
		var pupils = document.getElementById('pupils');
		pupils.setAttribute('id', 'pupilsGra');
		var pupilsGra = document.getElementById('pupilsGra');
		pupilsGra.addEventListener('webkitAnimationStart', listenerPupilsGra, false);
		pupilsGra.addEventListener('webkitAnimationEnd', listenerPupilsGra, false);
		pupilsGra.addEventListener('webkitAnimationIteration', listenerPupilsGra, false);
	}

	function listenerPupilsGra(e) {
		if (this.offsetLeft == 560) {
			this.style.width = "122px";
			this.style.height = "91px";
			this.style.backgroundImage = "url(./images/pupils.jpg)";
			growToJunior();
		}
	}

	function growToJunior() {
		var pupilsGra = document.getElementById('pupilsGra');
		pupilsGra.setAttribute('id', 'junior');
		var junior = document.getElementById('junior');
		junior.addEventListener('webkitAnimationStart', listenerJunior, false);
		junior.addEventListener('webkitAnimationEnd', listenerJunior, false);
		junior.addEventListener('webkitAnimationIteration', listenerJunior, false);
	}

	function listenerJunior(e) {
		if (this.offsetLeft == 760) {
			this.style.width = "145px";
			this.style.height = "193px";
			this.style.backgroundImage = "url(./images/junior.jpg)";
			growToJunior();
		}
	}
})();