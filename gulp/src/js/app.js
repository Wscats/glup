'use strict';

/*window.onload = function() {
	const mycanvas = document.getElementById("myCanvasTag");
	const mycontext = mycanvas.getContext('2d');
	let img=document.getElementById("bgImg");
    mycontext.drawImage(img,10,10);
	img = new Image();
	img.src = 'img/玛丽场景.png';
	img.style.width = '100%';
	img.style.height = '100%';
	img.onload = function() {
		mycontext.drawImage(img,0, 0,300,600);
		mycontext.createPattern(img,"no-repeat");
	}
}*/
moveX = 0;
//移动速度
moveSpeed = 0.1;
//红包数量
score = 0;
//全游戏剩余时间
time = 60;
//进入大姨妈的剩余时间
DYMtime = 15;
//判断是否大姨妈
isDYM = 1;

//向前动画，分别为大姨妈和跑步状态
setInterval("ActionRight()", 10);
setInterval("ActionRightDYM()", 10);
//大姨妈每秒减1s
setInterval("DYMDecreaseTime()", 1000);

window.onload = function() {}

function ActionJump(obj) {
	//	alert(123);
	let rw = document.getElementById('rw');
	console.log(123);
	rw.style.left = '20px';
	//	obj.style.left = '10px';
};


function ActionRight() {
	let rw = document.getElementById('rw');
	let rwDYM = document.getElementById('rwDYM');
	let bgRoom = document.getElementById('bgRoom');
	//	directX = 1;
	//	console.log("向前");
	//	let moveX = 0;
	moveX += moveSpeed;
	rw.style.left = moveX + '%';
	/*px情况用offsetleft和offsetWidth*/
	/*rw.style.left = moveX + 'px';*/
	//重跑
	/*if (moveX + rw.offsetLeft >= 2 * bgRoom.offsetWidth) {
		moveX -= moveX;
	}*/
	if (rw.offsetLeft >= bgRoom.offsetWidth) {
		moveX -= moveX;
	}
	/*if(bgRoom.style.left >= '100%'){
		moveX -= moveX;
	}*/
	/*if (ballY + div2.offsetHeight >= div1.offsetHeight || ballY <= 0) {
		directY = -directY;
	}*/
};

function ActionRightDYM() {
	let rwDYM = document.getElementById('rwDYM');
	const bgRoom = document.getElementById('bgRoom');
	//	directX = 1;
	//	console.log("向前");
	//	const moveX = 0;
	moveX += moveSpeed;
	rwDYM.style.left = moveX + '%';
	/*px情况用offsetleft和offsetWidth*/
	/*rw.style.left = moveX + 'px';*/
	//重跑
	/*if (moveX + rw.offsetLeft >= 2 * bgRoom.offsetWidth) {
		moveX -= moveX;
	}*/
	if (rwDYM.offsetLeft >= bgRoom.offsetWidth) {
		moveX -= moveX;
	}
	/*if(bgRoom.style.left >= '100%'){
		moveX -= moveX;
	}*/
	/*if (ballY + div2.offsetHeight >= div1.offsetHeight || ballY <= 0) {
		directY = -directY;
	}*/
};


function ActionTop() {
	/*let rw = document.getElementById('rw');
	rw.style.transitionProperty = "height";
	rw.transitionDuration = "2s";*/
	let rw = document.getElementById('rw');
	let scoreRoute = rw.style.left;

	function rwAtop() {
		$('#rw').addClass('rwAtop');
		setTimeout("$('#rw').removeClass('rwAtop')", 100);
	}

	function rwAtopMore() {
			$('#rw').addClass('rwAtopMore');
			setTimeout("$('#rw').removeClass('rwAtopMore')", 100);
		}
		//let scoreRoute = rw.offsetLeft;

	//	if(scoreRoute<)
	//	$('#rw').removeClass('rwAtop');
	if (scoreRoute <= '14%' && scoreRoute >= '0') {
		rwAtop();
		score -= 1;
		//		alert("1");
	};
	if (scoreRoute <= '26%' && scoreRoute > '14%') {
		rwAtop();
		score += 1;
		//		alert("2");
	};
	if (scoreRoute <= '38%' && scoreRoute > '26%') {
		rwAtop();
		score += 1;
		//		alert("3");
	};
	if (scoreRoute <= '50%' && scoreRoute > '38%') {
		rwAtopMore();
		score += 1;
		//		alert("4");
	};
	if (scoreRoute <= '57%' && scoreRoute > '50%') {
		rwAtopMore();
		//		alert("5");
	};
	if (scoreRoute <= '74%' && scoreRoute > '57%') {
		rwAtop();
		//		alert("6");
	};
	if (scoreRoute <= '87%' && scoreRoute > '74%') {
		rwAtop();
		//		alert("7");
	};
	if (scoreRoute <= '100%' && scoreRoute > '87%') {
		rwAtop();
		//		alert("7");
	};
}

//setInterval(console.log(time), 1000);

//倒计时
function timeLess() {
	time = time - 1;
	if (time <= 0) {
		//		window.location.href = "1.html";
	};
};

function speedBack() {
	moveSpeed = 0.20;
}

function changeStyle() {
	let rwDYM = document.getElementById('rwDYM');
	let rw = document.getElementById('rw');
	rwDYM.style.display = 'block';
	rw.style.display = 'none';
	setTimeout("DYMBack()", 4000);
	return 0;
};

function changeStyleBack() {
	let rwDYM = document.getElementById('rwDYM');
	let rw = document.getElementById('rw');
	rwDYM.style.display = 'none';
	rw.style.display = 'block';
	return 1;
};

//let isDYM = changeStyle();

function DYMDecreaseTime() {
	if (DYMtime > 15) {
		DYMtime = 15;
	}
	if (DYMtime <= 15 && DYMtime >= 0) {
		DYMtime -= 1;
		console.log('剩余多少时间变成大姨妈  ' + DYMtime);
	}
	if (DYMtime < 0) {
		isDYM = changeStyle();
		console.log('变成大姨妈了  ' + isDYM);
	};
};


function DYMBack() {
		isDYM = 1;
		DYMtime = 15;
		changeStyleBack();
	}
	//大姨妈

function dym() {
	setTimeout("changeStyle()", 1500);
	let rwDYM = document.getElementById('rwDYM');
	let rw = document.getElementById('rw');
	rwDYM.style.display = 'none';
	rw.style.display = 'block';
	DYMtime += 15;
	return true;
}

//dym();

const myApp = angular.module('myAppp', [])
myApp.controller('personController', function($scope) {
	$scope.person = {
		firstName: "John",
		lastName: "Doe",
		fullName: function() {
			const x = $scope.person;
			return x.firstName + " " + x.lastName;
		}
	};
	$scope.name = "yjl";
	$scope.scoreFS = 0;
	//任务状态切换
	$scope.rw = "img/玛丽游戏中奔跑.gif";
	$scope.rwDYM = "img/玛丽-来了大姨妈2.gif";


	setInterval("timeLess()", 1000);
	setInterval("console.log(time)", 1000);
	//	$scope.time = time;
	$scope.time = time;


	$scope.score = function() {
		if (isDYM) {
			const rw = document.getElementById('rw');
			const scoreRoute = rw.style.left;

			function rwAtop() {
				$('#rw').addClass('rwAtop');
				setTimeout("$('#rw').removeClass('rwAtop')", 100);
			}

			function rwAtopMore() {
				$('#rw').addClass('rwAtopMore');
				setTimeout("$('#rw').removeClass('rwAtopMore')", 100);
			}


			if (scoreRoute <= '14%' && scoreRoute >= '-12%') {
				rwAtop();
				$scope.scoreFS -= 1;
			};
			if (scoreRoute <= '26%' && scoreRoute > '14%') {
				rwAtop();
				$scope.scoreFS += 1;
			};
			if (scoreRoute <= '38%' && scoreRoute > '26%') {
				rwAtop();
				$scope.scoreFS += 1;
			};
			if (scoreRoute <= '50%' && scoreRoute > '38%') {
				rwAtopMore();
				$scope.scoreFS += 1;
			};
			if (scoreRoute <= '57%' && scoreRoute > '50%') {
				rwAtopMore();
				$scope.scoreFS += 1;
				moveSpeed = 0.2;
				DYMtime += 15;
				setTimeout("speedBack()", 15000);
			};
			if (scoreRoute <= '74%' && scoreRoute > '57%') {
				rwAtop();
				$scope.scoreFS += 1;
			};
			if (scoreRoute <= '87%' && scoreRoute > '74%') {
				rwAtop();
				$scope.scoreFS -= 1;
			};
			if (scoreRoute <= '100%' && scoreRoute > '87%') {
				rwAtop();
			};
		} else {

		}
	}
});