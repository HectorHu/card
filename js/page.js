/* 
* @Author: Hector
* @Date:   2015-05-22 17:15:52
* @Last Modified by:   huhuaquan
* @Last Modified time: 2015-05-26 10:58:41
*/
(function() {
	var $_id = function(id) {
		return typeof id === 'string' ? document.getElementById(id) : id;
	};

	//设置透明度
    function setOpacity(item,level){ 
        if(item.filters){ 
            item.style.filter = "alpha(opacity="+level+")";
        }else{
            item.style.opacity = level / 100;
        }
    }

	//淡入处理函数
    function fadeIn(item) {
        setOpacity(item, 0);
        for(var i = 0; i<=20; i++) {
            (function(i){ 
                var level = i * 5;
                setTimeout(function(){ 
                    setOpacity(item, level)
                },i*25);
            })(i);
        }
    }

    //淡出处理函数
    function fadeOut(item) {
        setOpacity(item, 0);
        for(var i = 0; i<=20; i++) {
            (function(i){ 
                var level = 100 - i * 5;
                setTimeout(function(){ 
                    setOpacity(item, level)
                },i*25);
            })(i);
        }
    }

	function copyProperty(newDiv, old) {
		newDiv.style.offsetLeft = old.style.offsetLeft;
		newDiv.style.width = old.style.width;
		newDiv.style.height = old.style.height;
		newDiv.style.backgroundImage = old.style.backgroundImage;
	}

	var egg = $_id('egg');
	egg.addEventListener('webkitAnimationStart', listener, false);
	egg.addEventListener('webkitAnimationEnd', listener, false);
	egg.addEventListener('webkitAnimationIteration', listener, false);

	function listener(e) {
		if (this.offsetLeft == 100) {
			fadeOut(this);
			this.style.backgroundImage = "url(./images/egg_broke.jpg)";
			fadeIn(this);
			setTimeout(function () {growToKid()}, 500);
		}
	}

	function growToKid() {	
		egg.setAttribute('id', 'kid');
		var kid = $_id('kid');
		kid.addEventListener('webkitAnimationStart', listenerKid, false);
		kid.addEventListener('webkitAnimationEnd', listenerKid, false);
		kid.addEventListener('webkitAnimationIteration', listenerKid, false);
	}

	function listenerKid(e) {
		if (this.offsetLeft == 280) {
			this.style.width = "72px";
			this.style.height = "107px";
			fadeOut(this);
			this.style.backgroundImage = "url(./images/kid.png)";
			fadeIn(this);
			setTimeout(function () {growToPupils()}, 500);
		}
	}

	function growToPupils() {
		var kid = $_id('kid'),
			newDiv = document.createElement('div');
		newDiv.id = 'pupils';
		copyProperty(newDiv, kid);
		document.body.insertBefore(newDiv, kid);
		var pupils = document.getElementById('pupils');
		pupils.addEventListener('webkitAnimationStart', listenerPupils, false);
		pupils.addEventListener('webkitAnimationEnd', listenerPupils, false);
		pupils.addEventListener('webkitAnimationIteration', listenerPupils, false);
	}

	function listenerPupils(e) {
		if (this.offsetLeft == 460) {
			this.style.width = "72px";
			this.style.height = "107px";
			fadeOut(this);
			this.style.backgroundImage = "url(./images/pupils.png)";
			fadeIn(this);
			setTimeout(function () {growToJunior()}, 500);
		}
	}

	function growToJunior() {
		var pupils = $_id('pupils'),
			newDiv = document.createElement('div');
		newDiv.id = 'junior';
		copyProperty(newDiv, pupils);
		document.body.insertBefore(newDiv, pupils);
		var junior = document.getElementById('junior');
		junior.addEventListener('webkitAnimationStart', listenerJunior, false);
		junior.addEventListener('webkitAnimationEnd', listenerJunior, false);
		junior.addEventListener('webkitAnimationIteration', listenerJunior, false);
	}

	function listenerJunior(e) {
		if (this.offsetLeft == 640) {
			this.style.width = "72px";
			this.style.height = "107px";
			fadeOut(this);
			this.style.backgroundImage = "url(./images/junior.jpg)";
			fadeIn(this);
			setTimeout(function () {growToSenior()}, 500);
		}
	}

	function growToSenior() {
		var junior = $_id('junior'),
			newDiv = document.createElement('div');
		newDiv.id = 'senior';
		copyProperty(newDiv, junior);
		document.body.insertBefore(newDiv, junior);
		var senior = document.getElementById('senior');
		senior.addEventListener('webkitAnimationStart', listenerSenior, false);
		senior.addEventListener('webkitAnimationEnd', listenerSenior, false);
		senior.addEventListener('webkitAnimationIteration', listenerSenior, false);
	}

	function listenerSenior(e) {
		if (this.offsetLeft == 820) {
			this.style.width = "72px";
			this.style.height = "107px";
			fadeOut(this);
			this.style.backgroundImage = "url(./images/senior.jpg)";
			fadeIn(this);
			setTimeout(function () {growToCollege()}, 500);
		}
	}

	function growToCollege() {
		var senior = $_id('senior'),
			newDiv = document.createElement('div');
		newDiv.id = 'college';
		copyProperty(newDiv, senior);
		document.body.insertBefore(newDiv, senior);
		var college = document.getElementById('college');
		college.addEventListener('webkitAnimationStart', listenerCollege, false);
		college.addEventListener('webkitAnimationEnd', listenerCollege, false);
		college.addEventListener('webkitAnimationIteration', listenerCollege, false);
	}

	function listenerCollege(e) {
		if (this.offsetLeft == 1000) {
			this.style.width = "72px";
			this.style.height = "107px";
			fadeOut(this);
			this.style.backgroundImage = "url(./images/college.jpg)";
			fadeIn(this);
			setTimeout(function () {growToRecent()}, 500);
		}
	}

	function growToRecent() {
		var college = $_id('college'),
			newDiv = document.createElement('div');
		newDiv.id = 'recent';
		copyProperty(newDiv, college);
		document.body.insertBefore(newDiv, college);
		var recent = document.getElementById('recent');
		recent.addEventListener('webkitAnimationStart', listenerRecent, false);
		recent.addEventListener('webkitAnimationEnd', listenerRecent, false);
		recent.addEventListener('webkitAnimationIteration', listenerRecent, false);
	}

	function listenerRecent(e) {
		if (this.offsetLeft == 1180) {
			this.style.width = "72px";
			this.style.height = "107px";
			fadeOut(this);
			this.style.backgroundImage = "url(./images/now.jpg)";
			fadeIn(this);
		}
	}
})();