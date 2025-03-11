/*
** 【动态线性小球】
** ↓使用方法↓
** 创建一个canvas画布，id = "linear_ball";
*/
var canvas = document.querySelector('#linear_ball');
var ctx = canvas.getContext('2d');
// 画布宽高
// 获取窗口可视区域宽高
var w = document.documentElement.clientWidth-6;
var h = document.documentElement.clientHeight-6;
// 更新canvas宽高
canvas.width = w;
canvas.height = h;
// 产生随机数
function r (num) {
	return parseInt(Math.random()*num);
};
// 创建小球类
function Ball (text) {
	this.x = r(380) + 60;// [60, 440)
	this.y = r(380) + 60;// [60, 440)
	this.r = r(30) + 10;// [10, 60)
	this.color = 'rgba('+r(255)+','+r(255)+','+r(255)+','+0.9+')';
	this.xSpeed = r(3) + 2;// [2, 5)
	this.ySpeed = r(3) + 1;// [1, 4)
	// 接收外部参数
	this.text = text;
};
// 定义小球显示方式
Ball.prototype.show = function () {
	this.run();// 更新坐标
	drawCircle(this.x, this.y, this.r, this.color);// 画小球
	drawText(this.text, this.x + this.r, this.y);// 画文字
};
// 定义小球运动方式（碰撞检测）
Ball.prototype.run = function () {
	if(this.x - this.r <= 0 || this.x + this.r >= w) {
		this.xSpeed = -this.xSpeed;
	};
	this.x = this.x + this.xSpeed;
	if(this.y - this.r <= 0 || this.y + this.r >= h) {
		this.ySpeed = -this.ySpeed;
	};
	this.y = this.y + this.ySpeed;
};
// 创建文字数组
var titleArr = '标志设计 VI延展 品牌设计 Logo 动画制作 网站设计 Web前端 在线工具 实用软件'.split(' ');
// 创建空数组（存放小球）
var ballArr = [];
for (var i = 0; i < 8; i++) {
	var ball = new Ball(titleArr[i]);// 传入title
	ballArr.push(ball);
	ball.show();
	//小球连线
	for (var j = 0; j < i; j++) {
		// 取当前小球前面的小球
		var prevBall = ballArr[j];
		drawLine(ball.x, ball.y, prevBall.x, prevBall.y);
	};
};
// 小球运动
setInterval(function () {
	ctx.clearRect(0, 0, w, h);// 清除画布
	for (var i = 0; i < ballArr.length; i++) {
		var ball = ballArr[i];
		ballArr[i].show();
		//小球连线
		for (var j = 0; j < i; j++) {
			// 取当前小球前面的小球
			var prevBall = ballArr[j];
			drawLine(ball.x, ball.y, prevBall.x, prevBall.y, ball.color);
		};
	};
},30);
// 画文字
function drawText (text, x, y) {
	ctx.font = '20px 微软雅黑';
	ctx.textAlign = 'top';
	ctx.textBaseline = 'middle';
	ctx.fillText(text, x, y);
};
// 画直线
function drawLine (x1, y1, x2, y2, color) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color || '#000';
	ctx.stroke();
	ctx.closePath();
};
// 画圆
function drawCircle (x, y, r, color) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2);
	ctx.fillStyle = color || '#000';
	ctx.fill();
};