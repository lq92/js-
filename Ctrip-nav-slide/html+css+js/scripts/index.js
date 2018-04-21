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
// 添加下拉想DOM结构
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
window.addEventListener('load', () => {
	let navItem = document.querySelectorAll('.nav_item');
	Array.prototype.slice.call(navItem).forEach((navitem, index) => {
		// 判断下拉不为空时添加
		if(slideContent[index] && slideContent[index].length !== 0){ 
			navitem.appendChild(appendElement(slideContent[index]))
			navitem.addEventListener('mouseover', (ev) => {
				navitem.classList.add('animateBg')
			})
			navitem.addEventListener('mouseout', (ev) => {
				navitem.classList.remove('animateBg')
			})
		}else if(index !== 0){ // 为空时除第一个固定active,其余动态切换
			navitem.addEventListener('mouseover', (ev) => {
				navitem.children[0].classList.add('active')
			})
			navitem.addEventListener('mouseout', (ev) => {
				navitem.children[0].classList.remove('active')
			})
		}
	})
})