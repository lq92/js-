/**
	* es6写法——选项卡
	* @param 根dom对象和一个选项对象(包含：方法/鼠标放置的目标元素/切换元素/切换类名)
	* 原型方法：addClass(给目标元素添加class)/removeClass(给一组目标移除class)/switch(选项卡切换)
	*/
class Tab {
	constructor(dom, options){
		this.dom = dom;
		this.options = Object.assign({
			methods: 'click',
			cursorTarget: '.title',
			switchTarget: '.content',
			switchClass: 'active'
		}, options);
	}
	addClass(dom, className = this.options.switchClass){
		dom.classList.add(className);
	}
	removeClass(domList, className = this.options.switchClass){
		[...domList].forEach(dom => dom.classList.remove(className))
	}
	switch(options = this.options){
		let parent = document.querySelector(this.dom),
				titles = parent.querySelectorAll(options.cursorTarget),
				contents = parent.querySelectorAll(options.switchTarget);
		[...titles].forEach((title, index) => {
			title.addEventListener(options.methods, () => {
				this.removeClass(titles);
				this.addClass(title);
				this.removeClass(contents);
				this.addClass(contents[index]);
			})
		})
	}
}
new Tab('.tab1', {}).switch();
new Tab('.tab2', { methods: 'mouseover' }).switch();

/**
	* es5写法——选项卡
	*/
/*function Tab(dom){
	this.dom = dom;
	this.options = {
		cursorTarget: '.title',
		switchTarget: '.content',
		switchClass: 'active'
	}
}
Tab.prototype.removeClass = function(domList, className){
	[...domList].forEach(dom => dom.classList.remove(className));
}
Tab.prototype.addClass = function(dom, className){
	dom.classList.add(className);
}
Tab.prototype.switch = function(options = this.options){
	let tab = document.querySelector(this.dom),
			titles = tab.querySelectorAll(options.cursorTarget),
			contents = tab.querySelectorAll(options.switchTarget);
	[...titles].forEach((item, index) => {
		item.addEventListener('mouseover', () => {
			this.removeClass(titles, options.switchClass);
			this.addClass(item, options.switchClass);
			this.removeClass(contents, options.switchClass);
			this.addClass(contents[index], options.switchClass);
		})
	})
}
new Tab('.tab1').switch()
new Tab('.tab2').switch()*/

/**
	* 面向过程写法——选项卡，缺少抽象功能，后续更改比较麻烦，多个选项卡要一一声明
	*/
/*let tab1 = document.querySelector('.tab1'),
		titles = tab1.querySelectorAll('.title'),
		contents = tab1.querySelectorAll('.content');
[...titles].forEach((item, index) => {
	item.addEventListener('mouseover', () => {
		[...titles].forEach(title => title.classList.remove('active'));
		item.classList.add('active');
		[...contents].forEach(content => content.classList.remove('active'));
		contents[index].classList.add('active');
	})
})
let tab2 = document.querySelector('.tab2'),
		titles2 = tab2.querySelectorAll('.title'),
		contents2 = tab2.querySelectorAll('.content');
[...titles2].forEach((item, index) => {
	item.addEventListener('mouseover', () => {
		[...titles2].forEach(title => title.classList.remove('active'));
		item.classList.add('active');
		[...contents2].forEach(content => content.classList.remove('active'));
		contents2[index].classList.add('active');
	})
})*/
