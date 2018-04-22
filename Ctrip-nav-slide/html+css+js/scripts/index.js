// 插入的下拉项的数据
let slideContent = [ [], 
	[
		{ "text": "国内酒店", "href": "javascript:;" },
		{ "text": "海外酒店", "href": "javascript:;" },
		{ "text": "海外民宿+短租", "href": "javascript:;" },
		{ "text": "团购", "href": "javascript:;" },
		{ "text": "特价酒店", "href": "javascript:;" },
		{ "text": "途家公寓", "href": "javascript:;" },
		{ "text": "酒店+景点", "href": "javascript:;" },
		{ "text": "客栈民宿", "href": "javascript:;" },
		{ "text": "团队房", "href": "javascript:;" },
		{ "text": "会议", "href": "javascript:;" },
	], [
		{ "text": "旅游首页", "href": "javascript:;" },
		{ "text": "周末游", "href": "javascript:;" },
		{ "text": "跟团游", "href": "javascript:;" },
		{ "text": "自由行", "href": "javascript:;" },
		{ "text": "邮轮", "href": "javascript:;" },
		{ "text": "酒店+景点", "href": "javascript:;" },
		{ "text": "当地玩乐", "href": "javascript:;" },
		{ "text": "主题游", "href": "javascript:;" },
		{ "text": "定制旅行", "href": "javascript:;" },
		{ "text": "游学", "href": "javascript:;" },
		{ "text": "企业会奖", "href": "javascript:;" },
		{ "text": "高端游", "href": "javascript:;" },
		{ "text": "爱玩户外", "href": "javascript:;" },
		{ "text": "保险", "href": "javascript:;" },
		{ "text": "特卖会", "href": "javascript:;" }
	], [
		{ "text": "国内机票", "href": "javascript:;" },
		{ "text": "国际", "href": "javascript:;" },
		{ "text": "特价机票", "href": "javascript:;" },
		{ "text": "机+酒", "href": "javascript:;" },
		{ "text": "航班动态", "href": "javascript:;" },
		{ "text": "值机选座", "href": "javascript:;" },
		{ "text": "退票改签", "href": "javascript:;" },
		{ "text": "机场攻略", "href": "javascript:;" },
		{ "text": "机场巴士", "href": "javascript:;" },
		{ "text": "公务员通道", "href": "javascript:;" },
	], [
		{ "text": "国内火车票", "href": "javascript:;" },
		{ "text": "国际", "href": "javascript:;" }
	], [
		{ "text": "汽车票", "href": "javascript:;" },
		{ "text": "机场巴士", "href": "javascript:;" },
		{ "text": "船票", "href": "javascript:;" },
		{ "text": "游艇帆船", "href": "javascript:;" },
		{ "text": "到站游", "href": "javascript:;" }
	], [
		{ "text": "用车首页", "href": "javascript:;" },
		{ "text": "境外租车", "href": "javascript:;" },
		{ "text": "境外接送机", "href": "javascript:;" },
		{ "text": "境外包车", "href": "javascript:;" },
		{ "text": "国内租车", "href": "javascript:;" },
		{ "text": "国内接送机/火车", "href": "javascript:;" },
		{ "text": "国内包车", "href": "javascript:;" }
	], [
		{ "text": "境内门票", "href": "javascript:;" },
		{ "text": "出境", "href": "javascript:;" },
		{ "text": "当地玩乐", "href": "javascript:;" },
		{ "text": "出境WiFi", "href": "javascript:;" },
		{ "text": "周末游", "href": "javascript:;" },
		{ "text": "长隆", "href": "javascript:;" },
		{ "text": "机场停车", "href": "javascript:;" }
	], [
		{ "text": "团购首页", "href": "javascript:;" },
		{ "text": "酒店", "href": "javascript:;" },
		{ "text": "门票", "href": "javascript:;" },
		{ "text": "旅游", "href": "javascript:;" },
		{ "text": "美食", "href": "javascript:;" }
	], [], [
		{ "text": "名店购", "href": "javascript:;" },
		{ "text": "退税", "href": "javascript:;" },
		{ "text": "银联特惠", "href": "javascript:;" },
		{ "text": "万千赏", "href": "javascript:;" },
		{ "text": "外币兑换", "href": "javascript:;" }
	], [
		{ "text": "礼品卡首页", "href": "javascript:;" },
		{ "text": "礼品卡福袋", "href": "javascript:;" },
		{ "text": "存款证明", "href": "javascript:;" },
		{ "text": "兑换券", "href": "javascript:;" },
		{ "text": "外币兑换", "href": "javascript:;" }
	], [
		{ "text": "商旅首页", "href": "javascript:;" },
		{ "text": "企业差旅平台", "href": "javascript:;" },
		{ "text": "会议旅游", "href": "javascript:;" }
	], [], [], [
		{ "text": "优品商城", "href": "javascript:;" },
		{ "text": "超级会员", "href": "javascript:;" },
		{ "text": "合作卡", "href": "javascript:;" },
		{ "text": "携程运动", "href": "javascript:;" }
	]
]
// 创建元素，并将传入的属性参数添加到元素
function createElement(ele, propertyHash = {}){
	let element = document.createElement(ele);
	Object.keys(propertyHash).forEach(property => {
		element[property] = propertyHash[property]
	})
	return element;
}
// 添加下拉项DOM结构
function appendElement(eleArr){
	let documentFragment = document.createDocumentFragment(),
			slideWrapper = createElement('div', { className: 'slide_wrapper' }),
			slideContainer = createElement('div', { className: 'slide_container' });
	eleArr.forEach(ele => {
		let eleA = createElement('a', { className: 'slide_item', textContent: ele.text, href: ele.href });
		documentFragment.appendChild(eleA);
		// 下拉项的最后一项不添加竖线
		if(eleArr.indexOf(ele) !== eleArr.length - 1){
			let span = createElement('span', { className: 'line' });
			documentFragment.appendChild(span);
		}
	})
	slideContainer.appendChild(documentFragment);
	slideWrapper.appendChild(slideContainer);
	return slideWrapper;
}
// 数组slice方法
let slice = Array.prototype.slice;
// 动态切换目标元素的class,传入的参数：dom节点,切换的class名,发生的事件名(optinal)
function toggleClass(node, className, ev = null){ 
	if(ev){
		node.addEventListener(ev, () => {
			node.classList.toggle(className)
		})
	}
	node.classList.toggle(className)
}
// 动态切换目标元素中子元素的显示隐藏,传入的参数: 发生事件的目标节点,要切换的子节点或子节点数组,子节点显示或隐藏的标志,发生的事件名(optinal)
function toggleDisplay(parentNode, childNode, flag, ev = null){
	let child = Array.isArray(childNode) ? slice.call(childNode) : childNode;
	function appearOrDisappear(){
		if(Array.isArray(childNode)){
			childNode.forEach(childnode => {
				childnode.style.display = flag ? 'block' : 'none'
			})
		}else{
			childNode.style.display = flag ? 'block' : 'none'
		}
	}
	if(ev){
		parentNode.addEventListener(ev, appearOrDisappear)
	}
	return appearOrDisappear;
}
// 页面加载后直接添加下拉内容
/*window.addEventListener('load', () => {
	let navItem = document.querySelectorAll('.nav_item');
	slice.call(navItem).forEach((navitem, index) => {
		// 判断下拉内容不为空时添加下拉内容、切换背景动画、下拉内容的切换
		if(slideContent[index] && slideContent[index].length !== 0){ 
			// 添加下拉内容
			navitem.appendChild(appendElement(slideContent[index]))
			// 切换背景动画
			toggleClass(navitem, 'animateBg', 'mouseover')
			toggleClass(navitem, 'animateBg', 'mouseout')
			// 下拉内容切换
			let triangleTop = navitem.querySelector('.triangle_top'),
					slideWrapper = navitem.querySelector('.slide_wrapper');
			toggleDisplay(navitem, [triangleTop, slideWrapper], true, 'mouseover')
			toggleDisplay(navitem, [triangleTop, slideWrapper], false, 'mouseout')	
		}else if(index !== 0){ // 下拉内容为空时除第一个首页固定active,其余根据鼠标移入移出动态切换
			let text = navitem.querySelector('.text')
			toggleClass(text, 'active', 'mouseover')
			toggleClass(text, 'active', 'mouseout')
		}
	})
})*/
// 页面加载后等鼠标移入后再加载下拉内容
window.addEventListener('load', () => {
	let navItem = document.querySelectorAll('.nav_item');
	slice.call(navItem).forEach((navitem, index) => {
		let triangleTop = null,
				slideWrapper = null;
		if(slideContent[index] && slideContent[index].length > 0){
			navitem.addEventListener('mouseover', () => {
				toggleClass(navitem, 'animateBg') // 切换背景: 移入添加背景
				// 有下拉内容则进入,否则退出
				if(slideContent[index] && slideContent[index].length > 0){
					// 如果下拉存在则退出,否则添加
					slideWrapper ? '' : navitem.appendChild(appendElement(slideContent[index]))
					triangleTop = navitem.querySelector('.triangle_top');
					slideWrapper = navitem.querySelector('.slide_wrapper');
					// 当前鼠标放上去时显示子下拉
					toggleDisplay(navitem, [triangleTop, slideWrapper], true)()
				}else{
					return;
				}
			})
			navitem.addEventListener('mouseout', () => {
				// 有下拉内容则鼠标移出消失,否则退出
				slideWrapper ? toggleDisplay(navitem, [triangleTop, slideWrapper], false)() : '';
				toggleClass(navitem, 'animateBg') // 切换背景: 移出删除背景
			})
		}else if(index !== 0){ // 下拉内容为空时除第一个首页固定active,其余根据鼠标移入移出动态切换
			let text = navitem.querySelector('.text')
			toggleClass(text, 'mouseover', 'active')
			toggleClass(text, 'mouseout', 'active')
		}
	})
})