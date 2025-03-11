/*获取当前元素样式的兼容函数*/
function getStyle(element, property){
	return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element)[property];
};

/*
** 【头部文字颜色变化】
** @param init scrollY 卷起的高度为多少时 开始更改文字颜色
** @factor1，需要变化的悬浮头部id为header
** @factor2，需要变化的悬浮头部文字必须有a标签包裹
** ↓使用方法↓
** ChangeHeaderColor(init);
*/
function ChangeHeaderColor(init){
	var header = document.querySelector('#header'),
		header_li = document.querySelectorAll('.header a');
	window.onscroll = function(){
		if (init === undefined) {
			init = 60;
		};
		if (scrollY > init) {
			header.style.background = '#ffffff';
			var i;
			for (i = 0; i < header_li.length; i++) {
				header_li[i].style.color = '#000000';	
			};
			header.style.borderStyle = 'none none solid';
			header.style.borderWidth = '1px';
			header.style.borderColor = '#cccccc';
		}else{
			header.style.background = 'linear-gradient(120deg, #3498db, #8e44ad)';
			var i;
			for (i = 0; i < header_li.length; i++) {
				header_li[i].style.color = '#ffffff';	
			}
			header.style.border = 'none';
		};
	};
};

/*
** 【鼠标悬停显示链接地址】
** @factor，需要悬停显示链接地址的元素class类名为show_link
** ↓使用方法↓
** ShowLink();
*/
function ShowLink(){
	var aa = document.querySelectorAll('.show_link');
	var i;
	for (i = 0; i < aa.length; i++) {
		var bb = aa[i].attributes["href"].value;
		aa[i].title = bb;
	};
};

/*
** 【先快后慢 滑动置顶】
** @param setInterval(function(){},time) 设置时间控制滑动速度
** ↓使用方法↓
** onclick = "ccGoTop()"
*/
// ccGoTop = function(){
// 	timer = setInterval(function(){
// 		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;//获取scrolltop值
// 		speed = scrolltop / 5;//获取一个变动(top值越小，speed越小)的数值，实现缓冲效果
// 		document.documentElement.scrollTop = document.body.scrollTop = scrolltop - speed;
// 		//如果scrolltop值为0的时候关闭定时器
// 		if(scrolltop == 0){
// 			clearInterval(timer);
// 		}
// 		flag = true;
// 	},20);
// };